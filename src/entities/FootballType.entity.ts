import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FootballType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  detail: string;
}
