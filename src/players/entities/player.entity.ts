import { UUID } from 'crypto';
import {
  Column,
  Entity,
  //   JoinColumn,
  //   OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  birthday: Date;

  @Column()
  picture: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  //   @OneToOne(() => DetailPlayer)
  //   @JoinColumn()
  //   detailPlayer: DetailPlayer;
}
