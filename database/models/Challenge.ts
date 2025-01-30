import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Player from './Player';

export default class Challenge extends Model {
  static table = 'challenges';

  @field('type') type!: 'dribbling' | 'shooting' | 'stamina';
  @field('score') score!: number;
  @field('completed_at') completedAt!: number;

  @relation('players', 'player_id') player!: Relation<Player>; // Tipo Relation
}
