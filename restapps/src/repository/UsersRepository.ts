import { EntityManager, ILike } from 'typeorm'
import { Districts } from '../entity/Districts'
import { Users } from '../entity/Users'

class UsersRepository {
  manage: EntityManager

  constructor(manage: EntityManager) {
    this.manage = manage
  }

  private async generateQuery(options: Record<string, any>): Promise<any> {
    const query: any = {
      where: {},
      order: {},
      skip: 0,
      take: 10
    }

    if (options.q) {
      query.where = [{ name: ILike(`%${options.q}%`) }, { alt_name: ILike(`%${options.q}%`) }]
    }

    if (options.sortField && options.sort) {
      query.order = {
        [options.sortField]: options.sort.toUpperCase()
      }
    }

    if (options.limit && options.offset !== undefined) {
      query.take = options.limit
      query.skip = options.offset
    }

    return query
  }

  private async generateQueryAgent(options: Record<string, any>): Promise<any> {
    const query: any = {
      where: {},
      order: {},
      skip: 0,
      take: 10
    }

    if (options.q) {
      query.where = [{ kecamatan: ILike(`%${options.q}%`) }]
    }

    if (options.sortField && options.sort) {
      query.order = {
        [options.sortField]: options.sort.toUpperCase()
      }
    }

    if (options.limit && options.offset !== undefined) {
      query.take = options.limit
      query.skip = options.offset
    }

    return query
  }

  async UsersList(options: Record<string, any>): Promise<any> {
    const CustomRepos = this.manage.getRepository(Districts)

    try {
      const query = await this.generateQuery(options)

      const [list, total] = await CustomRepos.findAndCount(query)

      return { list, total }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async AgentList(options: Record<string, any>): Promise<any> {
    const CustomRepos = this.manage.getRepository(Users)

    try {
      const query = await this.generateQueryAgent(options)

      const [list, total] = await CustomRepos.findAndCount(query)

      return { list, total }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default UsersRepository
