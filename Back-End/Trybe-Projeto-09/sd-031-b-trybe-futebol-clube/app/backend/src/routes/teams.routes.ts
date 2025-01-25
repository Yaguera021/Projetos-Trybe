import { Request, Router, Response } from 'express';
import TeamController from '../controllers/TeamsController';
import TeamService from '../services/TeamsService';

const teamService = new TeamService();
const teamController = new TeamController(teamService);

const router = Router();

router.get('/', (req: Request, res: Response) => teamController.getTeams(req, res));
router.get('/:id', (req: Request, res: Response) => teamController.getTeamById(req, res));

export default router;
