import 'reflect-metadata'
import * as express from 'express'
import * as helmet from 'helmet'
import * as cors from 'cors'
import * as logger from 'morgan'
import * as path from 'path'
import * as dotenv from 'dotenv'
import * as bodyParser from 'body-parser'
import routes from './routes'
import { trim_all } from 'request_trimmer'

const dotenvAbsolutePath = path.join(__dirname, '../.env')
dotenv.config({
  path: dotenvAbsolutePath
})
const app = express()
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}

if (['dev', 'development'].includes(process.env.NODE_ENV)) {
  app.use(logger('dev'))
}

// set public link
app.use(express.static(path.join(__dirname, 'public')))
app.use('/docs/', express.static(path.join(__dirname, 'public')))
app.use('/images/', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(trim_all)
app.use(cors(corsOptions))
app.use(helmet())
app.use('/', routes)

app.listen(process.env.APP_PORT, () => {
  console.log('Server started on port ' + process.env.APP_PORT)
})
