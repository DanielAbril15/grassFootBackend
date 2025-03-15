import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';
import { PlayerStatistic } from './plyerStistic.entity';
import { Team } from './team.entity';

@Entity()
export class StatisticPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player)
  player: Player;

  @ManyToOne(() => PlayerStatistic)
  playerStatistic: PlayerStatistic;

  @ManyToOne(() => Team)
  team: Team;
}
