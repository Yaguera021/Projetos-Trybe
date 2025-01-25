import { Request, Response } from 'express';
import TeamService from '../services/TeamsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamController {
  constructor(
    private teamService: TeamService,
  ) { }

  public async getTeams(_req: Request, res: Response) {
    const serviceResponse = await this.teamService.getTeams();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getTeamById(req: Request, res: Response) {
    const serviceResponse = await this.teamService.getTeamById(Number(req.params.id));
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
