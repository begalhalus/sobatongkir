import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { Districts } from './Districts'

@Entity()
export class Villages {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  village_id: string

  @Column()
  district_id: string

  @Column()
  name: string

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

  @ManyToOne(() => Districts, (district) => district.villages)
  district: Districts
}
