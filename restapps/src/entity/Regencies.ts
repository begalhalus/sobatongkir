import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm'
import { Provinces } from './Provinces'
import { Districts } from './Districts'

@Entity()
export class Regencies {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  regency_id: string

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

  @ManyToOne(() => Provinces, (province) => province.regencies)
  province: Provinces

  @OneToMany(() => Districts, (district) => district.regency)
  districts: Districts[]
}
