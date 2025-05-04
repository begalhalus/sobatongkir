import { Users } from '../entity/Users'
import PostgresDB from '../sources/mongo'

const UsersData = [
  {
    name: 'Alif',
    phone: '62800000001',
    address: 'Alamat Manado',
    kelurahan: 'Paniki Bawah',
    kecamatan: 'Mapanget',
    kota: 'Manado',
    provinsi: 'Sulawesi Utara'
  },
  {
    name: 'Budi',
    phone: '62800000002',
    address: 'Alamat Depok',
    kelurahan: 'Bakti Jaya',
    kecamatan: 'Sukmajaya',
    kota: 'Depok',
    provinsi: 'Jawa Barat'
  },
  {
    name: 'Nura',
    phone: '62800000003',
    address: 'Alamat Madiun',
    kelurahan: 'Jiwan',
    kecamatan: 'Jiwan',
    kota: 'Madiun',
    provinsi: 'Jawa Timur'
  },
  {
    name: 'Anam',
    phone: '62800000004',
    address: 'Alamat Surabaya',
    kelurahan: 'Pakis',
    kecamatan: 'Sawahan',
    kota: 'Surabaya',
    provinsi: 'Jawa Timur'
  },
  {
    name: 'Yusuf',
    phone: '62800000005',
    address: 'Alamat Bandung 1',
    kelurahan: 'Pasteur',
    kecamatan: 'Sukajadi',
    kota: 'Bandung',
    provinsi: 'Jawa Barat'
  },
  {
    name: 'Dian',
    phone: '62800000006',
    address: 'Alamat Lampung',
    kelurahan: 'Negara Ratu',
    kecamatan: 'Natar',
    kota: 'Natar',
    provinsi: 'Lampung'
  },
  {
    name: 'Lita',
    phone: '62800000007',
    address: 'Alamat Tasikmalaya',
    kelurahan: 'Sukamaju kaler',
    kecamatan: 'Indihiang',
    kota: 'Tasikmalaya',
    provinsi: 'Jawa Barat'
  },
  {
    name: 'Nora',
    phone: '62800000008',
    address: 'Alamat Batang',
    kelurahan: 'Ponowareng',
    kecamatan: 'Tulis',
    kota: 'Batang',
    provinsi: 'Jawa Tengah'
  },
  {
    name: 'Wanto',
    phone: '62800000009',
    address: 'Alamat Bandung 2',
    kelurahan: 'Pasirjati',
    kecamatan: 'Ujungberung',
    kota: 'Bandung',
    provinsi: 'Jawa Barat'
  },
  {
    name: 'Muar',
    phone: '62800000010',
    address: 'Alamat Jakarta Pusat 1',
    kelurahan: 'Cempaka Putih Timur',
    kecamatan: 'Cempaka Putih',
    kota: 'Jakarta Pusat',
    provinsi: 'DKI Jakarta'
  },
  {
    name: 'Alian',
    phone: '62800000011',
    address: 'Alamat Bogor',
    kelurahan: 'Pondok Rajeg',
    kecamatan: 'Cibinong',
    kota: 'Bogor',
    provinsi: 'Jawa Barat'
  },
  {
    name: 'Tyo',
    phone: '62800000012',
    address: 'Alamat Tangerang',
    kelurahan: 'Kadu',
    kecamatan: 'Curug',
    kota: 'Tangerang',
    provinsi: 'Banten'
  },
  {
    name: 'Wira',
    phone: '62800000013',
    address: 'Alamat Jakarta Timur',
    kelurahan: 'Lubang Buaya',
    kecamatan: 'Cipayung',
    kota: 'Jakarta Timur',
    provinsi: 'DKI Jakarta'
  },
  {
    name: 'Roni',
    phone: '62800000014',
    address: 'Alamat Bali',
    kelurahan: 'Sesetan',
    kecamatan: 'Denpasar Selatan',
    kota: 'Denpasar',
    provinsi: 'Bali'
  },
  {
    name: 'Roni',
    phone: '62800000015',
    address: 'Alamat Jakarta Pusat 2',
    kelurahan: 'Kebon Kacang',
    kecamatan: 'Tanah Abang',
    kota: 'Jakarta Pusat',
    provinsi: 'DKI Jakarta'
  },
  {
    name: 'Ilham',
    phone: '62800000018',
    address: 'Alamat Papua',
    kelurahan: 'Koperapoka',
    kecamatan: 'Mimika baru',
    kota: 'Mimika',
    provinsi: 'Papua'
  },
  {
    name: 'Asep',
    phone: '62800000022',
    address: 'Alamat Cilacap',
    kelurahan: 'Jambusari',
    kecamatan: 'Jeruklegi',
    kota: 'Cilacap',
    provinsi: 'Jawa Tengah'
  },
  {
    name: 'Rana',
    phone: '62800000054',
    address: 'Alamat Sidoarjo',
    kelurahan: 'Mojoruntut',
    kecamatan: 'Krembung',
    kota: 'Sidoarjo',
    provinsi: 'Jawa Timur'
  },
  {
    name: 'Agil',
    phone: '62800000098',
    address: 'Alamat Magelang',
    kelurahan: 'Bulurejo',
    kecamatan: 'Mertoyudan',
    kota: 'Magelang',
    provinsi: 'Jawa Tengah'
  },
  {
    name: 'Amal',
    phone: '62800008790',
    address: 'Alamat Nganjuk',
    kelurahan: 'Jarakan',
    kecamatan: 'Kramat',
    kota: 'Nganjuk',
    provinsi: 'Jawa Timur'
  },
  {
    name: 'Celcius',
    phone: '62800067906',
    address: 'Alamat Jakarta Utara',
    kelurahan: 'Pejagalan',
    kecamatan: 'Penjaringan',
    kota: 'Jakarta Utara',
    provinsi: 'DKI Jakarta'
  },
  {
    name: 'Muar',
    phone: '62800000028',
    address: 'Alamat Pontianak',
    kelurahan: 'Parit Baru',
    kecamatan: 'Sungai Raya',
    kota: 'Kubu Raya',
    provinsi: 'Kalimantan Barat'
  }
]

export async function seedUsers() {
  try {
    const UsersRepository = PostgresDB.getRepository(Users)

    for (const userData of UsersData) {
      // Cek apakah data sudah ada
      const existingUser = await UsersRepository.findOneBy({ name: userData.name })

      if (!existingUser) {
        const newUsers = new Users()
        newUsers.name = userData.name
        newUsers.phone = userData.phone
        newUsers.address = userData.address
        newUsers.kelurahan = userData.kelurahan
        newUsers.kecamatan = userData.kecamatan
        newUsers.kota = userData.kota
        newUsers.provinsi = userData.provinsi

        // Generate slug dari name
        newUsers.slug = userData.name.toLowerCase().replace(/ /g, '-')

        await UsersRepository.save(newUsers)
        console.log(`Regenci ${userData.name} seeded`)
      } else {
        console.log(`Regenci ${userData.name} already exists`)
      }
    }

    console.log('Users seeding completed')
  } catch (error) {
    console.error('Error seeding Users:', error)
  }
}
