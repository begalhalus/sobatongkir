/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { DataSource } from 'typeorm'
import { Users } from '../entity/Users'
import { Districts } from '../entity/Districts'
import { Provinces } from '../entity/Provinces'
import { Regencies } from '../entity/Regencies'
import { Villages } from '../entity/Villages'
import * as path from 'path'
import * as dotenv from 'dotenv'

const dotenvAbsolutePath = path.join(__dirname, '../../.env')
dotenv.config({
  path: dotenvAbsolutePath
})
const PostgresDB = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: ['query', 'error'],
  entities: [Users, Districts, Provinces, Regencies, Villages],
  migrations: [],
  subscribers: []
})

function initializeMongoDB() {
  PostgresDB.initialize()
    .then(async () => {
      console.log('Data Source has been initialized OK')

      // seeders
      // const { seedDistricts } = await import('../seeders/Districts')
      // await seedDistricts()

      // const { seedProvinces } = await import('../seeders/Provinces')
      // await seedProvinces()

      // const { seedRegencies } = await import('../seeders/Regencies')
      // await seedRegencies()

      // const { seedVillages } = await import('../seeders/Villages')
      // await seedVillages()

      // const { seedUsers } = await import('../seeders/Users')
      // await seedUsers()
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err)
      setTimeout(initializeMongoDB, 3000)
    })
}

initializeMongoDB()

export default PostgresDB
