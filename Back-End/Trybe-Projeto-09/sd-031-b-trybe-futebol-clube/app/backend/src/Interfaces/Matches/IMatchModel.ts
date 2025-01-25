import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>;
  filterByProgress(inProgress: boolean): Promise<IMatch[]>;
  update(id: number, data: Partial<IMatch>): Promise<void>;
  create(data: Partial<IMatch>): Promise<IMatch | null>;
}
