import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Regencies } from './Regencies'

@Entity()
export class Provinces {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  province_id: string

  @Column()
  name: string

  @Column()
  alt_name: string

  @Column()
  slug: string

  @Column({ type: 'double precision', nullable: true })
  latitude: number

  @Column({ type: 'double precision', nullable: true })
  longitude: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Regencies, (regency) => regency.province)
  regencies: Regencies[]
}
