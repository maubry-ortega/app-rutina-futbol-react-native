import { Model, Relation } from '@nozbe/watermelondb';
import { field, children } from '@nozbe/watermelondb/decorators';
import Challenge from './Challenge';

export default class Player extends Model {
  static table = 'players';

  @field('name') name!: string;
  @field('xp') xp!: number;
  @field('level') level!: number;

  @children('challenges') challenges!: Relation<Challenge>;
}