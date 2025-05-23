import { Regencies } from '../entity/Regencies'
import PostgresDB from '../sources/mongo'

const RegenciesData = [
  {
    regency_id: '1101',
    province_id: '11',
    name: 'KABUPATEN SIMEULUE',
    alt_name: 'KABUPATEN SIMEULUE',
    latitude: 2.61667,
    longitude: 96.08333
  },
  {
    regency_id: '1102',
    province_id: '11',
    name: 'KABUPATEN ACEH SINGKIL',
    alt_name: 'KABUPATEN ACEH SINGKIL',
    latitude: 2.41667,
    longitude: 97.91667
  },
  {
    regency_id: '1103',
    province_id: '11',
    name: 'KABUPATEN ACEH SELATAN',
    alt_name: 'KABUPATEN ACEH SELATAN',
    latitude: 3.16667,
    longitude: 97.41667
  },
  {
    regency_id: '1104',
    province_id: '11',
    name: 'KABUPATEN ACEH TENGGARA',
    alt_name: 'KABUPATEN ACEH TENGGARA',
    latitude: 3.36667,
    longitude: 97.7
  },
  {
    regency_id: '1105',
    province_id: '11',
    name: 'KABUPATEN ACEH TIMUR',
    alt_name: 'KABUPATEN ACEH TIMUR',
    latitude: 4.63333,
    longitude: 97.63333
  },
  {
    regency_id: '1106',
    province_id: '11',
    name: 'KABUPATEN ACEH TENGAH',
    alt_name: 'KABUPATEN ACEH TENGAH',
    latitude: 4.51,
    longitude: 96.855
  },
  {
    regency_id: '1107',
    province_id: '11',
    name: 'KABUPATEN ACEH BARAT',
    alt_name: 'KABUPATEN ACEH BARAT',
    latitude: 4.45,
    longitude: 96.16667
  },
  {
    regency_id: '1108',
    province_id: '11',
    name: 'KABUPATEN ACEH BESAR',
    alt_name: 'KABUPATEN ACEH BESAR',
    latitude: 5.38333,
    longitude: 95.51667
  },
  {
    regency_id: '1109',
    province_id: '11',
    name: 'KABUPATEN PIDIE',
    alt_name: 'KABUPATEN PIDIE',
    latitude: 5.08,
    longitude: 96.11
  },
  {
    regency_id: '1110',
    province_id: '11',
    name: 'KABUPATEN BIREUEN',
    alt_name: 'KABUPATEN BIREUEN',
    latitude: 5.08333,
    longitude: 96.58333
  },
  {
    regency_id: '1111',
    province_id: '11',
    name: 'KABUPATEN ACEH UTARA',
    alt_name: 'KABUPATEN ACEH UTARA',
    latitude: 4.97,
    longitude: 97.14
  },
  {
    regency_id: '1112',
    province_id: '11',
    name: 'KABUPATEN ACEH BARAT DAYA',
    alt_name: 'KABUPATEN ACEH BARAT DAYA',
    latitude: 3.83333,
    longitude: 96.88333
  },
  {
    regency_id: '1113',
    province_id: '11',
    name: 'KABUPATEN GAYO LUES',
    alt_name: 'KABUPATEN GAYO LUES',
    latitude: 3.95,
    longitude: 97.39
  },
  {
    regency_id: '1114',
    province_id: '11',
    name: 'KABUPATEN ACEH TAMIANG',
    alt_name: 'KABUPATEN ACEH TAMIANG',
    latitude: 4.25,
    longitude: 97.96667
  },
  {
    regency_id: '1115',
    province_id: '11',
    name: 'KABUPATEN NAGAN RAYA',
    alt_name: 'KABUPATEN NAGAN RAYA',
    latitude: 4.16667,
    longitude: 96.51667
  },
  {
    regency_id: '1116',
    province_id: '11',
    name: 'KABUPATEN ACEH JAYA',
    alt_name: 'KABUPATEN ACEH JAYA',
    latitude: 4.86,
    longitude: 95.64
  },
  {
    regency_id: '1117',
    province_id: '11',
    name: 'KABUPATEN BENER MERIAH',
    alt_name: 'KABUPATEN BENER MERIAH',
    latitude: 4.73015,
    longitude: 96.86156
  },
  {
    regency_id: '1118',
    province_id: '11',
    name: 'KABUPATEN PIDIE JAYA',
    alt_name: 'KABUPATEN PIDIE JAYA',
    latitude: 5.15,
    longitude: 96.21667
  },
  {
    regency_id: '1171',
    province_id: '11',
    name: 'KOTA BANDA ACEH',
    alt_name: 'KOTA BANDA ACEH',
    latitude: 5.54167,
    longitude: 95.33333
  },
  {
    regency_id: '1172',
    province_id: '11',
    name: 'KOTA SABANG',
    alt_name: 'KOTA SABANG',
    latitude: 5.82164,
    longitude: 95.31086
  },
  {
    regency_id: '1173',
    province_id: '11',
    name: 'KOTA LANGSA',
    alt_name: 'KOTA LANGSA',
    latitude: 4.47,
    longitude: 97.93
  },
  {
    regency_id: '1174',
    province_id: '11',
    name: 'KOTA LHOKSEUMAWE',
    alt_name: 'KOTA LHOKSEUMAWE',
    latitude: 5.13333,
    longitude: 97.06667
  },
  {
    regency_id: '1175',
    province_id: '11',
    name: 'KOTA SUBULUSSALAM',
    alt_name: 'KOTA SUBULUSSALAM',
    latitude: 2.75,
    longitude: 97.93333
  },
  {
    regency_id: '1201',
    province_id: '12',
    name: 'KABUPATEN NIAS',
    alt_name: 'KABUPATEN NIAS',
    latitude: 1.03333,
    longitude: 97.76667
  },
  {
    regency_id: '1202',
    province_id: '12',
    name: 'KABUPATEN MANDAILING NATAL',
    alt_name: 'KABUPATEN MANDAILING NATAL',
    latitude: 0.78378,
    longitude: 99.25495
  },
  {
    regency_id: '1203',
    province_id: '12',
    name: 'KABUPATEN TAPANULI SELATAN',
    alt_name: 'KABUPATEN TAPANULI SELATAN',
    latitude: 1.51667,
    longitude: 99.25
  },
  {
    regency_id: '1204',
    province_id: '12',
    name: 'KABUPATEN TAPANULI TENGAH',
    alt_name: 'KABUPATEN TAPANULI TENGAH',
    latitude: 1.9,
    longitude: 98.66667
  },
  {
    regency_id: '1205',
    province_id: '12',
    name: 'KABUPATEN TAPANULI UTARA',
    alt_name: 'KABUPATEN TAPANULI UTARA',
    latitude: 2.0028,
    longitude: 99.0707
  },
  {
    regency_id: '1206',
    province_id: '12',
    name: 'KABUPATEN TOBA SAMOSIR',
    alt_name: 'KABUPATEN TOBA SAMOSIR',
    latitude: 2.39793,
    longitude: 99.21678
  },
  {
    regency_id: '1207',
    province_id: '12',
    name: 'KABUPATEN LABUHAN BATU',
    alt_name: 'KABUPATEN LABUHAN BATU',
    latitude: 2.26667,
    longitude: 100.1
  },
  {
    regency_id: '1208',
    province_id: '12',
    name: 'KABUPATEN ASAHAN',
    alt_name: 'KABUPATEN ASAHAN',
    latitude: 2.78333,
    longitude: 99.55
  },
  {
    regency_id: '1209',
    province_id: '12',
    name: 'KABUPATEN SIMALUNGUN',
    alt_name: 'KABUPATEN SIMALUNGUN',
    latitude: 2.9,
    longitude: 99
  },
  {
    regency_id: '1210',
    province_id: '12',
    name: 'KABUPATEN DAIRI',
    alt_name: 'KABUPATEN DAIRI',
    latitude: 2.86667,
    longitude: 98.23333
  },
  {
    regency_id: '1211',
    province_id: '12',
    name: 'KABUPATEN KARO',
    alt_name: 'KABUPATEN KARO',
    latitude: 3.11667,
    longitude: 98.3
  },
  {
    regency_id: '1212',
    province_id: '12',
    name: 'KABUPATEN DELI SERDANG',
    alt_name: 'KABUPATEN DELI SERDANG',
    latitude: 3.41667,
    longitude: 98.66667
  },
  {
    regency_id: '1213',
    province_id: '12',
    name: 'KABUPATEN LANGKAT',
    alt_name: 'KABUPATEN LANGKAT',
    latitude: 3.71667,
    longitude: 98.21667
  },
  {
    regency_id: '1214',
    province_id: '12',
    name: 'KABUPATEN NIAS SELATAN',
    alt_name: 'KABUPATEN NIAS SELATAN',
    latitude: 0.77,
    longitude: 97.75
  },
  {
    regency_id: '1215',
    province_id: '12',
    name: 'KABUPATEN HUMBANG HASUNDUTAN',
    alt_name: 'KABUPATEN HUMBANG HASUNDUTAN',
    latitude: 2.26551,
    longitude: 98.50376
  },
  {
    regency_id: '1216',
    province_id: '12',
    name: 'KABUPATEN PAKPAK BHARAT',
    alt_name: 'KABUPATEN PAKPAK BHARAT',
    latitude: 2.56667,
    longitude: 98.28333
  },
  {
    regency_id: '1217',
    province_id: '12',
    name: 'KABUPATEN SAMOSIR',
    alt_name: 'KABUPATEN SAMOSIR',
    latitude: 2.64025,
    longitude: 98.71525
  },
  {
    regency_id: '1218',
    province_id: '12',
    name: 'KABUPATEN SERDANG BEDAGAI',
    alt_name: 'KABUPATEN SERDANG BEDAGAI',
    latitude: 3.36667,
    longitude: 99.03333
  },
  {
    regency_id: '1219',
    province_id: '12',
    name: 'KABUPATEN BATU BARA',
    alt_name: 'KABUPATEN BATU BARA',
    latitude: 3.16166,
    longitude: 99.52652
  },
  {
    regency_id: '1220',
    province_id: '12',
    name: 'KABUPATEN PADANG LAWAS UTARA',
    alt_name: 'KABUPATEN PADANG LAWAS UTARA',
    latitude: 1.46011,
    longitude: 99.67346
  },
  {
    regency_id: '1221',
    province_id: '12',
    name: 'KABUPATEN PADANG LAWAS',
    alt_name: 'KABUPATEN PADANG LAWAS',
    latitude: 1.44684,
    longitude: 99.99207
  },
  {
    regency_id: '1222',
    province_id: '12',
    name: 'KABUPATEN LABUHAN BATU SELATAN',
    alt_name: 'KABUPATEN LABUHAN BATU SELATAN',
    latitude: 1.983,
    longitude: 100.0976
  },
  {
    regency_id: '1223',
    province_id: '12',
    name: 'KABUPATEN LABUHAN BATU UTARA',
    alt_name: 'KABUPATEN LABUHAN BATU UTARA',
    latitude: 2.33349,
    longitude: 99.63776
  },
  {
    regency_id: '1224',
    province_id: '12',
    name: 'KABUPATEN NIAS UTARA',
    alt_name: 'KABUPATEN NIAS UTARA',
    latitude: 1.33037,
    longitude: 97.31964
  },
  {
    regency_id: '1225',
    province_id: '12',
    name: 'KABUPATEN NIAS BARAT',
    alt_name: 'KABUPATEN NIAS BARAT',
    latitude: 1.05966,
    longitude: 97.58606
  },
  {
    regency_id: '1271',
    province_id: '12',
    name: 'KOTA SIBOLGA',
    alt_name: 'KOTA SIBOLGA',
    latitude: 1.73333,
    longitude: 98.8
  },
  {
    regency_id: '1272',
    province_id: '12',
    name: 'KOTA TANJUNG BALAI',
    alt_name: 'KOTA TANJUNG BALAI',
    latitude: 2.95833,
    longitude: 99.79167
  },
  {
    regency_id: '1273',
    province_id: '12',
    name: 'KOTA PEMATANG SIANTAR',
    alt_name: 'KOTA PEMATANG SIANTAR',
    latitude: 2.96667,
    longitude: 99.05
  },
  {
    regency_id: '1274',
    province_id: '12',
    name: 'KOTA TEBING TINGGI',
    alt_name: 'KOTA TEBING TINGGI',
    latitude: 3.325,
    longitude: 99.14167
  },
  {
    regency_id: '1275',
    province_id: '12',
    name: 'KOTA MEDAN',
    alt_name: 'KOTA MEDAN',
    latitude: 3.65,
    longitude: 98.66667
  },
  {
    regency_id: '1276',
    province_id: '12',
    name: 'KOTA BINJAI',
    alt_name: 'KOTA BINJAI',
    latitude: 3.8,
    longitude: 108.23333
  },
  {
    regency_id: '1277',
    province_id: '12',
    name: 'KOTA PADANG SIDEMPUAN',
    alt_name: 'KOTA PADANG SIDEMPUAN',
    latitude: 1.37375,
    longitude: 99.26843
  },
  {
    regency_id: '1278',
    province_id: '12',
    name: 'KOTA GUNUNGSITOLI',
    alt_name: 'KOTA GUNUNGSITOLI',
    latitude: 1.32731,
    longitude: 97.55018
  },
  {
    regency_id: '1301',
    province_id: '13',
    name: 'KABUPATEN KEPULAUAN MENTAWAI',
    alt_name: 'KABUPATEN KEPULAUAN MENTAWAI',
    latitude: 1.98917,
    longitude: 99.51889
  },
  {
    regency_id: '1302',
    province_id: '13',
    name: 'KABUPATEN PESISIR SELATAN',
    alt_name: 'KABUPATEN PESISIR SELATAN',
    latitude: -1.58333,
    longitude: 100.85
  },
  {
    regency_id: '1303',
    province_id: '13',
    name: 'KABUPATEN SOLOK',
    alt_name: 'KABUPATEN SOLOK',
    latitude: -0.96667,
    longitude: 100.81667
  },
  {
    regency_id: '1304',
    province_id: '13',
    name: 'KABUPATEN SIJUNJUNG',
    alt_name: 'KABUPATEN SIJUNJUNG',
    latitude: -1.1827,
    longitude: 101.6056
  },
  {
    regency_id: '1305',
    province_id: '13',
    name: 'KABUPATEN TANAH DATAR',
    alt_name: 'KABUPATEN TANAH DATAR',
    latitude: -0.4555,
    longitude: 100.5771
  },
  {
    regency_id: '1306',
    province_id: '13',
    name: 'KABUPATEN PADANG PARIAMAN',
    alt_name: 'KABUPATEN PADANG PARIAMAN',
    latitude: -0.6,
    longitude: 100.28333
  },
  {
    regency_id: '1307',
    province_id: '13',
    name: 'KABUPATEN AGAM',
    alt_name: 'KABUPATEN AGAM',
    latitude: -0.25,
    longitude: 100.16667
  },
  {
    regency_id: '1308',
    province_id: '13',
    name: 'KABUPATEN LIMA PULUH KOTA',
    alt_name: 'KABUPATEN LIMA PULUH KOTA',
    latitude: -0.0168,
    longitude: 100.5872
  },
  {
    regency_id: '1309',
    province_id: '13',
    name: 'KABUPATEN PASAMAN',
    alt_name: 'KABUPATEN PASAMAN',
    latitude: 0.42503,
    longitude: 99.94606
  },
  {
    regency_id: '1310',
    province_id: '13',
    name: 'KABUPATEN SOLOK SELATAN',
    alt_name: 'KABUPATEN SOLOK SELATAN',
    latitude: -1.23333,
    longitude: 101.417
  },
  {
    regency_id: '1311',
    province_id: '13',
    name: 'KABUPATEN DHARMASRAYA',
    alt_name: 'KABUPATEN DHARMASRAYA',
    latitude: -1.05,
    longitude: 101.367
  },
  {
    regency_id: '1312',
    province_id: '13',
    name: 'KABUPATEN PASAMAN BARAT',
    alt_name: 'KABUPATEN PASAMAN BARAT',
    latitude: 0.28152,
    longitude: 99.51965
  },
  {
    regency_id: '1371',
    province_id: '13',
    name: 'KOTA PADANG',
    alt_name: 'KOTA PADANG',
    latitude: -0.98333,
    longitude: 100.45
  },
  {
    regency_id: '1372',
    province_id: '13',
    name: 'KOTA SOLOK',
    alt_name: 'KOTA SOLOK',
    latitude: -0.76667,
    longitude: 100.61667
  },
  {
    regency_id: '1373',
    province_id: '13',
    name: 'KOTA SAWAH LUNTO',
    alt_name: 'KOTA SAWAH LUNTO',
    latitude: -0.6,
    longitude: 100.75
  },
  {
    regency_id: '1374',
    province_id: '13',
    name: 'KOTA PADANG PANJANG',
    alt_name: 'KOTA PADANG PANJANG',
    latitude: -0.45,
    longitude: 100.43333
  },
  {
    regency_id: '1375',
    province_id: '13',
    name: 'KOTA BUKITTINGGI',
    alt_name: 'KOTA BUKITTINGGI',
    latitude: -0.275,
    longitude: 100.375
  },
  {
    regency_id: '1376',
    province_id: '13',
    name: 'KOTA PAYAKUMBUH',
    alt_name: 'KOTA PAYAKUMBUH',
    latitude: -0.23333,
    longitude: 100.63333
  },
  {
    regency_id: '1377',
    province_id: '13',
    name: 'KOTA PARIAMAN',
    alt_name: 'KOTA PARIAMAN',
    latitude: -0.62682,
    longitude: 100.12047
  },
  {
    regency_id: '1401',
    province_id: '14',
    name: 'KABUPATEN KUANTAN SINGINGI',
    alt_name: 'KABUPATEN KUANTAN SINGINGI',
    latitude: -0.47532,
    longitude: 101.45857
  },
  {
    regency_id: '1402',
    province_id: '14',
    name: 'KABUPATEN INDRAGIRI HULU',
    alt_name: 'KABUPATEN INDRAGIRI HULU',
    latitude: -0.55,
    longitude: 102.31667
  },
  {
    regency_id: '1403',
    province_id: '14',
    name: 'KABUPATEN INDRAGIRI HILIR',
    alt_name: 'KABUPATEN INDRAGIRI HILIR',
    latitude: -0.33333,
    longitude: 103.16667
  },
  {
    regency_id: '1404',
    province_id: '14',
    name: 'KABUPATEN PELALAWAN',
    alt_name: 'KABUPATEN PELALAWAN',
    latitude: 0.20822,
    longitude: 102.18607
  },
  {
    regency_id: '1405',
    province_id: '14',
    name: 'KABUPATEN SIAK',
    alt_name: 'KABUPATEN SIAK',
    latitude: 0.97453,
    longitude: 102.01355
  },
  {
    regency_id: '1406',
    province_id: '14',
    name: 'KABUPATEN KAMPAR',
    alt_name: 'KABUPATEN KAMPAR',
    latitude: 0.2344,
    longitude: 101.2131
  },
  {
    regency_id: '1407',
    province_id: '14',
    name: 'KABUPATEN ROKAN HULU',
    alt_name: 'KABUPATEN ROKAN HULU',
    latitude: 0.88333,
    longitude: 100.48333
  },
  {
    regency_id: '1408',
    province_id: '14',
    name: 'KABUPATEN BENGKALIS',
    alt_name: 'KABUPATEN BENGKALIS',
    latitude: 0.9838,
    longitude: 102.5096
  },
  {
    regency_id: '1409',
    province_id: '14',
    name: 'KABUPATEN ROKAN HILIR',
    alt_name: 'KABUPATEN ROKAN HILIR',
    latitude: 2.16599,
    longitude: 100.82514
  },
  {
    regency_id: '1410',
    province_id: '14',
    name: 'KABUPATEN KEPULAUAN MERANTI',
    alt_name: 'KABUPATEN KEPULAUAN MERANTI',
    latitude: 0.97488,
    longitude: 102.69539
  },
  {
    regency_id: '1471',
    province_id: '14',
    name: 'KOTA PEKANBARU',
    alt_name: 'KOTA PEKANBARU',
    latitude: 0.53333,
    longitude: 101.46667
  },
  {
    regency_id: '1473',
    province_id: '14',
    name: 'KOTA DUMAI',
    alt_name: 'KOTA DUMAI',
    latitude: 1.61592,
    longitude: 101.4917
  },
  {
    regency_id: '1501',
    province_id: '15',
    name: 'KABUPATEN KERINCI',
    alt_name: 'KABUPATEN KERINCI',
    latitude: -2.03333,
    longitude: 101.53333
  },
  {
    regency_id: '1502',
    province_id: '15',
    name: 'KABUPATEN MERANGIN',
    alt_name: 'KABUPATEN MERANGIN',
    latitude: -2.06933,
    longitude: 102.13303
  },
  {
    regency_id: '1503',
    province_id: '15',
    name: 'KABUPATEN SAROLANGUN',
    alt_name: 'KABUPATEN SAROLANGUN',
    latitude: -2.3,
    longitude: 102.65
  },
  {
    regency_id: '1504',
    province_id: '15',
    name: 'KABUPATEN BATANG HARI',
    alt_name: 'KABUPATEN BATANG HARI',
    latitude: -1.75,
    longitude: 103.11667
  },
  {
    regency_id: '1505',
    province_id: '15',
    name: 'KABUPATEN MUARO JAMBI',
    alt_name: 'KABUPATEN MUARO JAMBI',
    latitude: -1.55214,
    longitude: 103.82163
  },
  {
    regency_id: '1506',
    province_id: '15',
    name: 'KABUPATEN TANJUNG JABUNG TIMUR',
    alt_name: 'KABUPATEN TANJUNG JABUNG TIMUR',
    latitude: -1.13198,
    longitude: 103.61755
  },
  {
    regency_id: '1507',
    province_id: '15',
    name: 'KABUPATEN TANJUNG JABUNG BARAT',
    alt_name: 'KABUPATEN TANJUNG JABUNG BARAT',
    latitude: -1.1544,
    longitude: 103.24402
  },
  {
    regency_id: '1508',
    province_id: '15',
    name: 'KABUPATEN TEBO',
    alt_name: 'KABUPATEN TEBO',
    latitude: -1.45576,
    longitude: 102.37473
  },
  {
    regency_id: '1509',
    province_id: '15',
    name: 'KABUPATEN BUNGO',
    alt_name: 'KABUPATEN BUNGO',
    latitude: -1.50222,
    longitude: 101.96
  },
  {
    regency_id: '1571',
    province_id: '15',
    name: 'KOTA JAMBI',
    alt_name: 'KOTA JAMBI',
    latitude: -1.61667,
    longitude: 103.65
  },
  {
    regency_id: '1572',
    province_id: '15',
    name: 'KOTA SUNGAI PENUH',
    alt_name: 'KOTA SUNGAI PENUH',
    latitude: -2.10896,
    longitude: 101.32175
  },
  {
    regency_id: '1601',
    province_id: '16',
    name: 'KABUPATEN OGAN KOMERING ULU',
    alt_name: 'KABUPATEN OGAN KOMERING ULU',
    latitude: -4.13333,
    longitude: 104.03333
  },
  {
    regency_id: '1602',
    province_id: '16',
    name: 'KABUPATEN OGAN KOMERING ILIR',
    alt_name: 'KABUPATEN OGAN KOMERING ILIR',
    latitude: -3.36667,
    longitude: 105.36667
  },
  {
    regency_id: '1603',
    province_id: '16',
    name: 'KABUPATEN MUARA ENIM',
    alt_name: 'KABUPATEN MUARA ENIM',
    latitude: -4.2327,
    longitude: 103.6141
  },
  {
    regency_id: '1604',
    province_id: '16',
    name: 'KABUPATEN LAHAT',
    alt_name: 'KABUPATEN LAHAT',
    latitude: -3.7864,
    longitude: 103.5428
  },
  {
    regency_id: '1605',
    province_id: '16',
    name: 'KABUPATEN MUSI RAWAS',
    alt_name: 'KABUPATEN MUSI RAWAS',
    latitude: -3.08333,
    longitude: 103.2
  },
  {
    regency_id: '1606',
    province_id: '16',
    name: 'KABUPATEN MUSI BANYU ASIN',
    alt_name: 'KABUPATEN MUSI BANYU ASIN',
    latitude: -2.41667,
    longitude: 103.75
  },
  {
    regency_id: '1607',
    province_id: '16',
    name: 'KABUPATEN BANYU ASIN',
    alt_name: 'KABUPATEN BANYU ASIN',
    latitude: -2.88333,
    longitude: 104.38306
  },
  {
    regency_id: '1608',
    province_id: '16',
    name: 'KABUPATEN OGAN KOMERING ULU SELATAN',
    alt_name: 'KABUPATEN OGAN KOMERING ULU SELATAN',
    latitude: -4.65728,
    longitude: 104.00659
  },
  {
    regency_id: '1609',
    province_id: '16',
    name: 'KABUPATEN OGAN KOMERING ULU TIMUR',
    alt_name: 'KABUPATEN OGAN KOMERING ULU TIMUR',
    latitude: -3.85679,
    longitude: 104.75209
  },
  {
    regency_id: '1610',
    province_id: '16',
    name: 'KABUPATEN OGAN ILIR',
    alt_name: 'KABUPATEN OGAN ILIR',
    latitude: -3.43186,
    longitude: 104.62727
  },
  {
    regency_id: '1611',
    province_id: '16',
    name: 'KABUPATEN EMPAT LAWANG',
    alt_name: 'KABUPATEN EMPAT LAWANG',
    latitude: 3.22667,
    longitude: 99.09256
  },
  {
    regency_id: '1612',
    province_id: '16',
    name: 'KABUPATEN PENUKAL ABAB LEMATANG ILIR',
    alt_name: 'KABUPATEN PENUKAL ABAB LEMATANG ILIR',
    latitude: -3.21342,
    longitude: 104.08722
  },
  {
    regency_id: '1613',
    province_id: '16',
    name: 'KABUPATEN MUSI RAWAS UTARA',
    alt_name: 'KABUPATEN MUSI RAWAS UTARA',
    latitude: -2.48533,
    longitude: 103.29346
  },
  {
    regency_id: '1671',
    province_id: '16',
    name: 'KOTA PALEMBANG',
    alt_name: 'KOTA PALEMBANG',
    latitude: -3,
    longitude: 104.71667
  },
  {
    regency_id: '1672',
    province_id: '16',
    name: 'KOTA PRABUMULIH',
    alt_name: 'KOTA PRABUMULIH',
    latitude: -3.46202,
    longitude: 104.2229
  },
  {
    regency_id: '1673',
    province_id: '16',
    name: 'KOTA PAGAR ALAM',
    alt_name: 'KOTA PAGAR ALAM',
    latitude: -4.13055,
    longitude: 103.26822
  },
  {
    regency_id: '1674',
    province_id: '16',
    name: 'KOTA LUBUK LINGGAU',
    alt_name: 'KOTA LUBUK LINGGAU',
    latitude: -3.29308,
    longitude: 102.85503
  },
  {
    regency_id: '1701',
    province_id: '17',
    name: 'KABUPATEN BENGKULU SELATAN',
    alt_name: 'KABUPATEN BENGKULU SELATAN',
    latitude: -4.35,
    longitude: 103.03333
  },
  {
    regency_id: '1702',
    province_id: '17',
    name: 'KABUPATEN REJANG LEBONG',
    alt_name: 'KABUPATEN REJANG LEBONG',
    latitude: -3.43333,
    longitude: 102.71667
  },
  {
    regency_id: '1703',
    province_id: '17',
    name: 'KABUPATEN BENGKULU UTARA',
    alt_name: 'KABUPATEN BENGKULU UTARA',
    latitude: -3.33333,
    longitude: 102.05
  },
  {
    regency_id: '1704',
    province_id: '17',
    name: 'KABUPATEN KAUR',
    alt_name: 'KABUPATEN KAUR',
    latitude: -4.78179,
    longitude: 103.36109
  },
  {
    regency_id: '1705',
    province_id: '17',
    name: 'KABUPATEN SELUMA',
    alt_name: 'KABUPATEN SELUMA',
    latitude: -3.96644,
    longitude: 102.47429
  },
  {
    regency_id: '1706',
    province_id: '17',
    name: 'KABUPATEN MUKOMUKO',
    alt_name: 'KABUPATEN MUKOMUKO',
    latitude: -3.07438,
    longitude: 101.54766
  },
  {
    regency_id: '1707',
    province_id: '17',
    name: 'KABUPATEN LEBONG',
    alt_name: 'KABUPATEN LEBONG',
    latitude: -3.24278,
    longitude: 102.3349
  },
  {
    regency_id: '1708',
    province_id: '17',
    name: 'KABUPATEN KEPAHIANG',
    alt_name: 'KABUPATEN KEPAHIANG',
    latitude: -3.60194,
    longitude: 102.56424
  },
  {
    regency_id: '1709',
    province_id: '17',
    name: 'KABUPATEN BENGKULU TENGAH',
    alt_name: 'KABUPATEN BENGKULU TENGAH',
    latitude: -3.20679,
    longitude: 102.12616
  },
  {
    regency_id: '1771',
    province_id: '17',
    name: 'KOTA BENGKULU',
    alt_name: 'KOTA BENGKULU',
    latitude: -3.81667,
    longitude: 102.31667
  },
  {
    regency_id: '1801',
    province_id: '18',
    name: 'KABUPATEN LAMPUNG BARAT',
    alt_name: 'KABUPATEN LAMPUNG BARAT',
    latitude: -5.14904,
    longitude: 104.19309
  },
  {
    regency_id: '1802',
    province_id: '18',
    name: 'KABUPATEN TANGGAMUS',
    alt_name: 'KABUPATEN TANGGAMUS',
    latitude: -5.38508,
    longitude: 104.62349
  },
  {
    regency_id: '1803',
    province_id: '18',
    name: 'KABUPATEN LAMPUNG SELATAN',
    alt_name: 'KABUPATEN LAMPUNG SELATAN',
    latitude: -5.4531,
    longitude: 104.9877
  },
  {
    regency_id: '1804',
    province_id: '18',
    name: 'KABUPATEN LAMPUNG TIMUR',
    alt_name: 'KABUPATEN LAMPUNG TIMUR',
    latitude: -5.10273,
    longitude: 105.68003
  },
  {
    regency_id: '1805',
    province_id: '18',
    name: 'KABUPATEN LAMPUNG TENGAH',
    alt_name: 'KABUPATEN LAMPUNG TENGAH',
    latitude: -4.86667,
    longitude: 105.26667
  },
  {
    regency_id: '1806',
    province_id: '18',
    name: 'KABUPATEN LAMPUNG UTARA',
    alt_name: 'KABUPATEN LAMPUNG UTARA',
    latitude: -4.81667,
    longitude: 104.8
  },
  {
    regency_id: '1807',
    province_id: '18',
    name: 'KABUPATEN WAY KANAN',
    alt_name: 'KABUPATEN WAY KANAN',
    latitude: -4.44705,
    longitude: 104.52753
  },
  {
    regency_id: '1808',
    province_id: '18',
    name: 'KABUPATEN TULANGBAWANG',
    alt_name: 'KABUPATEN TULANGBAWANG',
    latitude: -4.20604,
    longitude: 105.57999
  },
  {
    regency_id: '1809',
    province_id: '18',
    name: 'KABUPATEN PESAWARAN',
    alt_name: 'KABUPATEN PESAWARAN',
    latitude: -5.4298,
    longitude: 105.17899
  },
  {
    regency_id: '1810',
    province_id: '18',
    name: 'KABUPATEN PRINGSEWU',
    alt_name: 'KABUPATEN PRINGSEWU',
    latitude: -5.42211,
    longitude: 104.93454
  },
  {
    regency_id: '1811',
    province_id: '18',
    name: 'KABUPATEN MESUJI',
    alt_name: 'KABUPATEN MESUJI',
    latitude: -4.0439,
    longitude: 105.4013
  },
  {
    regency_id: '1812',
    province_id: '18',
    name: 'KABUPATEN TULANG BAWANG BARAT',
    alt_name: 'KABUPATEN TULANG BAWANG BARAT',
    latitude: -4.43975,
    longitude: 105.0444
  },
  {
    regency_id: '1813',
    province_id: '18',
    name: 'KABUPATEN PESISIR BARAT',
    alt_name: 'KABUPATEN PESISIR BARAT',
    latitude: -5.19323,
    longitude: 103.93976
  },
  {
    regency_id: '1871',
    province_id: '18',
    name: 'KOTA BANDAR LAMPUNG',
    alt_name: 'KOTA BANDAR LAMPUNG',
    latitude: -5.41667,
    longitude: 105.25
  },
  {
    regency_id: '1872',
    province_id: '18',
    name: 'KOTA METRO',
    alt_name: 'KOTA METRO',
    latitude: -5.11856,
    longitude: 105.29949
  },
  {
    regency_id: '1901',
    province_id: '19',
    name: 'KABUPATEN BANGKA',
    alt_name: 'KABUPATEN BANGKA',
    latitude: -1.91667,
    longitude: 105.93333
  },
  {
    regency_id: '1902',
    province_id: '19',
    name: 'KABUPATEN BELITUNG',
    alt_name: 'KABUPATEN BELITUNG',
    latitude: -2.86667,
    longitude: 107.7
  },
  {
    regency_id: '1903',
    province_id: '19',
    name: 'KABUPATEN BANGKA BARAT',
    alt_name: 'KABUPATEN BANGKA BARAT',
    latitude: -1.95839,
    longitude: 105.53741
  },
  {
    regency_id: '1904',
    province_id: '19',
    name: 'KABUPATEN BANGKA TENGAH',
    alt_name: 'KABUPATEN BANGKA TENGAH',
    latitude: -2.33989,
    longitude: 106.1142
  },
  {
    regency_id: '1905',
    province_id: '19',
    name: 'KABUPATEN BANGKA SELATAN',
    alt_name: 'KABUPATEN BANGKA SELATAN',
    latitude: -2.66803,
    longitude: 106.01257
  },
  {
    regency_id: '1906',
    province_id: '19',
    name: 'KABUPATEN BELITUNG TIMUR',
    alt_name: 'KABUPATEN BELITUNG TIMUR',
    latitude: -2.9627,
    longitude: 108.15216
  },
  {
    regency_id: '1971',
    province_id: '19',
    name: 'KOTA PANGKAL PINANG',
    alt_name: 'KOTA PANGKAL PINANG',
    latitude: -2.13333,
    longitude: 106.13333
  },
  {
    regency_id: '2101',
    province_id: '21',
    name: 'KABUPATEN KARIMUN',
    alt_name: 'KABUPATEN KARIMUN',
    latitude: 0.80764,
    longitude: 103.41911
  },
  {
    regency_id: '2102',
    province_id: '21',
    name: 'KABUPATEN BINTAN',
    alt_name: 'KABUPATEN BINTAN',
    latitude: 0.95,
    longitude: 104.61944
  },
  {
    regency_id: '2103',
    province_id: '21',
    name: 'KABUPATEN NATUNA',
    alt_name: 'KABUPATEN NATUNA',
    latitude: 4.71417,
    longitude: 107.97639
  },
  {
    regency_id: '2104',
    province_id: '21',
    name: 'KABUPATEN LINGGA',
    alt_name: 'KABUPATEN LINGGA',
    latitude: 0.2,
    longitude: 104.61667
  },
  {
    regency_id: '2105',
    province_id: '21',
    name: 'KABUPATEN KEPULAUAN ANAMBAS',
    alt_name: 'KABUPATEN KEPULAUAN ANAMBAS',
    latitude: 3,
    longitude: 106
  },
  {
    regency_id: '2171',
    province_id: '21',
    name: 'KOTA BATAM',
    alt_name: 'KOTA BATAM',
    latitude: 1.05211,
    longitude: 104.02851
  },
  {
    regency_id: '2172',
    province_id: '21',
    name: 'KOTA TANJUNG PINANG',
    alt_name: 'KOTA TANJUNG PINANG',
    latitude: 0.91683,
    longitude: 104.44329
  },
  {
    regency_id: '3101',
    province_id: '31',
    name: 'KABUPATEN KEPULAUAN SERIBU',
    alt_name: 'KABUPATEN KEPULAUAN SERIBU',
    latitude: -5.5985,
    longitude: 106.55271
  },
  {
    regency_id: '3171',
    province_id: '31',
    name: 'KOTA JAKARTA SELATAN',
    alt_name: 'KOTA JAKARTA SELATAN',
    latitude: -6.266,
    longitude: 106.8135
  },
  {
    regency_id: '3172',
    province_id: '31',
    name: 'KOTA JAKARTA TIMUR',
    alt_name: 'KOTA JAKARTA TIMUR',
    latitude: -6.2521,
    longitude: 106.884
  },
  {
    regency_id: '3173',
    province_id: '31',
    name: 'KOTA JAKARTA PUSAT',
    alt_name: 'KOTA JAKARTA PUSAT',
    latitude: -6.1777,
    longitude: 106.8403
  },
  {
    regency_id: '3174',
    province_id: '31',
    name: 'KOTA JAKARTA BARAT',
    alt_name: 'KOTA JAKARTA BARAT',
    latitude: -6.1676,
    longitude: 106.7673
  },
  {
    regency_id: '3175',
    province_id: '31',
    name: 'KOTA JAKARTA UTARA',
    alt_name: 'KOTA JAKARTA UTARA',
    latitude: -6.1339,
    longitude: 106.8823
  },
  {
    regency_id: '3201',
    province_id: '32',
    name: 'KABUPATEN BOGOR',
    alt_name: 'KABUPATEN BOGOR',
    latitude: -6.58333,
    longitude: 106.71667
  },
  {
    regency_id: '3202',
    province_id: '32',
    name: 'KABUPATEN SUKABUMI',
    alt_name: 'KABUPATEN SUKABUMI',
    latitude: -7.06667,
    longitude: 106.7
  },
  {
    regency_id: '3203',
    province_id: '32',
    name: 'KABUPATEN CIANJUR',
    alt_name: 'KABUPATEN CIANJUR',
    latitude: -6.7725,
    longitude: 107.08306
  },
  {
    regency_id: '3204',
    province_id: '32',
    name: 'KABUPATEN BANDUNG',
    alt_name: 'KABUPATEN BANDUNG',
    latitude: -7.1,
    longitude: 107.6
  },
  {
    regency_id: '3205',
    province_id: '32',
    name: 'KABUPATEN GARUT',
    alt_name: 'KABUPATEN GARUT',
    latitude: -7.38333,
    longitude: 107.76667
  },
  {
    regency_id: '3206',
    province_id: '32',
    name: 'KABUPATEN TASIKMALAYA',
    alt_name: 'KABUPATEN TASIKMALAYA',
    latitude: -7.5,
    longitude: 108.13333
  },
  {
    regency_id: '3207',
    province_id: '32',
    name: 'KABUPATEN CIAMIS',
    alt_name: 'KABUPATEN CIAMIS',
    latitude: -7.28333,
    longitude: 108.41667
  },
  {
    regency_id: '3208',
    province_id: '32',
    name: 'KABUPATEN KUNINGAN',
    alt_name: 'KABUPATEN KUNINGAN',
    latitude: -7,
    longitude: 108.55
  },
  {
    regency_id: '3209',
    province_id: '32',
    name: 'KABUPATEN CIREBON',
    alt_name: 'KABUPATEN CIREBON',
    latitude: -6.8,
    longitude: 108.56667
  },
  {
    regency_id: '3210',
    province_id: '32',
    name: 'KABUPATEN MAJALENGKA',
    alt_name: 'KABUPATEN MAJALENGKA',
    latitude: -6.81667,
    longitude: 108.28333
  },
  {
    regency_id: '3211',
    province_id: '32',
    name: 'KABUPATEN SUMEDANG',
    alt_name: 'KABUPATEN SUMEDANG',
    latitude: -6.81667,
    longitude: 107.98333
  },
  {
    regency_id: '3212',
    province_id: '32',
    name: 'KABUPATEN INDRAMAYU',
    alt_name: 'KABUPATEN INDRAMAYU',
    latitude: -6.45,
    longitude: 108.16667
  },
  {
    regency_id: '3213',
    province_id: '32',
    name: 'KABUPATEN SUBANG',
    alt_name: 'KABUPATEN SUBANG',
    latitude: -6.50833,
    longitude: 107.7025
  },
  {
    regency_id: '3214',
    province_id: '32',
    name: 'KABUPATEN PURWAKARTA',
    alt_name: 'KABUPATEN PURWAKARTA',
    latitude: -6.58333,
    longitude: 107.45
  },
  {
    regency_id: '3215',
    province_id: '32',
    name: 'KABUPATEN KARAWANG',
    alt_name: 'KABUPATEN KARAWANG',
    latitude: -6.26667,
    longitude: 107.41667
  },
  {
    regency_id: '3216',
    province_id: '32',
    name: 'KABUPATEN BEKASI',
    alt_name: 'KABUPATEN BEKASI',
    latitude: -6.24667,
    longitude: 107.10833
  },
  {
    regency_id: '3217',
    province_id: '32',
    name: 'KABUPATEN BANDUNG BARAT',
    alt_name: 'KABUPATEN BANDUNG BARAT',
    latitude: -6.83333,
    longitude: 107.48333
  },
  {
    regency_id: '3218',
    province_id: '32',
    name: 'KABUPATEN PANGANDARAN',
    alt_name: 'KABUPATEN PANGANDARAN',
    latitude: -7.6673,
    longitude: 108.64037
  },
  {
    regency_id: '3271',
    province_id: '32',
    name: 'KOTA BOGOR',
    alt_name: 'KOTA BOGOR',
    latitude: -6.59167,
    longitude: 106.8
  },
  {
    regency_id: '3272',
    province_id: '32',
    name: 'KOTA SUKABUMI',
    alt_name: 'KOTA SUKABUMI',
    latitude: -6.95,
    longitude: 106.93333
  },
  {
    regency_id: '3273',
    province_id: '32',
    name: 'KOTA BANDUNG',
    alt_name: 'KOTA BANDUNG',
    latitude: -6.9175,
    longitude: 107.62444
  },
  {
    regency_id: '3274',
    province_id: '32',
    name: 'KOTA CIREBON',
    alt_name: 'KOTA CIREBON',
    latitude: -6.75,
    longitude: 108.55
  },
  {
    regency_id: '3275',
    province_id: '32',
    name: 'KOTA BEKASI',
    alt_name: 'KOTA BEKASI',
    latitude: -6.28333,
    longitude: 106.98333
  },
  {
    regency_id: '3276',
    province_id: '32',
    name: 'KOTA DEPOK',
    alt_name: 'KOTA DEPOK',
    latitude: -6.4,
    longitude: 106.81667
  },
  {
    regency_id: '3277',
    province_id: '32',
    name: 'KOTA CIMAHI',
    alt_name: 'KOTA CIMAHI',
    latitude: -6.89167,
    longitude: 107.55
  },
  {
    regency_id: '3278',
    province_id: '32',
    name: 'KOTA TASIKMALAYA',
    alt_name: 'KOTA TASIKMALAYA',
    latitude: -7.35,
    longitude: 108.21667
  },
  {
    regency_id: '3279',
    province_id: '32',
    name: 'KOTA BANJAR',
    alt_name: 'KOTA BANJAR',
    latitude: -7.36996,
    longitude: 108.53209
  },
  {
    regency_id: '3301',
    province_id: '33',
    name: 'KABUPATEN CILACAP',
    alt_name: 'KABUPATEN CILACAP',
    latitude: -7.57417,
    longitude: 108.98861
  },
  {
    regency_id: '3302',
    province_id: '33',
    name: 'KABUPATEN BANYUMAS',
    alt_name: 'KABUPATEN BANYUMAS',
    latitude: -7.45,
    longitude: 109.16667
  },
  {
    regency_id: '3303',
    province_id: '33',
    name: 'KABUPATEN PURBALINGGA',
    alt_name: 'KABUPATEN PURBALINGGA',
    latitude: -7.28417,
    longitude: 109.35028
  },
  {
    regency_id: '3304',
    province_id: '33',
    name: 'KABUPATEN BANJARNEGARA',
    alt_name: 'KABUPATEN BANJARNEGARA',
    latitude: -7.35111,
    longitude: 109.5875
  },
  {
    regency_id: '3305',
    province_id: '33',
    name: 'KABUPATEN KEBUMEN',
    alt_name: 'KABUPATEN KEBUMEN',
    latitude: -7.63917,
    longitude: 109.66056
  },
  {
    regency_id: '3306',
    province_id: '33',
    name: 'KABUPATEN PURWOREJO',
    alt_name: 'KABUPATEN PURWOREJO',
    latitude: -7.7,
    longitude: 109.96667
  },
  {
    regency_id: '3307',
    province_id: '33',
    name: 'KABUPATEN WONOSOBO',
    alt_name: 'KABUPATEN WONOSOBO',
    latitude: -7.36139,
    longitude: 109.92667
  },
  {
    regency_id: '3308',
    province_id: '33',
    name: 'KABUPATEN MAGELANG',
    alt_name: 'KABUPATEN MAGELANG',
    latitude: -7.4275,
    longitude: 110.16194
  },
  {
    regency_id: '3309',
    province_id: '33',
    name: 'KABUPATEN BOYOLALI',
    alt_name: 'KABUPATEN BOYOLALI',
    latitude: -7.5,
    longitude: 110.7
  },
  {
    regency_id: '3310',
    province_id: '33',
    name: 'KABUPATEN KLATEN',
    alt_name: 'KABUPATEN KLATEN',
    latitude: -7.68333,
    longitude: 110.61667
  },
  {
    regency_id: '3311',
    province_id: '33',
    name: 'KABUPATEN SUKOHARJO',
    alt_name: 'KABUPATEN SUKOHARJO',
    latitude: -7.68333,
    longitude: 110.83333
  },
  {
    regency_id: '3312',
    province_id: '33',
    name: 'KABUPATEN WONOGIRI',
    alt_name: 'KABUPATEN WONOGIRI',
    latitude: -7.91667,
    longitude: 111
  },
  {
    regency_id: '3313',
    province_id: '33',
    name: 'KABUPATEN KARANGANYAR',
    alt_name: 'KABUPATEN KARANGANYAR',
    latitude: -7.62806,
    longitude: 111.0625
  },
  {
    regency_id: '3314',
    province_id: '33',
    name: 'KABUPATEN SRAGEN',
    alt_name: 'KABUPATEN SRAGEN',
    latitude: -7.41278,
    longitude: 110.935
  },
  {
    regency_id: '3315',
    province_id: '33',
    name: 'KABUPATEN GROBOGAN',
    alt_name: 'KABUPATEN GROBOGAN',
    latitude: -7.11667,
    longitude: 110.91667
  },
  {
    regency_id: '3316',
    province_id: '33',
    name: 'KABUPATEN BLORA',
    alt_name: 'KABUPATEN BLORA',
    latitude: -7.06667,
    longitude: 111.38333
  },
  {
    regency_id: '3317',
    province_id: '33',
    name: 'KABUPATEN REMBANG',
    alt_name: 'KABUPATEN REMBANG',
    latitude: -6.78333,
    longitude: 111.46667
  },
  {
    regency_id: '3318',
    province_id: '33',
    name: 'KABUPATEN PATI',
    alt_name: 'KABUPATEN PATI',
    latitude: -6.76667,
    longitude: 111.1
  },
  {
    regency_id: '3319',
    province_id: '33',
    name: 'KABUPATEN KUDUS',
    alt_name: 'KABUPATEN KUDUS',
    latitude: -6.8,
    longitude: 110.86667
  },
  {
    regency_id: '3320',
    province_id: '33',
    name: 'KABUPATEN JEPARA',
    alt_name: 'KABUPATEN JEPARA',
    latitude: -6.58333,
    longitude: 110.76667
  },
  {
    regency_id: '3321',
    province_id: '33',
    name: 'KABUPATEN DEMAK',
    alt_name: 'KABUPATEN DEMAK',
    latitude: -6.8993,
    longitude: 110.6122
  },
  {
    regency_id: '3322',
    province_id: '33',
    name: 'KABUPATEN SEMARANG',
    alt_name: 'KABUPATEN SEMARANG',
    latitude: -7.20667,
    longitude: 110.44139
  },
  {
    regency_id: '3323',
    province_id: '33',
    name: 'KABUPATEN TEMANGGUNG',
    alt_name: 'KABUPATEN TEMANGGUNG',
    latitude: -7.25,
    longitude: 110.11667
  },
  {
    regency_id: '3324',
    province_id: '33',
    name: 'KABUPATEN KENDAL',
    alt_name: 'KABUPATEN KENDAL',
    latitude: -7.0256,
    longitude: 110.1685
  },
  {
    regency_id: '3325',
    province_id: '33',
    name: 'KABUPATEN BATANG',
    alt_name: 'KABUPATEN BATANG',
    latitude: -7.03333,
    longitude: 109.88333
  },
  {
    regency_id: '3326',
    province_id: '33',
    name: 'KABUPATEN PEKALONGAN',
    alt_name: 'KABUPATEN PEKALONGAN',
    latitude: -7.0319,
    longitude: 109.624
  },
  {
    regency_id: '3327',
    province_id: '33',
    name: 'KABUPATEN PEMALANG',
    alt_name: 'KABUPATEN PEMALANG',
    latitude: -7.03333,
    longitude: 109.4
  },
  {
    regency_id: '3328',
    province_id: '33',
    name: 'KABUPATEN TEGAL',
    alt_name: 'KABUPATEN TEGAL',
    latitude: -7.03333,
    longitude: 109.16667
  },
  {
    regency_id: '3329',
    province_id: '33',
    name: 'KABUPATEN BREBES',
    alt_name: 'KABUPATEN BREBES',
    latitude: -7.05,
    longitude: 108.9
  },
  {
    regency_id: '3371',
    province_id: '33',
    name: 'KOTA MAGELANG',
    alt_name: 'KOTA MAGELANG',
    latitude: -7.5,
    longitude: 110.225
  },
  {
    regency_id: '3372',
    province_id: '33',
    name: 'KOTA SURAKARTA',
    alt_name: 'KOTA SURAKARTA',
    latitude: -7.55,
    longitude: 110.81667
  },
  {
    regency_id: '3373',
    province_id: '33',
    name: 'KOTA SALATIGA',
    alt_name: 'KOTA SALATIGA',
    latitude: -7.33278,
    longitude: 110.48333
  },
  {
    regency_id: '3374',
    province_id: '33',
    name: 'KOTA SEMARANG',
    alt_name: 'KOTA SEMARANG',
    latitude: -7.03333,
    longitude: 110.38333
  },
  {
    regency_id: '3375',
    province_id: '33',
    name: 'KOTA PEKALONGAN',
    alt_name: 'KOTA PEKALONGAN',
    latitude: -6.9,
    longitude: 109.68333
  },
  {
    regency_id: '3376',
    province_id: '33',
    name: 'KOTA TEGAL',
    alt_name: 'KOTA TEGAL',
    latitude: -6.8686,
    longitude: 109.1129
  },
  {
    regency_id: '3401',
    province_id: '34',
    name: 'KABUPATEN KULON PROGO',
    alt_name: 'KABUPATEN KULON PROGO',
    latitude: -7.645,
    longitude: 110.02694
  },
  {
    regency_id: '3402',
    province_id: '34',
    name: 'KABUPATEN BANTUL',
    alt_name: 'KABUPATEN BANTUL',
    latitude: -7.9,
    longitude: 110.36667
  },
  {
    regency_id: '3403',
    province_id: '34',
    name: 'KABUPATEN GUNUNG KIDUL',
    alt_name: 'KABUPATEN GUNUNG KIDUL',
    latitude: -7.98333,
    longitude: 110.61667
  },
  {
    regency_id: '3404',
    province_id: '34',
    name: 'KABUPATEN SLEMAN',
    alt_name: 'KABUPATEN SLEMAN',
    latitude: -7.68167,
    longitude: 110.32333
  },
  {
    regency_id: '3471',
    province_id: '34',
    name: 'KOTA YOGYAKARTA',
    alt_name: 'KOTA YOGYAKARTA',
    latitude: -7.8,
    longitude: 110.375
  },
  {
    regency_id: '3501',
    province_id: '35',
    name: 'KABUPATEN PACITAN',
    alt_name: 'KABUPATEN PACITAN',
    latitude: -8.13333,
    longitude: 111.16667
  },
  {
    regency_id: '3502',
    province_id: '35',
    name: 'KABUPATEN PONOROGO',
    alt_name: 'KABUPATEN PONOROGO',
    latitude: -7.93333,
    longitude: 111.5
  },
  {
    regency_id: '3503',
    province_id: '35',
    name: 'KABUPATEN TRENGGALEK',
    alt_name: 'KABUPATEN TRENGGALEK',
    latitude: -8.16667,
    longitude: 111.61667
  },
  {
    regency_id: '3504',
    province_id: '35',
    name: 'KABUPATEN TULUNGAGUNG',
    alt_name: 'KABUPATEN TULUNGAGUNG',
    latitude: -8.11667,
    longitude: 111.91667
  },
  {
    regency_id: '3505',
    province_id: '35',
    name: 'KABUPATEN BLITAR',
    alt_name: 'KABUPATEN BLITAR',
    latitude: -8.13333,
    longitude: 112.25
  },
  {
    regency_id: '3506',
    province_id: '35',
    name: 'KABUPATEN KEDIRI',
    alt_name: 'KABUPATEN KEDIRI',
    latitude: -7.83333,
    longitude: 112.16667
  },
  {
    regency_id: '3507',
    province_id: '35',
    name: 'KABUPATEN MALANG',
    alt_name: 'KABUPATEN MALANG',
    latitude: -8.16667,
    longitude: 112.66667
  },
  {
    regency_id: '3508',
    province_id: '35',
    name: 'KABUPATEN LUMAJANG',
    alt_name: 'KABUPATEN LUMAJANG',
    latitude: -8.11667,
    longitude: 113.15
  },
  {
    regency_id: '3509',
    province_id: '35',
    name: 'KABUPATEN JEMBER',
    alt_name: 'KABUPATEN JEMBER',
    latitude: -8.25,
    longitude: 113.65
  },
  {
    regency_id: '3510',
    province_id: '35',
    name: 'KABUPATEN BANYUWANGI',
    alt_name: 'KABUPATEN BANYUWANGI',
    latitude: -8.33333,
    longitude: 114.2
  },
  {
    regency_id: '3511',
    province_id: '35',
    name: 'KABUPATEN BONDOWOSO',
    alt_name: 'KABUPATEN BONDOWOSO',
    latitude: -7.9404,
    longitude: 113.9834
  },
  {
    regency_id: '3512',
    province_id: '35',
    name: 'KABUPATEN SITUBONDO',
    alt_name: 'KABUPATEN SITUBONDO',
    latitude: -7.71667,
    longitude: 114.05
  },
  {
    regency_id: '3513',
    province_id: '35',
    name: 'KABUPATEN PROBOLINGGO',
    alt_name: 'KABUPATEN PROBOLINGGO',
    latitude: -7.86667,
    longitude: 113.31667
  },
  {
    regency_id: '3514',
    province_id: '35',
    name: 'KABUPATEN PASURUAN',
    alt_name: 'KABUPATEN PASURUAN',
    latitude: -7.73333,
    longitude: 112.83333
  },
  {
    regency_id: '3515',
    province_id: '35',
    name: 'KABUPATEN SIDOARJO',
    alt_name: 'KABUPATEN SIDOARJO',
    latitude: -7.45,
    longitude: 112.7
  },
  {
    regency_id: '3516',
    province_id: '35',
    name: 'KABUPATEN MOJOKERTO',
    alt_name: 'KABUPATEN MOJOKERTO',
    latitude: -7.55,
    longitude: 112.5
  },
  {
    regency_id: '3517',
    province_id: '35',
    name: 'KABUPATEN JOMBANG',
    alt_name: 'KABUPATEN JOMBANG',
    latitude: -7.55,
    longitude: 112.25
  },
  {
    regency_id: '3518',
    province_id: '35',
    name: 'KABUPATEN NGANJUK',
    alt_name: 'KABUPATEN NGANJUK',
    latitude: -7.6,
    longitude: 111.93333
  },
  {
    regency_id: '3519',
    province_id: '35',
    name: 'KABUPATEN MADIUN',
    alt_name: 'KABUPATEN MADIUN',
    latitude: -7.61667,
    longitude: 111.65
  },
  {
    regency_id: '3520',
    province_id: '35',
    name: 'KABUPATEN MAGETAN',
    alt_name: 'KABUPATEN MAGETAN',
    latitude: -7.64472,
    longitude: 111.35917
  },
  {
    regency_id: '3521',
    province_id: '35',
    name: 'KABUPATEN NGAWI',
    alt_name: 'KABUPATEN NGAWI',
    latitude: -7.47444,
    longitude: 111.33444
  },
  {
    regency_id: '3522',
    province_id: '35',
    name: 'KABUPATEN BOJONEGORO',
    alt_name: 'KABUPATEN BOJONEGORO',
    latitude: -7.25,
    longitude: 111.8
  },
  {
    regency_id: '3523',
    province_id: '35',
    name: 'KABUPATEN TUBAN',
    alt_name: 'KABUPATEN TUBAN',
    latitude: -6.96667,
    longitude: 111.9
  },
  {
    regency_id: '3524',
    province_id: '35',
    name: 'KABUPATEN LAMONGAN',
    alt_name: 'KABUPATEN LAMONGAN',
    latitude: -7.13333,
    longitude: 112.31667
  },
  {
    regency_id: '3525',
    province_id: '35',
    name: 'KABUPATEN GRESIK',
    alt_name: 'KABUPATEN GRESIK',
    latitude: -7.1933,
    longitude: 112.553
  },
  {
    regency_id: '3526',
    province_id: '35',
    name: 'KABUPATEN BANGKALAN',
    alt_name: 'KABUPATEN BANGKALAN',
    latitude: -7.05,
    longitude: 112.93333
  },
  {
    regency_id: '3527',
    province_id: '35',
    name: 'KABUPATEN SAMPANG',
    alt_name: 'KABUPATEN SAMPANG',
    latitude: -7.05,
    longitude: 113.25
  },
  {
    regency_id: '3528',
    province_id: '35',
    name: 'KABUPATEN PAMEKASAN',
    alt_name: 'KABUPATEN PAMEKASAN',
    latitude: -7.06667,
    longitude: 113.5
  },
  {
    regency_id: '3529',
    province_id: '35',
    name: 'KABUPATEN SUMENEP',
    alt_name: 'KABUPATEN SUMENEP',
    latitude: -7.11667,
    longitude: 114.33333
  },
  {
    regency_id: '3571',
    province_id: '35',
    name: 'KOTA KEDIRI',
    alt_name: 'KOTA KEDIRI',
    latitude: -7.83333,
    longitude: 112.01667
  },
  {
    regency_id: '3572',
    province_id: '35',
    name: 'KOTA BLITAR',
    alt_name: 'KOTA BLITAR',
    latitude: -8.1,
    longitude: 112.16667
  },
  {
    regency_id: '3573',
    province_id: '35',
    name: 'KOTA MALANG',
    alt_name: 'KOTA MALANG',
    latitude: -7.975,
    longitude: 112.63333
  },
  {
    regency_id: '3574',
    province_id: '35',
    name: 'KOTA PROBOLINGGO',
    alt_name: 'KOTA PROBOLINGGO',
    latitude: -7.78333,
    longitude: 113.21667
  },
  {
    regency_id: '3575',
    province_id: '35',
    name: 'KOTA PASURUAN',
    alt_name: 'KOTA PASURUAN',
    latitude: -7.65,
    longitude: 112.9
  },
  {
    regency_id: '3576',
    province_id: '35',
    name: 'KOTA MOJOKERTO',
    alt_name: 'KOTA MOJOKERTO',
    latitude: -7.46667,
    longitude: 112.43333
  },
  {
    regency_id: '3577',
    province_id: '35',
    name: 'KOTA MADIUN',
    alt_name: 'KOTA MADIUN',
    latitude: -7.63333,
    longitude: 111.53333
  },
  {
    regency_id: '3578',
    province_id: '35',
    name: 'KOTA SURABAYA',
    alt_name: 'KOTA SURABAYA',
    latitude: -7.26667,
    longitude: 112.71667
  },
  {
    regency_id: '3579',
    province_id: '35',
    name: 'KOTA BATU',
    alt_name: 'KOTA BATU',
    latitude: -7.83272,
    longitude: 112.53751
  },
  {
    regency_id: '3601',
    province_id: '36',
    name: 'KABUPATEN PANDEGLANG',
    alt_name: 'KABUPATEN PANDEGLANG',
    latitude: -6.63333,
    longitude: 105.75
  },
  {
    regency_id: '3602',
    province_id: '36',
    name: 'KABUPATEN LEBAK',
    alt_name: 'KABUPATEN LEBAK',
    latitude: -6.65,
    longitude: 106.21667
  },
  {
    regency_id: '3603',
    province_id: '36',
    name: 'KABUPATEN TANGERANG',
    alt_name: 'KABUPATEN TANGERANG',
    latitude: -6.2,
    longitude: 106.46667
  },
  {
    regency_id: '3604',
    province_id: '36',
    name: 'KABUPATEN SERANG',
    alt_name: 'KABUPATEN SERANG',
    latitude: -6.15,
    longitude: 106
  },
  {
    regency_id: '3671',
    province_id: '36',
    name: 'KOTA TANGERANG',
    alt_name: 'KOTA TANGERANG',
    latitude: -6.17944,
    longitude: 106.62991
  },
  {
    regency_id: '3672',
    province_id: '36',
    name: 'KOTA CILEGON',
    alt_name: 'KOTA CILEGON',
    latitude: -6.01667,
    longitude: 106.01667
  },
  {
    regency_id: '3673',
    province_id: '36',
    name: 'KOTA SERANG',
    alt_name: 'KOTA SERANG',
    latitude: -6.12563,
    longitude: 106.14999
  },
  {
    regency_id: '3674',
    province_id: '36',
    name: 'KOTA TANGERANG SELATAN',
    alt_name: 'KOTA TANGERANG SELATAN',
    latitude: -6.29373,
    longitude: 106.71244
  },
  {
    regency_id: '5101',
    province_id: '51',
    name: 'KABUPATEN JEMBRANA',
    alt_name: 'KABUPATEN JEMBRANA',
    latitude: -8.3,
    longitude: 114.66667
  },
  {
    regency_id: '5102',
    province_id: '51',
    name: 'KABUPATEN TABANAN',
    alt_name: 'KABUPATEN TABANAN',
    latitude: -8.43333,
    longitude: 115.06667
  },
  {
    regency_id: '5103',
    province_id: '51',
    name: 'KABUPATEN BADUNG',
    alt_name: 'KABUPATEN BADUNG',
    latitude: -8.51667,
    longitude: 115.2
  },
  {
    regency_id: '5104',
    province_id: '51',
    name: 'KABUPATEN GIANYAR',
    alt_name: 'KABUPATEN GIANYAR',
    latitude: -8.46667,
    longitude: 115.28333
  },
  {
    regency_id: '5105',
    province_id: '51',
    name: 'KABUPATEN KLUNGKUNG',
    alt_name: 'KABUPATEN KLUNGKUNG',
    latitude: -8.55,
    longitude: 115.4
  },
  {
    regency_id: '5106',
    province_id: '51',
    name: 'KABUPATEN BANGLI',
    alt_name: 'KABUPATEN BANGLI',
    latitude: -8.28333,
    longitude: 115.35
  },
  {
    regency_id: '5107',
    province_id: '51',
    name: 'KABUPATEN KARANG ASEM',
    alt_name: 'KABUPATEN KARANG ASEM',
    latitude: -8.3891,
    longitude: 115.5393
  },
  {
    regency_id: '5108',
    province_id: '51',
    name: 'KABUPATEN BULELENG',
    alt_name: 'KABUPATEN BULELENG',
    latitude: -8.25,
    longitude: 114.96667
  },
  {
    regency_id: '5171',
    province_id: '51',
    name: 'KOTA DENPASAR',
    alt_name: 'KOTA DENPASAR',
    latitude: -8.66667,
    longitude: 115.21663
  },
  {
    regency_id: '5201',
    province_id: '52',
    name: 'KABUPATEN LOMBOK BARAT',
    alt_name: 'KABUPATEN LOMBOK BARAT',
    latitude: -8.69583,
    longitude: 116.11667
  },
  {
    regency_id: '5202',
    province_id: '52',
    name: 'KABUPATEN LOMBOK TENGAH',
    alt_name: 'KABUPATEN LOMBOK TENGAH',
    latitude: -8.7,
    longitude: 116.3
  },
  {
    regency_id: '5203',
    province_id: '52',
    name: 'KABUPATEN LOMBOK TIMUR',
    alt_name: 'KABUPATEN LOMBOK TIMUR',
    latitude: -8.53333,
    longitude: 116.53333
  },
  {
    regency_id: '5204',
    province_id: '52',
    name: 'KABUPATEN SUMBAWA',
    alt_name: 'KABUPATEN SUMBAWA',
    latitude: -8.7439,
    longitude: 117.3324
  },
  {
    regency_id: '5205',
    province_id: '52',
    name: 'KABUPATEN DOMPU',
    alt_name: 'KABUPATEN DOMPU',
    latitude: -8.5094,
    longitude: 118.4816
  },
  {
    regency_id: '5206',
    province_id: '52',
    name: 'KABUPATEN BIMA',
    alt_name: 'KABUPATEN BIMA',
    latitude: -8.6,
    longitude: 118.61667
  },
  {
    regency_id: '5207',
    province_id: '52',
    name: 'KABUPATEN SUMBAWA BARAT',
    alt_name: 'KABUPATEN SUMBAWA BARAT',
    latitude: -8.75159,
    longitude: 116.92132
  },
  {
    regency_id: '5208',
    province_id: '52',
    name: 'KABUPATEN LOMBOK UTARA',
    alt_name: 'KABUPATEN LOMBOK UTARA',
    latitude: -8.35214,
    longitude: 116.40152
  },
  {
    regency_id: '5271',
    province_id: '52',
    name: 'KOTA MATARAM',
    alt_name: 'KOTA MATARAM',
    latitude: -8.5833,
    longitude: 116.1167
  },
  {
    regency_id: '5272',
    province_id: '52',
    name: 'KOTA BIMA',
    alt_name: 'KOTA BIMA',
    latitude: -8.46728,
    longitude: 118.75259
  },
  {
    regency_id: '5301',
    province_id: '53',
    name: 'KABUPATEN SUMBA BARAT',
    alt_name: 'KABUPATEN SUMBA BARAT',
    latitude: -9.56667,
    longitude: 119.45
  },
  {
    regency_id: '5302',
    province_id: '53',
    name: 'KABUPATEN SUMBA TIMUR',
    alt_name: 'KABUPATEN SUMBA TIMUR',
    latitude: -9.88333,
    longitude: 120.25
  },
  {
    regency_id: '5303',
    province_id: '53',
    name: 'KABUPATEN KUPANG',
    alt_name: 'KABUPATEN KUPANG',
    latitude: -9.91667,
    longitude: 123.83333
  },
  {
    regency_id: '5304',
    province_id: '53',
    name: 'KABUPATEN TIMOR TENGAH SELATAN',
    alt_name: 'KABUPATEN TIMOR TENGAH SELATAN',
    latitude: -9.83333,
    longitude: 124.4
  },
  {
    regency_id: '5305',
    province_id: '53',
    name: 'KABUPATEN TIMOR TENGAH UTARA',
    alt_name: 'KABUPATEN TIMOR TENGAH UTARA',
    latitude: -9.33136,
    longitude: 124.51904
  },
  {
    regency_id: '5306',
    province_id: '53',
    name: 'KABUPATEN BELU',
    alt_name: 'KABUPATEN BELU',
    latitude: -9.41258,
    longitude: 124.95066
  },
  {
    regency_id: '5307',
    province_id: '53',
    name: 'KABUPATEN ALOR',
    alt_name: 'KABUPATEN ALOR',
    latitude: -8.3,
    longitude: 124.56667
  },
  {
    regency_id: '5308',
    province_id: '53',
    name: 'KABUPATEN LEMBATA',
    alt_name: 'KABUPATEN LEMBATA',
    latitude: -8.41396,
    longitude: 123.55225
  },
  {
    regency_id: '5309',
    province_id: '53',
    name: 'KABUPATEN FLORES TIMUR',
    alt_name: 'KABUPATEN FLORES TIMUR',
    latitude: -8.24224,
    longitude: 122.96817
  },
  {
    regency_id: '5310',
    province_id: '53',
    name: 'KABUPATEN SIKKA',
    alt_name: 'KABUPATEN SIKKA',
    latitude: -8.66667,
    longitude: 122.36667
  },
  {
    regency_id: '5311',
    province_id: '53',
    name: 'KABUPATEN ENDE',
    alt_name: 'KABUPATEN ENDE',
    latitude: -8.84056,
    longitude: 121.66389
  },
  {
    regency_id: '5312',
    province_id: '53',
    name: 'KABUPATEN NGADA',
    alt_name: 'KABUPATEN NGADA',
    latitude: -8.66667,
    longitude: 121
  },
  {
    regency_id: '5313',
    province_id: '53',
    name: 'KABUPATEN MANGGARAI',
    alt_name: 'KABUPATEN MANGGARAI',
    latitude: -8.56667,
    longitude: 120.41667
  },
  {
    regency_id: '5314',
    province_id: '53',
    name: 'KABUPATEN ROTE NDAO',
    alt_name: 'KABUPATEN ROTE NDAO',
    latitude: -10.73617,
    longitude: 123.12054
  },
  {
    regency_id: '5315',
    province_id: '53',
    name: 'KABUPATEN MANGGARAI BARAT',
    alt_name: 'KABUPATEN MANGGARAI BARAT',
    latitude: -8.64484,
    longitude: 119.88281
  },
  {
    regency_id: '5316',
    province_id: '53',
    name: 'KABUPATEN SUMBA TENGAH',
    alt_name: 'KABUPATEN SUMBA TENGAH',
    latitude: -9.62941,
    longitude: 119.61914
  },
  {
    regency_id: '5317',
    province_id: '53',
    name: 'KABUPATEN SUMBA BARAT DAYA',
    alt_name: 'KABUPATEN SUMBA BARAT DAYA',
    latitude: -9.56216,
    longitude: 119.08905
  },
  {
    regency_id: '5318',
    province_id: '53',
    name: 'KABUPATEN NAGEKEO',
    alt_name: 'KABUPATEN NAGEKEO',
    latitude: -8.8721,
    longitude: 121.20963
  },
  {
    regency_id: '5319',
    province_id: '53',
    name: 'KABUPATEN MANGGARAI TIMUR',
    alt_name: 'KABUPATEN MANGGARAI TIMUR',
    latitude: -8.55533,
    longitude: 120.59761
  },
  {
    regency_id: '5320',
    province_id: '53',
    name: 'KABUPATEN SABU RAIJUA',
    alt_name: 'KABUPATEN SABU RAIJUA',
    latitude: -10.56286,
    longitude: 121.78894
  },
  {
    regency_id: '5321',
    province_id: '53',
    name: 'KABUPATEN MALAKA',
    alt_name: 'KABUPATEN MALAKA',
    latitude: -9.5632,
    longitude: 124.89481
  },
  {
    regency_id: '5371',
    province_id: '53',
    name: 'KOTA KUPANG',
    alt_name: 'KOTA KUPANG',
    latitude: -10.21667,
    longitude: 123.6
  },
  {
    regency_id: '6101',
    province_id: '61',
    name: 'KABUPATEN SAMBAS',
    alt_name: 'KABUPATEN SAMBAS',
    latitude: 1.41667,
    longitude: 109.33333
  },
  {
    regency_id: '6102',
    province_id: '61',
    name: 'KABUPATEN BENGKAYANG',
    alt_name: 'KABUPATEN BENGKAYANG',
    latitude: 1.06911,
    longitude: 109.66393
  },
  {
    regency_id: '6103',
    province_id: '61',
    name: 'KABUPATEN LANDAK',
    alt_name: 'KABUPATEN LANDAK',
    latitude: 0.42373,
    longitude: 109.75917
  },
  {
    regency_id: '6104',
    province_id: '61',
    name: 'KABUPATEN MEMPAWAH',
    alt_name: 'KABUPATEN MEMPAWAH',
    latitude: 0.25,
    longitude: 109.16667
  },
  {
    regency_id: '6105',
    province_id: '61',
    name: 'KABUPATEN SANGGAU',
    alt_name: 'KABUPATEN SANGGAU',
    latitude: 0.25472,
    longitude: 110.45
  },
  {
    regency_id: '6106',
    province_id: '61',
    name: 'KABUPATEN KETAPANG',
    alt_name: 'KABUPATEN KETAPANG',
    latitude: -1.58333,
    longitude: 110.5
  },
  {
    regency_id: '6107',
    province_id: '61',
    name: 'KABUPATEN SINTANG',
    alt_name: 'KABUPATEN SINTANG',
    latitude: -0.08333,
    longitude: 112.08333
  },
  {
    regency_id: '6108',
    province_id: '61',
    name: 'KABUPATEN KAPUAS HULU',
    alt_name: 'KABUPATEN KAPUAS HULU',
    latitude: 0.81667,
    longitude: 112.76667
  },
  {
    regency_id: '6109',
    province_id: '61',
    name: 'KABUPATEN SEKADAU',
    alt_name: 'KABUPATEN SEKADAU',
    latitude: 0.03485,
    longitude: 110.95066
  },
  {
    regency_id: '6110',
    province_id: '61',
    name: 'KABUPATEN MELAWI',
    alt_name: 'KABUPATEN MELAWI',
    latitude: -0.33617,
    longitude: 111.698
  },
  {
    regency_id: '6111',
    province_id: '61',
    name: 'KABUPATEN KAYONG UTARA',
    alt_name: 'KABUPATEN KAYONG UTARA',
    latitude: -1.43711,
    longitude: 110.79781
  },
  {
    regency_id: '6112',
    province_id: '61',
    name: 'KABUPATEN KUBU RAYA',
    alt_name: 'KABUPATEN KUBU RAYA',
    latitude: 0.01637,
    longitude: 109.33731
  },
  {
    regency_id: '6171',
    province_id: '61',
    name: 'KOTA PONTIANAK',
    alt_name: 'KOTA PONTIANAK',
    latitude: -0.08333,
    longitude: 109.36667
  },
  {
    regency_id: '6172',
    province_id: '61',
    name: 'KOTA SINGKAWANG',
    alt_name: 'KOTA SINGKAWANG',
    latitude: 0.90734,
    longitude: 109.00103
  },
  {
    regency_id: '6201',
    province_id: '62',
    name: 'KABUPATEN KOTAWARINGIN BARAT',
    alt_name: 'KABUPATEN KOTAWARINGIN BARAT',
    latitude: -2.4,
    longitude: 111.73333
  },
  {
    regency_id: '6202',
    province_id: '62',
    name: 'KABUPATEN KOTAWARINGIN TIMUR',
    alt_name: 'KABUPATEN KOTAWARINGIN TIMUR',
    latitude: -2.08333,
    longitude: 112.75
  },
  {
    regency_id: '6203',
    province_id: '62',
    name: 'KABUPATEN KAPUAS',
    alt_name: 'KABUPATEN KAPUAS',
    latitude: -2.01667,
    longitude: 114.38333
  },
  {
    regency_id: '6204',
    province_id: '62',
    name: 'KABUPATEN BARITO SELATAN',
    alt_name: 'KABUPATEN BARITO SELATAN',
    latitude: -1.86667,
    longitude: 114.73333
  },
  {
    regency_id: '6205',
    province_id: '62',
    name: 'KABUPATEN BARITO UTARA',
    alt_name: 'KABUPATEN BARITO UTARA',
    latitude: -0.98333,
    longitude: 115.1
  },
  {
    regency_id: '6206',
    province_id: '62',
    name: 'KABUPATEN SUKAMARA',
    alt_name: 'KABUPATEN SUKAMARA',
    latitude: -2.62675,
    longitude: 111.23681
  },
  {
    regency_id: '6207',
    province_id: '62',
    name: 'KABUPATEN LAMANDAU',
    alt_name: 'KABUPATEN LAMANDAU',
    latitude: -1.83828,
    longitude: 111.2869
  },
  {
    regency_id: '6208',
    province_id: '62',
    name: 'KABUPATEN SERUYAN',
    alt_name: 'KABUPATEN SERUYAN',
    latitude: -2.33333,
    longitude: 112.25
  },
  {
    regency_id: '6209',
    province_id: '62',
    name: 'KABUPATEN KATINGAN',
    alt_name: 'KABUPATEN KATINGAN',
    latitude: -2.06667,
    longitude: 113.4
  },
  {
    regency_id: '6210',
    province_id: '62',
    name: 'KABUPATEN PULANG PISAU',
    alt_name: 'KABUPATEN PULANG PISAU',
    latitude: -3.11858,
    longitude: 113.8623
  },
  {
    regency_id: '6211',
    province_id: '62',
    name: 'KABUPATEN GUNUNG MAS',
    alt_name: 'KABUPATEN GUNUNG MAS',
    latitude: -0.95,
    longitude: 113.5
  },
  {
    regency_id: '6212',
    province_id: '62',
    name: 'KABUPATEN BARITO TIMUR',
    alt_name: 'KABUPATEN BARITO TIMUR',
    latitude: -1.93333,
    longitude: 115.1
  },
  {
    regency_id: '6213',
    province_id: '62',
    name: 'KABUPATEN MURUNG RAYA',
    alt_name: 'KABUPATEN MURUNG RAYA',
    latitude: -0.01667,
    longitude: 114.26667
  },
  {
    regency_id: '6271',
    province_id: '62',
    name: 'KOTA PALANGKA RAYA',
    alt_name: 'KOTA PALANGKA RAYA',
    latitude: -1.76979,
    longitude: 113.73126
  },
  {
    regency_id: '6301',
    province_id: '63',
    name: 'KABUPATEN TANAH LAUT',
    alt_name: 'KABUPATEN TANAH LAUT',
    latitude: -3.88333,
    longitude: 114.86667
  },
  {
    regency_id: '6302',
    province_id: '63',
    name: 'KABUPATEN KOTA BARU',
    alt_name: 'KABUPATEN KOTA BARU',
    latitude: -3,
    longitude: 116
  },
  {
    regency_id: '6303',
    province_id: '63',
    name: 'KABUPATEN BANJAR',
    alt_name: 'KABUPATEN BANJAR',
    latitude: -3.31667,
    longitude: 115.08333
  },
  {
    regency_id: '6304',
    province_id: '63',
    name: 'KABUPATEN BARITO KUALA',
    alt_name: 'KABUPATEN BARITO KUALA',
    latitude: -3.08333,
    longitude: 114.61667
  },
  {
    regency_id: '6305',
    province_id: '63',
    name: 'KABUPATEN TAPIN',
    alt_name: 'KABUPATEN TAPIN',
    latitude: -2.91667,
    longitude: 115.03333
  },
  {
    regency_id: '6306',
    province_id: '63',
    name: 'KABUPATEN HULU SUNGAI SELATAN',
    alt_name: 'KABUPATEN HULU SUNGAI SELATAN',
    latitude: -2.75,
    longitude: 115.2
  },
  {
    regency_id: '6307',
    province_id: '63',
    name: 'KABUPATEN HULU SUNGAI TENGAH',
    alt_name: 'KABUPATEN HULU SUNGAI TENGAH',
    latitude: -2.61667,
    longitude: 115.41667
  },
  {
    regency_id: '6308',
    province_id: '63',
    name: 'KABUPATEN HULU SUNGAI UTARA',
    alt_name: 'KABUPATEN HULU SUNGAI UTARA',
    latitude: -2.45,
    longitude: 115.13333
  },
  {
    regency_id: '6309',
    province_id: '63',
    name: 'KABUPATEN TABALONG',
    alt_name: 'KABUPATEN TABALONG',
    latitude: -1.88333,
    longitude: 115.5
  },
  {
    regency_id: '6310',
    province_id: '63',
    name: 'KABUPATEN TANAH BUMBU',
    alt_name: 'KABUPATEN TANAH BUMBU',
    latitude: -3.45413,
    longitude: 115.70372
  },
  {
    regency_id: '6311',
    province_id: '63',
    name: 'KABUPATEN BALANGAN',
    alt_name: 'KABUPATEN BALANGAN',
    latitude: -2.32314,
    longitude: 115.62922
  },
  {
    regency_id: '6371',
    province_id: '63',
    name: 'KOTA BANJARMASIN',
    alt_name: 'KOTA BANJARMASIN',
    latitude: -3.32444,
    longitude: 114.59102
  },
  {
    regency_id: '6372',
    province_id: '63',
    name: 'KOTA BANJAR BARU',
    alt_name: 'KOTA BANJAR BARU',
    latitude: -3.41667,
    longitude: 114.83333
  },
  {
    regency_id: '6401',
    province_id: '64',
    name: 'KABUPATEN PASER',
    alt_name: 'KABUPATEN PASER',
    latitude: -1.43517,
    longitude: 116.23535
  },
  {
    regency_id: '6402',
    province_id: '64',
    name: 'KABUPATEN KUTAI BARAT',
    alt_name: 'KABUPATEN KUTAI BARAT',
    latitude: -0.59417,
    longitude: 115.51575
  },
  {
    regency_id: '6403',
    province_id: '64',
    name: 'KABUPATEN KUTAI KARTANEGARA',
    alt_name: 'KABUPATEN KUTAI KARTANEGARA',
    latitude: -0.44019,
    longitude: 116.98139
  },
  {
    regency_id: '6404',
    province_id: '64',
    name: 'KABUPATEN KUTAI TIMUR',
    alt_name: 'KABUPATEN KUTAI TIMUR',
    latitude: 1.03769,
    longitude: 117.83112
  },
  {
    regency_id: '6405',
    province_id: '64',
    name: 'KABUPATEN BERAU',
    alt_name: 'KABUPATEN BERAU',
    latitude: 2,
    longitude: 117.3
  },
  {
    regency_id: '6409',
    province_id: '64',
    name: 'KABUPATEN PENAJAM PASER UTARA',
    alt_name: 'KABUPATEN PENAJAM PASER UTARA',
    latitude: -1.25,
    longitude: 116.83333
  },
  {
    regency_id: '6411',
    province_id: '64',
    name: 'KABUPATEN MAHAKAM HULU',
    alt_name: 'KABUPATEN MAHAKAM HULU',
    latitude: 0.37822,
    longitude: 115.38048
  },
  {
    regency_id: '6471',
    province_id: '64',
    name: 'KOTA BALIKPAPAN',
    alt_name: 'KOTA BALIKPAPAN',
    latitude: -1.16667,
    longitude: 116.88333
  },
  {
    regency_id: '6472',
    province_id: '64',
    name: 'KOTA SAMARINDA',
    alt_name: 'KOTA SAMARINDA',
    latitude: -0.43333,
    longitude: 117.18333
  },
  {
    regency_id: '6474',
    province_id: '64',
    name: 'KOTA BONTANG',
    alt_name: 'KOTA BONTANG',
    latitude: 0.12526,
    longitude: 117.49603
  },
  {
    regency_id: '6501',
    province_id: '65',
    name: 'KABUPATEN MALINAU',
    alt_name: 'KABUPATEN MALINAU',
    latitude: 2.45,
    longitude: 115.68333
  },
  {
    regency_id: '6502',
    province_id: '65',
    name: 'KABUPATEN BULUNGAN',
    alt_name: 'KABUPATEN BULUNGAN',
    latitude: 3,
    longitude: 117.16667
  },
  {
    regency_id: '6503',
    province_id: '65',
    name: 'KABUPATEN TANA TIDUNG',
    alt_name: 'KABUPATEN TANA TIDUNG',
    latitude: 3.55,
    longitude: 117.25
  },
  {
    regency_id: '6504',
    province_id: '65',
    name: 'KABUPATEN NUNUKAN',
    alt_name: 'KABUPATEN NUNUKAN',
    latitude: 4.13333,
    longitude: 116.7
  },
  {
    regency_id: '6571',
    province_id: '65',
    name: 'KOTA TARAKAN',
    alt_name: 'KOTA TARAKAN',
    latitude: 3.36667,
    longitude: 117.6
  },
  {
    regency_id: '7101',
    province_id: '71',
    name: 'KABUPATEN BOLAANG MONGONDOW',
    alt_name: 'KABUPATEN BOLAANG MONGONDOW',
    latitude: 0.75,
    longitude: 124.08333
  },
  {
    regency_id: '7102',
    province_id: '71',
    name: 'KABUPATEN MINAHASA',
    alt_name: 'KABUPATEN MINAHASA',
    latitude: 1.2537,
    longitude: 124.83
  },
  {
    regency_id: '7103',
    province_id: '71',
    name: 'KABUPATEN KEPULAUAN SANGIHE',
    alt_name: 'KABUPATEN KEPULAUAN SANGIHE',
    latitude: 3.5,
    longitude: 125.55
  },
  {
    regency_id: '7104',
    province_id: '71',
    name: 'KABUPATEN KEPULAUAN TALAUD',
    alt_name: 'KABUPATEN KEPULAUAN TALAUD',
    latitude: 4.31178,
    longitude: 126.78085
  },
  {
    regency_id: '7105',
    province_id: '71',
    name: 'KABUPATEN MINAHASA SELATAN',
    alt_name: 'KABUPATEN MINAHASA SELATAN',
    latitude: 1.21291,
    longitude: 124.59708
  },
  {
    regency_id: '7106',
    province_id: '71',
    name: 'KABUPATEN MINAHASA UTARA',
    alt_name: 'KABUPATEN MINAHASA UTARA',
    latitude: 1.4025,
    longitude: 124.96
  },
  {
    regency_id: '7107',
    province_id: '71',
    name: 'KABUPATEN BOLAANG MONGONDOW UTARA',
    alt_name: 'KABUPATEN BOLAANG MONGONDOW UTARA',
    latitude: 0.78527,
    longitude: 123.41766
  },
  {
    regency_id: '7108',
    province_id: '71',
    name: 'KABUPATEN SIAU TAGULANDANG BIARO',
    alt_name: 'KABUPATEN SIAU TAGULANDANG BIARO',
    latitude: 2.11728,
    longitude: 125.37512
  },
  {
    regency_id: '7109',
    province_id: '71',
    name: 'KABUPATEN MINAHASA TENGGARA',
    alt_name: 'KABUPATEN MINAHASA TENGGARA',
    latitude: 1.05633,
    longitude: 124.7925
  },
  {
    regency_id: '7110',
    province_id: '71',
    name: 'KABUPATEN BOLAANG MONGONDOW SELATAN',
    alt_name: 'KABUPATEN BOLAANG MONGONDOW SELATAN',
    latitude: 0.40912,
    longitude: 123.75961
  },
  {
    regency_id: '7111',
    province_id: '71',
    name: 'KABUPATEN BOLAANG MONGONDOW TIMUR',
    alt_name: 'KABUPATEN BOLAANG MONGONDOW TIMUR',
    latitude: 0.72073,
    longitude: 124.50256
  },
  {
    regency_id: '7171',
    province_id: '71',
    name: 'KOTA MANADO',
    alt_name: 'KOTA MANADO',
    latitude: 1.51667,
    longitude: 124.88333
  },
  {
    regency_id: '7172',
    province_id: '71',
    name: 'KOTA BITUNG',
    alt_name: 'KOTA BITUNG',
    latitude: 1.48333,
    longitude: 125.15
  },
  {
    regency_id: '7173',
    province_id: '71',
    name: 'KOTA TOMOHON',
    alt_name: 'KOTA TOMOHON',
    latitude: 1.31307,
    longitude: 124.83404
  },
  {
    regency_id: '7174',
    province_id: '71',
    name: 'KOTA KOTAMOBAGU',
    alt_name: 'KOTA KOTAMOBAGU',
    latitude: 0.68915,
    longitude: 124.32678
  },
  {
    regency_id: '7201',
    province_id: '72',
    name: 'KABUPATEN BANGGAI KEPULAUAN',
    alt_name: 'KABUPATEN BANGGAI KEPULAUAN',
    latitude: -1.6424,
    longitude: 123.54881
  },
  {
    regency_id: '7202',
    province_id: '72',
    name: 'KABUPATEN BANGGAI',
    alt_name: 'KABUPATEN BANGGAI',
    latitude: -1.2835,
    longitude: 122.8892
  },
  {
    regency_id: '7203',
    province_id: '72',
    name: 'KABUPATEN MOROWALI',
    alt_name: 'KABUPATEN MOROWALI',
    latitude: -1.89342,
    longitude: 121.25473
  },
  {
    regency_id: '7204',
    province_id: '72',
    name: 'KABUPATEN POSO',
    alt_name: 'KABUPATEN POSO',
    latitude: -1.65,
    longitude: 120.5
  },
  {
    regency_id: '7205',
    province_id: '72',
    name: 'KABUPATEN DONGGALA',
    alt_name: 'KABUPATEN DONGGALA',
    latitude: -0.58333,
    longitude: 119.85
  },
  {
    regency_id: '7206',
    province_id: '72',
    name: 'KABUPATEN TOLI-TOLI',
    alt_name: 'KABUPATEN TOLI-TOLI',
    latitude: 1.30862,
    longitude: 120.88643
  },
  {
    regency_id: '7207',
    province_id: '72',
    name: 'KABUPATEN BUOL',
    alt_name: 'KABUPATEN BUOL',
    latitude: 0.75,
    longitude: 120.75
  },
  {
    regency_id: '7208',
    province_id: '72',
    name: 'KABUPATEN PARIGI MOUTONG',
    alt_name: 'KABUPATEN PARIGI MOUTONG',
    latitude: 0.3368,
    longitude: 120.17841
  },
  {
    regency_id: '7209',
    province_id: '72',
    name: 'KABUPATEN TOJO UNA-UNA',
    alt_name: 'KABUPATEN TOJO UNA-UNA',
    latitude: -1.2036,
    longitude: 121.48201
  },
  {
    regency_id: '7210',
    province_id: '72',
    name: 'KABUPATEN SIGI',
    alt_name: 'KABUPATEN SIGI',
    latitude: -1.385,
    longitude: 119.96694
  },
  {
    regency_id: '7211',
    province_id: '72',
    name: 'KABUPATEN BANGGAI LAUT',
    alt_name: 'KABUPATEN BANGGAI LAUT',
    latitude: -1.61841,
    longitude: 123.49388
  },
  {
    regency_id: '7212',
    province_id: '72',
    name: 'KABUPATEN MOROWALI UTARA',
    alt_name: 'KABUPATEN MOROWALI UTARA',
    latitude: -1.7207,
    longitude: 121.24649
  },
  {
    regency_id: '7271',
    province_id: '72',
    name: 'KOTA PALU',
    alt_name: 'KOTA PALU',
    latitude: -0.86972,
    longitude: 119.9
  },
  {
    regency_id: '7301',
    province_id: '73',
    name: 'KABUPATEN KEPULAUAN SELAYAR',
    alt_name: 'KABUPATEN KEPULAUAN SELAYAR',
    latitude: -6.81667,
    longitude: 120.8
  },
  {
    regency_id: '7302',
    province_id: '73',
    name: 'KABUPATEN BULUKUMBA',
    alt_name: 'KABUPATEN BULUKUMBA',
    latitude: -5.41667,
    longitude: 120.23333
  },
  {
    regency_id: '7303',
    province_id: '73',
    name: 'KABUPATEN BANTAENG',
    alt_name: 'KABUPATEN BANTAENG',
    latitude: -5.48333,
    longitude: 119.98333
  },
  {
    regency_id: '7304',
    province_id: '73',
    name: 'KABUPATEN JENEPONTO',
    alt_name: 'KABUPATEN JENEPONTO',
    latitude: -5.63333,
    longitude: 119.73333
  },
  {
    regency_id: '7305',
    province_id: '73',
    name: 'KABUPATEN TAKALAR',
    alt_name: 'KABUPATEN TAKALAR',
    latitude: -5.41667,
    longitude: 119.51667
  },
  {
    regency_id: '7306',
    province_id: '73',
    name: 'KABUPATEN GOWA',
    alt_name: 'KABUPATEN GOWA',
    latitude: -5.31667,
    longitude: 119.75
  },
  {
    regency_id: '7307',
    province_id: '73',
    name: 'KABUPATEN SINJAI',
    alt_name: 'KABUPATEN SINJAI',
    latitude: -5.21667,
    longitude: 120.15
  },
  {
    regency_id: '7308',
    province_id: '73',
    name: 'KABUPATEN MAROS',
    alt_name: 'KABUPATEN MAROS',
    latitude: -5.05,
    longitude: 119.71667
  },
  {
    regency_id: '7309',
    province_id: '73',
    name: 'KABUPATEN PANGKAJENE DAN KEPULAUAN',
    alt_name: 'KABUPATEN PANGKAJENE DAN KEPULAUAN',
    latitude: -4.7827,
    longitude: 119.5506
  },
  {
    regency_id: '7310',
    province_id: '73',
    name: 'KABUPATEN BARRU',
    alt_name: 'KABUPATEN BARRU',
    latitude: -4.43333,
    longitude: 119.68333
  },
  {
    regency_id: '7311',
    province_id: '73',
    name: 'KABUPATEN BONE',
    alt_name: 'KABUPATEN BONE',
    latitude: -4.7,
    longitude: 120.13333
  },
  {
    regency_id: '7312',
    province_id: '73',
    name: 'KABUPATEN SOPPENG',
    alt_name: 'KABUPATEN SOPPENG',
    latitude: -4.3842,
    longitude: 119.89
  },
  {
    regency_id: '7313',
    province_id: '73',
    name: 'KABUPATEN WAJO',
    alt_name: 'KABUPATEN WAJO',
    latitude: -4,
    longitude: 120.16667
  },
  {
    regency_id: '7314',
    province_id: '73',
    name: 'KABUPATEN SIDENRENG RAPPANG',
    alt_name: 'KABUPATEN SIDENRENG RAPPANG',
    latitude: -3.85,
    longitude: 119.96667
  },
  {
    regency_id: '7315',
    province_id: '73',
    name: 'KABUPATEN PINRANG',
    alt_name: 'KABUPATEN PINRANG',
    latitude: -3.61667,
    longitude: 119.6
  },
  {
    regency_id: '7316',
    province_id: '73',
    name: 'KABUPATEN ENREKANG',
    alt_name: 'KABUPATEN ENREKANG',
    latitude: -3.5,
    longitude: 119.86667
  },
  {
    regency_id: '7317',
    province_id: '73',
    name: 'KABUPATEN LUWU',
    alt_name: 'KABUPATEN LUWU',
    latitude: -2.5577,
    longitude: 121.3242
  },
  {
    regency_id: '7318',
    province_id: '73',
    name: 'KABUPATEN TANA TORAJA',
    alt_name: 'KABUPATEN TANA TORAJA',
    latitude: -3.0024,
    longitude: 119.79655
  },
  {
    regency_id: '7322',
    province_id: '73',
    name: 'KABUPATEN LUWU UTARA',
    alt_name: 'KABUPATEN LUWU UTARA',
    latitude: -2.6,
    longitude: 120.25
  },
  {
    regency_id: '7325',
    province_id: '73',
    name: 'KABUPATEN LUWU TIMUR',
    alt_name: 'KABUPATEN LUWU TIMUR',
    latitude: -2.50957,
    longitude: 120.3978
  },
  {
    regency_id: '7326',
    province_id: '73',
    name: 'KABUPATEN TORAJA UTARA',
    alt_name: 'KABUPATEN TORAJA UTARA',
    latitude: -2.92738,
    longitude: 119.79218
  },
  {
    regency_id: '7371',
    province_id: '73',
    name: 'KOTA MAKASSAR',
    alt_name: 'KOTA MAKASSAR',
    latitude: -5.15,
    longitude: 119.45
  },
  {
    regency_id: '7372',
    province_id: '73',
    name: 'KOTA PARE-PARE',
    alt_name: 'KOTA PARE-PARE',
    latitude: -4.03333,
    longitude: 119.65
  },
  {
    regency_id: '7373',
    province_id: '73',
    name: 'KOTA PALOPO',
    alt_name: 'KOTA PALOPO',
    latitude: -2.97841,
    longitude: 120.11078
  },
  {
    regency_id: '7401',
    province_id: '74',
    name: 'KABUPATEN BUTON',
    alt_name: 'KABUPATEN BUTON',
    latitude: -5.31667,
    longitude: 122.58333
  },
  {
    regency_id: '7402',
    province_id: '74',
    name: 'KABUPATEN MUNA',
    alt_name: 'KABUPATEN MUNA',
    latitude: -4.96667,
    longitude: 122.66667
  },
  {
    regency_id: '7403',
    province_id: '74',
    name: 'KABUPATEN KONAWE',
    alt_name: 'KABUPATEN KONAWE',
    latitude: -3.91717,
    longitude: 122.08823
  },
  {
    regency_id: '7404',
    province_id: '74',
    name: 'KABUPATEN KOLAKA',
    alt_name: 'KABUPATEN KOLAKA',
    latitude: -4.08333,
    longitude: 121.66667
  },
  {
    regency_id: '7405',
    province_id: '74',
    name: 'KABUPATEN KONAWE SELATAN',
    alt_name: 'KABUPATEN KONAWE SELATAN',
    latitude: -4.19191,
    longitude: 122.44854
  },
  {
    regency_id: '7406',
    province_id: '74',
    name: 'KABUPATEN BOMBANA',
    alt_name: 'KABUPATEN BOMBANA',
    latitude: -4.6257,
    longitude: 121.81641
  },
  {
    regency_id: '7407',
    province_id: '74',
    name: 'KABUPATEN WAKATOBI',
    alt_name: 'KABUPATEN WAKATOBI',
    latitude: -5.31934,
    longitude: 123.5948
  },
  {
    regency_id: '7408',
    province_id: '74',
    name: 'KABUPATEN KOLAKA UTARA',
    alt_name: 'KABUPATEN KOLAKA UTARA',
    latitude: -3.10452,
    longitude: 121.12427
  },
  {
    regency_id: '7409',
    province_id: '74',
    name: 'KABUPATEN BUTON UTARA',
    alt_name: 'KABUPATEN BUTON UTARA',
    latitude: -5.01457,
    longitude: 122.93015
  },
  {
    regency_id: '7410',
    province_id: '74',
    name: 'KABUPATEN KONAWE UTARA',
    alt_name: 'KABUPATEN KONAWE UTARA',
    latitude: -3.41552,
    longitude: 121.99081
  },
  {
    regency_id: '7411',
    province_id: '74',
    name: 'KABUPATEN KOLAKA TIMUR',
    alt_name: 'KABUPATEN KOLAKA TIMUR',
    latitude: -4.01807,
    longitude: 121.86172
  },
  {
    regency_id: '7412',
    province_id: '74',
    name: 'KABUPATEN KONAWE KEPULAUAN',
    alt_name: 'KABUPATEN KONAWE KEPULAUAN',
    latitude: -4.11656,
    longitude: 123.10181
  },
  {
    regency_id: '7413',
    province_id: '74',
    name: 'KABUPATEN MUNA BARAT',
    alt_name: 'KABUPATEN MUNA BARAT',
    latitude: -4.83333,
    longitude: 122.48333
  },
  {
    regency_id: '7414',
    province_id: '74',
    name: 'KABUPATEN BUTON TENGAH',
    alt_name: 'KABUPATEN BUTON TENGAH',
    latitude: -5.31667,
    longitude: 122.33333
  },
  {
    regency_id: '7415',
    province_id: '74',
    name: 'KABUPATEN BUTON SELATAN',
    alt_name: 'KABUPATEN BUTON SELATAN',
    latitude: -5.56667,
    longitude: 122.7
  },
  {
    regency_id: '7471',
    province_id: '74',
    name: 'KOTA KENDARI',
    alt_name: 'KOTA KENDARI',
    latitude: -3.98333,
    longitude: 122.5
  },
  {
    regency_id: '7472',
    province_id: '74',
    name: 'KOTA BAUBAU',
    alt_name: 'KOTA BAUBAU',
    latitude: -5.477,
    longitude: 122.6166
  },
  {
    regency_id: '7501',
    province_id: '75',
    name: 'KABUPATEN BOALEMO',
    alt_name: 'KABUPATEN BOALEMO',
    latitude: 0.62689,
    longitude: 122.3568
  },
  {
    regency_id: '7502',
    province_id: '75',
    name: 'KABUPATEN GORONTALO',
    alt_name: 'KABUPATEN GORONTALO',
    latitude: 0.5728,
    longitude: 122.2337
  },
  {
    regency_id: '7503',
    province_id: '75',
    name: 'KABUPATEN POHUWATO',
    alt_name: 'KABUPATEN POHUWATO',
    latitude: 0.7098,
    longitude: 121.59582
  },
  {
    regency_id: '7504',
    province_id: '75',
    name: 'KABUPATEN BONE BOLANGO',
    alt_name: 'KABUPATEN BONE BOLANGO',
    latitude: 0.50296,
    longitude: 123.27501
  },
  {
    regency_id: '7505',
    province_id: '75',
    name: 'KABUPATEN GORONTALO UTARA',
    alt_name: 'KABUPATEN GORONTALO UTARA',
    latitude: 0.77,
    longitude: 122.31667
  },
  {
    regency_id: '7571',
    province_id: '75',
    name: 'KOTA GORONTALO',
    alt_name: 'KOTA GORONTALO',
    latitude: 0.53333,
    longitude: 123.1
  },
  {
    regency_id: '7601',
    province_id: '76',
    name: 'KABUPATEN MAJENE',
    alt_name: 'KABUPATEN MAJENE',
    latitude: -3.15,
    longitude: 118.86667
  },
  {
    regency_id: '7602',
    province_id: '76',
    name: 'KABUPATEN POLEWALI MANDAR',
    alt_name: 'KABUPATEN POLEWALI MANDAR',
    latitude: -3.3,
    longitude: 119.16667
  },
  {
    regency_id: '7603',
    province_id: '76',
    name: 'KABUPATEN MAMASA',
    alt_name: 'KABUPATEN MAMASA',
    latitude: -2.96492,
    longitude: 119.30631
  },
  {
    regency_id: '7604',
    province_id: '76',
    name: 'KABUPATEN MAMUJU',
    alt_name: 'KABUPATEN MAMUJU',
    latitude: -2.5,
    longitude: 119.41667
  },
  {
    regency_id: '7605',
    province_id: '76',
    name: 'KABUPATEN MAMUJU UTARA',
    alt_name: 'KABUPATEN MAMUJU UTARA',
    latitude: -1.51639,
    longitude: 119.42139
  },
  {
    regency_id: '7606',
    province_id: '76',
    name: 'KABUPATEN MAMUJU TENGAH',
    alt_name: 'KABUPATEN MAMUJU TENGAH',
    latitude: -2.8212,
    longitude: 119.2662
  },
  {
    regency_id: '8101',
    province_id: '81',
    name: 'KABUPATEN MALUKU TENGGARA BARAT',
    alt_name: 'KABUPATEN MALUKU TENGGARA BARAT',
    latitude: -7.61186,
    longitude: 131.38
  },
  {
    regency_id: '8102',
    province_id: '81',
    name: 'KABUPATEN MALUKU TENGGARA',
    alt_name: 'KABUPATEN MALUKU TENGGARA',
    latitude: -5.75,
    longitude: 132.73334
  },
  {
    regency_id: '8103',
    province_id: '81',
    name: 'KABUPATEN MALUKU TENGAH',
    alt_name: 'KABUPATEN MALUKU TENGAH',
    latitude: -3.29167,
    longitude: 128.9675
  },
  {
    regency_id: '8104',
    province_id: '81',
    name: 'KABUPATEN BURU',
    alt_name: 'KABUPATEN BURU',
    latitude: -3.32767,
    longitude: 126.68413
  },
  {
    regency_id: '8105',
    province_id: '81',
    name: 'KABUPATEN KEPULAUAN ARU',
    alt_name: 'KABUPATEN KEPULAUAN ARU',
    latitude: -6.17059,
    longitude: 134.46991
  },
  {
    regency_id: '8106',
    province_id: '81',
    name: 'KABUPATEN SERAM BAGIAN BARAT',
    alt_name: 'KABUPATEN SERAM BAGIAN BARAT',
    latitude: -3.1027,
    longitude: 128.42996
  },
  {
    regency_id: '8107',
    province_id: '81',
    name: 'KABUPATEN SERAM BAGIAN TIMUR',
    alt_name: 'KABUPATEN SERAM BAGIAN TIMUR',
    latitude: -3.39851,
    longitude: 130.39166
  },
  {
    regency_id: '8108',
    province_id: '81',
    name: 'KABUPATEN MALUKU BARAT DAYA',
    alt_name: 'KABUPATEN MALUKU BARAT DAYA',
    latitude: -7.8296,
    longitude: 126.17386
  },
  {
    regency_id: '8109',
    province_id: '81',
    name: 'KABUPATEN BURU SELATAN',
    alt_name: 'KABUPATEN BURU SELATAN',
    latitude: -3.52187,
    longitude: 126.59271
  },
  {
    regency_id: '8171',
    province_id: '81',
    name: 'KOTA AMBON',
    alt_name: 'KOTA AMBON',
    latitude: -3.7,
    longitude: 128.18333
  },
  {
    regency_id: '8172',
    province_id: '81',
    name: 'KOTA TUAL',
    alt_name: 'KOTA TUAL',
    latitude: -5.64301,
    longitude: 132.74934
  },
  {
    regency_id: '8201',
    province_id: '82',
    name: 'KABUPATEN HALMAHERA BARAT',
    alt_name: 'KABUPATEN HALMAHERA BARAT',
    latitude: 1.41709,
    longitude: 127.55264
  },
  {
    regency_id: '8202',
    province_id: '82',
    name: 'KABUPATEN HALMAHERA TENGAH',
    alt_name: 'KABUPATEN HALMAHERA TENGAH',
    latitude: 0.48056,
    longitude: 128.25
  },
  {
    regency_id: '8203',
    province_id: '82',
    name: 'KABUPATEN KEPULAUAN SULA',
    alt_name: 'KABUPATEN KEPULAUAN SULA',
    latitude: -1.8646,
    longitude: 125.69046
  },
  {
    regency_id: '8204',
    province_id: '82',
    name: 'KABUPATEN HALMAHERA SELATAN',
    alt_name: 'KABUPATEN HALMAHERA SELATAN',
    latitude: -0.3955,
    longitude: 127.90833
  },
  {
    regency_id: '8205',
    province_id: '82',
    name: 'KABUPATEN HALMAHERA UTARA',
    alt_name: 'KABUPATEN HALMAHERA UTARA',
    latitude: 1.73194,
    longitude: 128.00778
  },
  {
    regency_id: '8206',
    province_id: '82',
    name: 'KABUPATEN HALMAHERA TIMUR',
    alt_name: 'KABUPATEN HALMAHERA TIMUR',
    latitude: 1.33517,
    longitude: 128.48627
  },
  {
    regency_id: '8207',
    province_id: '82',
    name: 'KABUPATEN PULAU MOROTAI',
    alt_name: 'KABUPATEN PULAU MOROTAI',
    latitude: 2.19924,
    longitude: 128.40546
  },
  {
    regency_id: '8208',
    province_id: '82',
    name: 'KABUPATEN PULAU TALIABU',
    alt_name: 'KABUPATEN PULAU TALIABU',
    latitude: -1.84578,
    longitude: 124.78992
  },
  {
    regency_id: '8271',
    province_id: '82',
    name: 'KOTA TERNATE',
    alt_name: 'KOTA TERNATE',
    latitude: 0.89618,
    longitude: 127.31016
  },
  {
    regency_id: '8272',
    province_id: '82',
    name: 'KOTA TIDORE KEPULAUAN',
    alt_name: 'KOTA TIDORE KEPULAUAN',
    latitude: 0.60962,
    longitude: 127.56981
  },
  {
    regency_id: '9101',
    province_id: '91',
    name: 'KABUPATEN FAK-FAK',
    alt_name: 'KABUPATEN FAK-FAK',
    latitude: -2.92641,
    longitude: 132.29608
  },
  {
    regency_id: '9102',
    province_id: '91',
    name: 'KABUPATEN KAIMANA',
    alt_name: 'KABUPATEN KAIMANA',
    latitude: -3.66093,
    longitude: 133.77451
  },
  {
    regency_id: '9103',
    province_id: '91',
    name: 'KABUPATEN TELUK WONDAMA',
    alt_name: 'KABUPATEN TELUK WONDAMA',
    latitude: -2.7,
    longitude: 134.5
  },
  {
    regency_id: '9104',
    province_id: '91',
    name: 'KABUPATEN TELUK BINTUNI',
    alt_name: 'KABUPATEN TELUK BINTUNI',
    latitude: -1.88037,
    longitude: 133.33105
  },
  {
    regency_id: '9105',
    province_id: '91',
    name: 'KABUPATEN MANOKWARI',
    alt_name: 'KABUPATEN MANOKWARI',
    latitude: -0.9,
    longitude: 133.75
  },
  {
    regency_id: '9106',
    province_id: '91',
    name: 'KABUPATEN SORONG SELATAN',
    alt_name: 'KABUPATEN SORONG SELATAN',
    latitude: -1.50495,
    longitude: 132.28638
  },
  {
    regency_id: '9107',
    province_id: '91',
    name: 'KABUPATEN SORONG',
    alt_name: 'KABUPATEN SORONG',
    latitude: -1.16667,
    longitude: 131.5
  },
  {
    regency_id: '9108',
    province_id: '91',
    name: 'KABUPATEN RAJA AMPAT',
    alt_name: 'KABUPATEN RAJA AMPAT',
    latitude: -0.5,
    longitude: 130
  },
  {
    regency_id: '9109',
    province_id: '91',
    name: 'KABUPATEN TAMBRAUW',
    alt_name: 'KABUPATEN TAMBRAUW',
    latitude: -0.60515,
    longitude: 132.48962
  },
  {
    regency_id: '9110',
    province_id: '91',
    name: 'KABUPATEN MAYBRAT',
    alt_name: 'KABUPATEN MAYBRAT',
    latitude: -1.2155,
    longitude: 132.35092
  },
  {
    regency_id: '9111',
    province_id: '91',
    name: 'KABUPATEN MANOKWARI SELATAN',
    alt_name: 'KABUPATEN MANOKWARI SELATAN',
    latitude: -1.0798,
    longitude: 133.96729
  },
  {
    regency_id: '9112',
    province_id: '91',
    name: 'KABUPATEN PEGUNUNGAN ARFAK',
    alt_name: 'KABUPATEN PEGUNUNGAN ARFAK',
    latitude: -0.93523,
    longitude: 133.89587
  },
  {
    regency_id: '9171',
    province_id: '91',
    name: 'KOTA SORONG',
    alt_name: 'KOTA SORONG',
    latitude: -0.86507,
    longitude: 131.25153
  },
  {
    regency_id: '9401',
    province_id: '94',
    name: 'KABUPATEN MERAUKE',
    alt_name: 'KABUPATEN MERAUKE',
    latitude: -7.66667,
    longitude: 139.66667
  },
  {
    regency_id: '9402',
    province_id: '94',
    name: 'KABUPATEN JAYAWIJAYA',
    alt_name: 'KABUPATEN JAYAWIJAYA',
    latitude: -4.08333,
    longitude: 139.08333
  },
  {
    regency_id: '9403',
    province_id: '94',
    name: 'KABUPATEN JAYAPURA',
    alt_name: 'KABUPATEN JAYAPURA',
    latitude: -3,
    longitude: 139.95
  },
  {
    regency_id: '9404',
    province_id: '94',
    name: 'KABUPATEN NABIRE',
    alt_name: 'KABUPATEN NABIRE',
    latitude: -3.54016,
    longitude: 135.55511
  },
  {
    regency_id: '9408',
    province_id: '94',
    name: 'KABUPATEN KEPULAUAN YAPEN',
    alt_name: 'KABUPATEN KEPULAUAN YAPEN',
    latitude: -1.78773,
    longitude: 136.27716
  },
  {
    regency_id: '9409',
    province_id: '94',
    name: 'KABUPATEN BIAK NUMFOR',
    alt_name: 'KABUPATEN BIAK NUMFOR',
    latitude: -1.03333,
    longitude: 136
  },
  {
    regency_id: '9410',
    province_id: '94',
    name: 'KABUPATEN PANIAI',
    alt_name: 'KABUPATEN PANIAI',
    latitude: -3.9,
    longitude: 136.60001
  },
  {
    regency_id: '9411',
    province_id: '94',
    name: 'KABUPATEN PUNCAK JAYA',
    alt_name: 'KABUPATEN PUNCAK JAYA',
    latitude: -3.67241,
    longitude: 137.43896
  },
  {
    regency_id: '9412',
    province_id: '94',
    name: 'KABUPATEN MIMIKA',
    alt_name: 'KABUPATEN MIMIKA',
    latitude: -4.54357,
    longitude: 136.56555
  },
  {
    regency_id: '9413',
    province_id: '94',
    name: 'KABUPATEN BOVEN DIGOEL',
    alt_name: 'KABUPATEN BOVEN DIGOEL',
    latitude: -5.70519,
    longitude: 140.36349
  },
  {
    regency_id: '9414',
    province_id: '94',
    name: 'KABUPATEN MAPPI',
    alt_name: 'KABUPATEN MAPPI',
    latitude: -6.49971,
    longitude: 139.34441
  },
  {
    regency_id: '9415',
    province_id: '94',
    name: 'KABUPATEN ASMAT',
    alt_name: 'KABUPATEN ASMAT',
    latitude: -5.3795,
    longitude: 138.46344
  },
  {
    regency_id: '9416',
    province_id: '94',
    name: 'KABUPATEN YAHUKIMO',
    alt_name: 'KABUPATEN YAHUKIMO',
    latitude: -4.60403,
    longitude: 139.58405
  },
  {
    regency_id: '9417',
    province_id: '94',
    name: 'KABUPATEN PEGUNUNGAN BINTANG',
    alt_name: 'KABUPATEN PEGUNUNGAN BINTANG',
    latitude: -4.52167,
    longitude: 140.29541
  },
  {
    regency_id: '9418',
    province_id: '94',
    name: 'KABUPATEN TOLIKARA',
    alt_name: 'KABUPATEN TOLIKARA',
    latitude: -3.42661,
    longitude: 137.41699
  },
  {
    regency_id: '9419',
    province_id: '94',
    name: 'KABUPATEN SARMI',
    alt_name: 'KABUPATEN SARMI',
    latitude: -2.41667,
    longitude: 139.08333
  },
  {
    regency_id: '9420',
    province_id: '94',
    name: 'KABUPATEN KEEROM',
    alt_name: 'KABUPATEN KEEROM',
    latitude: -3.3,
    longitude: 140.61667
  },
  {
    regency_id: '9426',
    province_id: '94',
    name: 'KABUPATEN WAROPEN',
    alt_name: 'KABUPATEN WAROPEN',
    latitude: -2.286,
    longitude: 137.01837
  },
  {
    regency_id: '9427',
    province_id: '94',
    name: 'KABUPATEN SUPIORI',
    alt_name: 'KABUPATEN SUPIORI',
    latitude: -0.73881,
    longitude: 135.61111
  },
  {
    regency_id: '9428',
    province_id: '94',
    name: 'KABUPATEN MAMBERAMO RAYA',
    alt_name: 'KABUPATEN MAMBERAMO RAYA',
    latitude: -2.23561,
    longitude: 137.78229
  },
  {
    regency_id: '9429',
    province_id: '94',
    name: 'KABUPATEN NDUGA',
    alt_name: 'KABUPATEN NDUGA',
    latitude: -4.45093,
    longitude: 138.10089
  },
  {
    regency_id: '9430',
    province_id: '94',
    name: 'KABUPATEN LANNY JAYA',
    alt_name: 'KABUPATEN LANNY JAYA',
    latitude: -3.91244,
    longitude: 138.28766
  },
  {
    regency_id: '9431',
    province_id: '94',
    name: 'KABUPATEN MAMBERAMO TENGAH',
    alt_name: 'KABUPATEN MAMBERAMO TENGAH',
    latitude: -2.46064,
    longitude: 138.45245
  },
  {
    regency_id: '9432',
    province_id: '94',
    name: 'KABUPATEN YALIMO',
    alt_name: 'KABUPATEN YALIMO',
    latitude: -3.86037,
    longitude: 138.47305
  },
  {
    regency_id: '9433',
    province_id: '94',
    name: 'KABUPATEN PUNCAK',
    alt_name: 'KABUPATEN PUNCAK',
    latitude: -4.14204,
    longitude: 137.09702
  },
  {
    regency_id: '9434',
    province_id: '94',
    name: 'KABUPATEN DOGIYAI',
    alt_name: 'KABUPATEN DOGIYAI',
    latitude: -4.03186,
    longitude: 135.43945
  },
  {
    regency_id: '9435',
    province_id: '94',
    name: 'KABUPATEN INTAN JAYA',
    alt_name: 'KABUPATEN INTAN JAYA',
    latitude: -3.41016,
    longitude: 136.70837
  },
  {
    regency_id: '9436',
    province_id: '94',
    name: 'KABUPATEN DEIYAI',
    alt_name: 'KABUPATEN DEIYAI',
    latitude: -3.94737,
    longitude: 135.95032
  },
  {
    regency_id: '9471',
    province_id: '94',
    name: 'KOTA JAYAPURA',
    alt_name: 'KOTA JAYAPURA',
    latitude: -2.64647,
    longitude: 140.77779
  }
]

export async function seedRegencies() {
  try {
    const RegenciesRepository = PostgresDB.getRepository(Regencies)

    for (const regenciData of RegenciesData) {
      // Cek apakah data sudah ada
      const existingRegenci = await RegenciesRepository.findOneBy({ regency_id: regenciData.regency_id })

      if (!existingRegenci) {
        const newRegenci = new Regencies()
        newRegenci.regency_id = regenciData.regency_id
        newRegenci.province_id = regenciData.province_id
        newRegenci.name = regenciData.name
        newRegenci.alt_name = regenciData.alt_name
        newRegenci.latitude = regenciData.latitude
        newRegenci.longitude = regenciData.longitude

        // Generate slug dari name
        newRegenci.slug = regenciData.name.toLowerCase().replace(/ /g, '-')

        await RegenciesRepository.save(newRegenci)
        console.log(`Regenci ${regenciData.name} seeded`)
      } else {
        console.log(`Regenci ${regenciData.name} already exists`)
      }
    }

    console.log('Regencies seeding completed')
  } catch (error) {
    console.error('Error seeding Regencies:', error)
  }
}
