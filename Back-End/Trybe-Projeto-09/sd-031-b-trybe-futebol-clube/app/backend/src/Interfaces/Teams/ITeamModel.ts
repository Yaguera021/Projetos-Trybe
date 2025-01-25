import { ITeam } from './ITeam';
// import { newEntity } from '..';

export interface ITeamModel {
  findAll(): Promise<ITeam[]>;
  findById(id: ITeam['id']): Promise<ITeam | null>;
  // createTeam(team: ITeam): Promise<ITeam>;
  // updateTeam(id: number, team: ITeam): Promise<ITeam>;
  // deleteTeam(id: number): Promise<ITeam>;
}
