import { IMatch } from '../Interfaces/Matches/IMatch';
import { IMatchModel } from '../Interfaces/Matches/IMatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchModel from '../models/MatchsModel';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) { }

  public async getMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.matchModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getMatchesByProgress(inProgress: boolean): Promise<ServiceResponse<IMatch[]>> {
    const matchesInProgress = await this.matchModel.filterByProgress(inProgress);
    return { status: 'SUCCESSFUL', data: matchesInProgress };
  }

  public async updateMatch(id: number, data: Partial<IMatch>):
  Promise<ServiceResponse<null>> {
    await this.matchModel.update(id, data);
    return { status: 'SUCCESSFUL', data: null };
  }

  public async create(data: Partial<IMatch>): Promise<ServiceResponse<IMatch>> {
    const match = await this.matchModel.create(data);
    if (!match) return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    return { status: 'CREATED', data: match };
  }
}
