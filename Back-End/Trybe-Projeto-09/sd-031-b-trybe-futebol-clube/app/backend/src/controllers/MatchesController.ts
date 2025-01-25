import { Request, Response } from 'express';
import MatchService from '../services/MatchsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async getMatches(_req: Request, res: Response) {
    const { inProgress } = _req.query;

    if (inProgress) {
      const serviceResponse = await this.matchService.getMatchesByProgress(inProgress === 'true');
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    const serviceResponse = await this.matchService.getMatches();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updateMatch(_req: Request, res: Response) {
    const { id } = _req.params;
    const { homeTeamGoals, awayTeamGoals } = _req.body;

    const serviceResponse = await this.matchService
      .updateMatch(Number(id), { homeTeamGoals, awayTeamGoals });

    return res.status(mapStatusHTTP(serviceResponse.status)).json({ message: 'Match updated' });
  }

  public async finishMatch(_req: Request, res: Response) {
    const { id } = _req.params;
    const serviceResponse = await this.matchService.updateMatch(Number(id), { inProgress: false });

    return res.status(mapStatusHTTP(serviceResponse.status)).json({ message: 'Finished' });
  }

  public async createMatch(_req: Request, res: Response) {
    const teams = _req.body;
    const serviceResponse = await this.matchService.create(teams);

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
