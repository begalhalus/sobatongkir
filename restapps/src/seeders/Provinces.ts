import { Provinces } from '../entity/Provinces'
import PostgresDB from '../sources/mongo'

const ProvincesData = [
  {
    province_id: '11',
    name: 'ACEH',
    alt_name: 'ACEH',
    latitude: 4.36855,
    longitude: 97.0253
  },
  {
    province_id: '12',
    name: 'SUMATERA UTARA',
    alt_name: 'SUMATERA UTARA',
    latitude: 2.19235,
    longitude: 99.38122
  },
  {
    province_id: '13',
    name: 'SUMATERA BARAT',
    alt_name: 'SUMATERA BARAT',
    latitude: -1.34225,
    longitude: 100.0761
  },
  {
    province_id: '14',
    name: 'RIAU',
    alt_name: 'RIAU',
    latitude: 0.50041,
    longitude: 101.54758
  },
  {
    province_id: '15',
    name: 'JAMBI',
    alt_name: 'JAMBI',
    latitude: -1.61157,
    longitude: 102.7797
  },
  {
    province_id: '16',
    name: 'SUMATERA SELATAN',
    alt_name: 'SUMATERA SELATAN',
    latitude: -3.12668,
    longitude: 104.09306
  },
  {
    province_id: '17',
    name: 'BENGKULU',
    alt_name: 'BENGKULU',
    latitude: -3.51868,
    longitude: 102.53598
  },
  {
    province_id: '18',
    name: 'LAMPUNG',
    alt_name: 'LAMPUNG',
    latitude: -4.8555,
    longitude: 105.0273
  },
  {
    province_id: '19',
    name: 'KEPULAUAN BANGKA BELITUNG',
    alt_name: 'KEPULAUAN BANGKA BELITUNG',
    latitude: -2.75775,
    longitude: 107.58394
  },
  {
    province_id: '21',
    name: 'KEPULAUAN RIAU',
    alt_name: 'KEPULAUAN RIAU',
    latitude: -0.15478,
    longitude: 104.58037
  },
  {
    province_id: '31',
    name: 'DKI JAKARTA',
    alt_name: 'DKI JAKARTA',
    latitude: 6.1745,
    longitude: 106.8227
  },
  {
    province_id: '32',
    name: 'JAWA BARAT',
    alt_name: 'JAWA BARAT',
    latitude: -6.88917,
    longitude: 107.64047
  },
  {
    province_id: '33',
    name: 'JAWA TENGAH',
    alt_name: 'JAWA TENGAH',
    latitude: -7.30324,
    longitude: 110.00441
  },
  {
    province_id: '34',
    name: 'DI YOGYAKARTA',
    alt_name: 'DI YOGYAKARTA',
    latitude: 7.7956,
    longitude: 110.3695
  },
  {
    province_id: '35',
    name: 'JAWA TIMUR',
    alt_name: 'JAWA TIMUR',
    latitude: -6.96851,
    longitude: 113.98005
  },
  {
    province_id: '36',
    name: 'BANTEN',
    alt_name: 'BANTEN',
    latitude: -6.44538,
    longitude: 106.13756
  },
  {
    province_id: '51',
    name: 'BALI',
    alt_name: 'BALI',
    latitude: -8.23566,
    longitude: 115.12239
  },
  {
    province_id: '52',
    name: 'NUSA TENGGARA BARAT',
    alt_name: 'NUSA TENGGARA BARAT',
    latitude: -8.12179,
    longitude: 117.63696
  },
  {
    province_id: '53',
    name: 'NUSA TENGGARA TIMUR',
    alt_name: 'NUSA TENGGARA TIMUR',
    latitude: -8.56568,
    longitude: 120.69786
  },
  {
    province_id: '61',
    name: 'KALIMANTAN BARAT',
    alt_name: 'KALIMANTAN BARAT',
    latitude: -0.13224,
    longitude: 111.09689
  },
  {
    province_id: '62',
    name: 'KALIMANTAN TENGAH',
    alt_name: 'KALIMANTAN TENGAH',
    latitude: -1.49958,
    longitude: 113.29033
  },
  {
    province_id: '63',
    name: 'KALIMANTAN SELATAN',
    alt_name: 'KALIMANTAN SELATAN',
    latitude: -2.94348,
    longitude: 115.37565
  },
  {
    province_id: '64',
    name: 'KALIMANTAN TIMUR',
    alt_name: 'KALIMANTAN TIMUR',
    latitude: 0.78844,
    longitude: 116.242
  },
  {
    province_id: '65',
    name: 'KALIMANTAN UTARA',
    alt_name: 'KALIMANTAN UTARA',
    latitude: 2.72594,
    longitude: 116.911
  },
  {
    province_id: '71',
    name: 'SULAWESI UTARA',
    alt_name: 'SULAWESI UTARA',
    latitude: 0.65557,
    longitude: 124.09015
  },
  {
    province_id: '72',
    name: 'SULAWESI TENGAH',
    alt_name: 'SULAWESI TENGAH',
    latitude: -1.69378,
    longitude: 120.80886
  },
  {
    province_id: '73',
    name: 'SULAWESI SELATAN',
    alt_name: 'SULAWESI SELATAN',
    latitude: -3.64467,
    longitude: 119.94719
  },
  {
    province_id: '74',
    name: 'SULAWESI TENGGARA',
    alt_name: 'SULAWESI TENGGARA',
    latitude: -3.54912,
    longitude: 121.72796
  },
  {
    province_id: '75',
    name: 'GORONTALO',
    alt_name: 'GORONTALO',
    latitude: 0.71862,
    longitude: 122.45559
  },
  {
    province_id: '76',
    name: 'SULAWESI BARAT',
    alt_name: 'SULAWESI BARAT',
    latitude: -2.49745,
    longitude: 119.3919
  },
  {
    province_id: '81',
    name: 'MALUKU',
    alt_name: 'MALUKU',
    latitude: -3.11884,
    longitude: 129.42078
  },
  {
    province_id: '82',
    name: 'MALUKU UTARA',
    alt_name: 'MALUKU UTARA',
    latitude: 0.63012,
    longitude: 127.97202
  },
  {
    province_id: '91',
    name: 'PAPUA BARAT',
    alt_name: 'PAPUA BARAT',
    latitude: -1.38424,
    longitude: 132.90253
  },
  {
    province_id: '94',
    name: 'PAPUA',
    alt_name: 'PAPUA',
    latitude: -3.98857,
    longitude: 138.34853
  }
]

export async function seedProvinces() {
  try {
    const ProvincesRepository = PostgresDB.getRepository(Provinces)

    for (const provinceData of ProvincesData) {
      // Cek apakah data sudah ada
      const existingProvince = await ProvincesRepository.findOneBy({ province_id: provinceData.province_id })

      if (!existingProvince) {
        const newProvince = new Provinces()
        newProvince.province_id = provinceData.province_id
        newProvince.name = provinceData.name
        newProvince.alt_name = provinceData.alt_name
        newProvince.latitude = provinceData.latitude
        newProvince.longitude = provinceData.longitude

        // Generate slug dari name
        newProvince.slug = provinceData.name.toLowerCase().replace(/ /g, '-')

        await ProvincesRepository.save(newProvince)
        console.log(`Province ${provinceData.name} seeded`)
      } else {
        console.log(`Province ${provinceData.name} already exists`)
      }
    }

    console.log('Provinces seeding completed')
  } catch (error) {
    console.error('Error seeding Provinces:', error)
  }
}
