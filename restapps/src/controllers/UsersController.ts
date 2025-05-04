import { Request, Response } from 'express'
import UsersService from '../services/UsersService'
import response from '../helpers/response'

class UsersController {
  static origin = async (req: Request, res: Response): Promise<void> => {
    const service: UsersService = new UsersService(req, res)

    try {
      await service.origin()
    } catch (error) {
      return await response.failed('', 'failed', res)
    }
  }

  static search = async (req: Request, res: Response): Promise<void> => {
    const service: UsersService = new UsersService(req, res)

    try {
      await service.search()
    } catch (error) {
      return await response.failed('', 'failed', res)
    }
  }

  static destination = async (req: Request, res: Response): Promise<void> => {
    const service: UsersService = new UsersService(req, res)

    try {
      await service.destination()
    } catch (error) {
      return await response.failed('', 'failed', res)
    }
  }
}

export default UsersController
