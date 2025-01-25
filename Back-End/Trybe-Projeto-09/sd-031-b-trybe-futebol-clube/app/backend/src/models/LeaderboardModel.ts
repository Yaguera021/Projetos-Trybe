import { ILeaderboard } from '../Interfaces/Leaderboard/ILeaderboard';
import TeamModel from './TeamsModel';
import MatchModel from './MatchsModel';
import { ITeam } from '../Interfaces/Teams/ITeam';
import { IMatch } from '../Interfaces/Matches/IMatch';

export default class LeaderboardModel {
  constructor(
    private teamModel: TeamModel = new TeamModel(),
    private matchModel: MatchModel = new MatchModel(),
  ) { }

  async finishedMatches(): Promise<IMatch[]> {
    return this.matchModel.filterByProgress(false);
  }

  async findAllTeams(): Promise<ITeam[]> {
    return this.teamModel.findAll();
  }

  async homeLeaderboard(): Promise<ILeaderboard[]> {
    const teams = await this.findAllTeams();
    const finishedMatches = await this.finishedMatches();

    const board = await Promise.all(teams.map((team) => this.processTeam(team, finishedMatches)));

    return board;
  }

  async awayLeaderboard(): Promise<ILeaderboard[]> {
    const teams = await this.findAllTeams();
    const finishedMatches = await this.finishedMatches();

    const awayBoard = await Promise.all(teams.map(async (team) => {
      const teamMatches = finishedMatches.filter((match) => match.awayTeamId === team.id);
      return this.processTeam(team, teamMatches);
    }));

    return awayBoard;
  }

  private async processTeam(team: ITeam, finishedMatches: IMatch[]): Promise<ILeaderboard> {
    const teamMatches = finishedMatches.filter((match) => match.homeTeamId === team.id);
    const { totalPoints,
      totalVictories,
      totalDraws, totalLosses } = this.calculateStats(teamMatches);

    return {
      name: team.teamName,
      totalPoints,
      totalGames: teamMatches.length,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor: this.calculateGoals(teamMatches, 'homeTeamGoals'),
      goalsOwn: this.calculateGoals(teamMatches, 'awayTeamGoals'),
    };
  }

  private calculateResults = (teamMatches: IMatch[]):
  { wins: IMatch[], draws: IMatch[], losses: IMatch[] } => ({
    wins: teamMatches.filter((match) => match.homeTeamGoals > match.awayTeamGoals),
    losses: teamMatches.filter((match) => match.homeTeamGoals < match.awayTeamGoals),
    draws: teamMatches.filter((match) => match.homeTeamGoals === match.awayTeamGoals),
  });

  private calculateGoals =
  (teamMatches: IMatch[], goals: 'homeTeamGoals' | 'awayTeamGoals'): number =>
    teamMatches.reduce((total, match) => total + match[goals], 0);

  private calculateStats(teamMatches: IMatch[]) {
    const { wins, losses, draws } = this.calculateResults(teamMatches);
    const totalPoints = (wins.length * 3) + draws.length;

    return {
      totalPoints,
      totalVictories: wins.length,
      totalDraws: draws.length,
      totalLosses: losses.length };
  }
}
