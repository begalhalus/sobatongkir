import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  slug: string

  @Column()
  phone: string

  @Column()
  address: string

  @Column()
  kelurahan: string

  @Column()
  kecamatan: string

  @Column()
  kota: string

  @Column()
  provinsi: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export const UsersListEntity = (data): any => {
  data = data || {}
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    phone: data.phone,
    address: data.address,
    kelurahan: data.kelurahan,
    kecamatan: data.kecamatan,
    kota: data.kota,
    provinsi: data.provinsi,
    created_at: data.created_at,
    updated_at: data.updated_at || ''
  }
}
