import { Request, Response } from 'express'
import { Users, UsersListEntity } from '../entity/Users'
import { Repository, ILike, getManager } from 'typeorm'
import response from '../helpers/response'
import message from '../helpers/message'
import MongoDB from '../sources/mongo'
import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import * as timezone from 'dayjs/plugin/timezone'
import axios from 'axios'
import UsersRepository from '../repository/UsersRepository'
import { Districts } from '../entity/Districts'
import helper from '../helpers/function'

// set config datetime
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Jakarta')

class UsersService {
  credential: {
    user_id: string
    name: string
  }
  body: Request['body']
  params: Request['params']
  res: Response
  req: any
  repoUsers: Repository<Users>
  repoDistricts: Repository<Districts>

  constructor(req: any, res: Response) {
    this.credential = req.app.locals.credential
    this.body = req.body
    this.params = req.params
    this.res = res
    this.req = req
    this.repoUsers = MongoDB.getRepository(Users)
    this.repoDistricts = MongoDB.getRepository(Districts)
  }

  /**
   *
   * @param {*} this.body
   * @return {import response from '../helpers/response').success}
   * @description list
   */
  origin = async () => {
    const CustomRepos = new UsersRepository(this.repoUsers.manager)

    const { search, sort, sort_field } = this.req.query
    const pages: number = parseInt(this.req.query.page) || 1
    const limit: number = parseInt(this.req.query.limit) || 10
    const offset: number = (pages - 1) * limit

    try {
      const filterRepo: Record<string, any> = {}

      if (typeof search !== 'undefined') {
        filterRepo.q = search
      }

      if (typeof sort !== 'undefined' && typeof sort_field !== 'undefined') {
        filterRepo.sort = sort
        filterRepo.sortField = sort_field
      }
      filterRepo.pages = pages
      filterRepo.limit = limit
      filterRepo.offset = offset
      console.log('masuk')
      let { list, total } = await CustomRepos.UsersList(filterRepo)

      const result = {
        list,
        total_page: Math.ceil(total / limit),
        total_data: total,
        page: pages,
        limit
      }
      return await response.success(result, 'success', this.res)
    } catch (error) {
      return response.failed({}, error.message, this.res)
    }
  }

  /**
   *
   * @param {*} this.body
   * @return {import response from '../helpers/response').success}
   * @description list
   */
  destination = async () => {
    const CustomRepos = new UsersRepository(this.repoUsers.manager)

    const { search, sort, sort_field } = this.req.query
    const pages: number = parseInt(this.req.query.page) || 1
    const limit: number = parseInt(this.req.query.limit) || 10
    const offset: number = (pages - 1) * limit

    try {
      const filterRepo: Record<string, any> = {}

      if (typeof search !== 'undefined') {
        filterRepo.q = search
      }

      if (typeof sort !== 'undefined' && typeof sort_field !== 'undefined') {
        filterRepo.sort = sort
        filterRepo.sortField = sort_field
      }

      filterRepo.pages = pages
      filterRepo.limit = limit
      filterRepo.offset = offset

      const { list, total } = await CustomRepos.AgentList(filterRepo)
      if (!list.length) {
        return response.success(
          { list: [], total_page: 0, total_data: 0, page: 1, limit },
          'data tidak ditemukan',
          this.res
        )
      }

      const data = list[0]
      const wheres: any = {
        where: {
          name: ILike(`%${data.kecamatan}%`)
        }
      }

      const originDistrict: any = await this.repoDistricts.findOne(wheres)
      if (!originDistrict) {
        return response.success(
          { list: [], total_page: 0, total_data: 0, page: 1, limit },
          'Kecamatan asal tidak ditemukan',
          this.res
        )
      }

      const allAgents = await CustomRepos.AgentList({ limit: 1000 })
      const agentsWithDistance = await Promise.all(
        allAgents.list.map(async (agent: any) => {
          const district = await this.repoDistricts.findOne({
            where: {
              name: ILike(`%${agent.kecamatan}%`)
            }
          })

          if (district) {
            const distance = helper.getDistanceFromLatLonInKm(
              originDistrict.latitude,
              originDistrict.longitude,
              district.latitude,
              district.longitude
            )

            return {
              ...agent,
              latitude: district.latitude,
              longitude: district.longitude,
              distance
            }
          }

          return null
        })
      )

      const sortedNearbyAgents = agentsWithDistance
        .filter((item) => item !== null)
        .sort((a, b) => a.distance - b.distance)

      const nearestAgents = await Promise.all(
        sortedNearbyAgents.map(async (agent: any) => {
          const district = await this.repoDistricts.findOne({
            where: { name: ILike(`%${agent.kecamatan}%`) }
          })

          if (district) {
            return {
              id: district.id,
              name: district.name,
              alt_name: `${agent.name} - ${district.alt_name}`,
              latitude: district.latitude,
              longitude: district.longitude,
              distance: agent.distance
            }
          }

          return null
        })
      )

      const finalAgents = nearestAgents.filter((item) => item !== null)

      const result = {
        list: finalAgents,
        total_page: Math.ceil(finalAgents.length / limit),
        total_data: finalAgents.length,
        page: 1,
        limit
      }

      return await response.success(result, 'success', this.res)
    } catch (error) {
      return response.failed({}, error.message, this.res)
    }
  }

  /**
   *
   * @param {*} this.body
   * @return {import response from '../helpers/response').success}
   * @description create login
   */

  search = async (): Promise<any> => {
    const { search_asal, search_tujuan, weight } = this.req.query

    try {
      const token = await helper.getToken()

      const headers = {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }

      console.log(headers)

      // Ambil postal_code asal
      const asalResponse = await axios.get(`https://client-api-sandbox.everpro.id/location/v1/sub-districts`, {
        params: { sub_district_name: search_asal },
        headers
      })

      const tujuanResponse = await axios.get(`https://client-api-sandbox.everpro.id/location/v1/sub-districts`, {
        params: { sub_district_name: search_tujuan },
        headers
      })

      // Pastikan ada datanya
      const asalData = asalResponse.data.data?.[0]
      const tujuanData = tujuanResponse.data.data?.[0]

      if (!asalData || !tujuanData) {
        return await response.failed({}, 'Asal atau Tujuan tidak ditemukan', this.res)
      }

      const shippingOptions = {
        origin_postal_code: asalData.postal_code,
        destination_postal_code: tujuanData.postal_code,
        package_type_id: 1,
        shipment_type: 'DROP',
        weight: parseInt(weight)
      }

      const shippingResponse = await axios.post(
        'https://client-api-sandbox.everpro.id/shipment/v2/rates',
        shippingOptions,
        { headers }
      )

      console.log(shippingResponse)

      return await response.success(shippingResponse.data, 'success', this.res)
    } catch (error) {
      console.error(error)
      return await response.failed({}, error.message, this.res)
    }
  }
}

export default UsersService
