import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { IMatch } from '../Interfaces/Matches/IMatch';
import { IMatchModel } from '../Interfaces/Matches/IMatchModel';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const matches = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  async filterByProgress(status: boolean): Promise<IMatch[]> {
    const progressMatches = await this.model.findAll({
      where: { inProgress: status },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return progressMatches;
  }

  async update(id: number, data: Partial<IMatch>): Promise<void> {
    await this.model.update(
      data,
      { where: { id } },
    );
  }

  async create(data: IMatch): Promise<IMatch | null> {
    const homeTeam = await SequelizeTeam.findByPk(data.homeTeamId);
    const awayTeam = await SequelizeTeam.findByPk(data.awayTeamId);
    if (!homeTeam || !awayTeam) return null;
    const newMatch = await this.model.create(data);
    return newMatch;
  }
}
