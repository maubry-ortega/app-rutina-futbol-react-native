import type { Model } from '@nozbe/watermelondb';

export interface PlayerModel extends Model {
  name: string;
  xp: number;
  level: number;
}

export interface ChallengeModel extends Model {
  type: 'dribbling' | 'shooting' | 'stamina';
  score: number;
  completedAt: number;
  playerId: string;
}