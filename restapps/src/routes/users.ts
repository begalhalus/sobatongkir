import { Router } from 'express'
import UsersController from '../controllers/UsersController'

const routes = Router()

routes.get('/origin', UsersController.origin)
routes.get('/destination', UsersController.destination)
routes.get('/search', UsersController.search)

export default routes
