import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DetailPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstPosition: number;

  @Column()
  secondPosition: number;

  @Column()
  otherPosition: number;

  @Column()
  skilledFoot: string;

  @Column()
  height: string;

  @Column()
  weight: string;

  @Column()
  favoriteNumber: number;
}
