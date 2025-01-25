import { ILeaderboard } from './ILeaderboard';

export interface ILeaderboardStats extends ILeaderboard {
  goalsBalance: number;
  efficiency: string;
}
