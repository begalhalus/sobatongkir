import { Router } from 'express'
import users from './users'

import * as formData from 'express-form-data'

require('express-group-routes')

const routes: any = Router()
routes.group('/v1', (router) => {
  router.use(formData.parse())
  router.use('/', users)
})

export default routes
