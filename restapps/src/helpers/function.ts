import axios from 'axios'

class Function {
  public static malform = async (tar: any): Promise<any> => {
    const obj = {}
    tar = tar.replace(/^\{|\}$/g, '').split(',')
    for (let i = 0, cur: any, pair: any; (cur = tar[i]); i++) {
      pair = cur.split(':')
      obj[pair[0]] = /^\d*$/.test(pair[1]) ? +pair[1] : pair[1]
    }
    return obj
  }

  public static GenerateSlug = async (str: any): Promise<any> => {
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()

    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaeeeeiiiioooouuuunc------'
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')

    return str
  }

  static isJsonString = (str: string): boolean => {
    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }
    return true
  }

  public static getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371 // Radius bumi dalam KM
    const dLat = Function.deg2rad(lat2 - lat1)
    const dLon = Function.deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(Function.deg2rad(lat1)) * Math.cos(Function.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  public static deg2rad(deg: number): number {
    return deg * (Math.PI / 180)
  }

  public static getToken = async (): Promise<string> => {
    let cachedToken: string | null = null
    let tokenExpiry: number = 0

    const now = Math.floor(Date.now() / 1000)

    if (cachedToken && tokenExpiry > now + 60) {
      return cachedToken
    }

    const response = await axios.post('https://client-api-sandbox.everpro.id/auth/v1/token', {
      client_key: 'HSZbhbsIMfAJvZsI4ybusGPDE8htJ7zY',
      client_secret: 'Quc2H8iL8UZmzhNbOo5CQwRagX5JJKHR'
    })

    const { token, expires } = response.data.data
    cachedToken = token
    tokenExpiry = now + expires

    return token
  }
}

export default Function
