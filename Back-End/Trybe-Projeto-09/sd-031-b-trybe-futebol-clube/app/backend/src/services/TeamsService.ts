import { ITeam } from '../Interfaces/Teams/ITeam';
import { ITeamModel } from '../Interfaces/Teams/ITeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import TeamModel from '../models/TeamsModel';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) { }

  public async getTeams(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeam>> {
    const team = await this.teamModel.findById(id);

    if (!team) { return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } }; }

    return { status: 'SUCCESSFUL', data: team };
  }
}
