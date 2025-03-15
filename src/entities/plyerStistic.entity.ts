import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FootballType } from './FootballType.entity';

@Entity()
export class PlayerStatistic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  matches: number;

  @Column()
  goals: number;

  @Column()
  yellowCards: number;

  @Column()
  redCards: number;

  @Column()
  scoredPenalties: number;

  @Column()
  missedPenlties: number;

  @Column()
  concededGoals: number;

  @Column()
  savedPenalties: number;

  @Column()
  undefeatedFences: number;

  @ManyToOne(() => FootballType)
  footballType: FootballType;
}
