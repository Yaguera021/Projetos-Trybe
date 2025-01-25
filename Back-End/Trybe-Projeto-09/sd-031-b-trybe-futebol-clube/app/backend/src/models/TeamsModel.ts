import SequelizeTeams from '../database/models/SequelizeTeam';
import { ITeam } from '../Interfaces/Teams/ITeam';
import { ITeamModel } from '../Interfaces/Teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeams;

  async findAll(): Promise<ITeam[]> {
    const teams = await this.model.findAll();
    return teams.map(({ id, teamName }) => ({ id, teamName }));
  }

  async findById(id: ITeam['id']): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);

    if (dbData === null) return null;

    const { teamName }: ITeam = dbData;
    return { id, teamName };
  }
}
