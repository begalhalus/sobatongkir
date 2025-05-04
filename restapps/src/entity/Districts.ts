import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm'
import { Regencies } from './Regencies'
import { Villages } from './Villages'

@Entity()
export class Districts {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  district_id: string

  @Column()
  regency_id: string

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

  @ManyToOne(() => Regencies, (regency) => regency.districts)
  regency: Regencies

  @OneToMany(() => Villages, (village) => village.district)
  villages: Villages[]
}
