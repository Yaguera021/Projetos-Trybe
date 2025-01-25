import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderboard } from '../Interfaces/Leaderboard/ILeaderboard';
import LeaderboardModel from '../models/LeaderboardModel';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: LeaderboardModel = new LeaderboardModel(),
  ) { }

  public async getLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const leaderboard = await this.leaderboardModel.homeLeaderboard();
    return { status: 'SUCCESSFUL', data: leaderboard };
  }

  public async getAwayLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const leaderboard = await this.leaderboardModel.awayLeaderboard();
    return { status: 'SUCCESSFUL', data: leaderboard };
  }
}
