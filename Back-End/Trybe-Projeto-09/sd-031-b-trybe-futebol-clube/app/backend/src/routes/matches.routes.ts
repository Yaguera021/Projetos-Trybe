import { Request, Router, Response } from 'express';
import MatchController from '../controllers/MatchesController';
import TokenValidation from '../middlewares/TokenValidation';
import Validations from '../middlewares/Validations';

const matchController = new MatchController();
const router = Router();

router.get('/', (req: Request, res: Response) => matchController.getMatches(req, res));
router.patch(
  '/:id',
  TokenValidation,
  (req: Request, res: Response) => matchController.updateMatch(req, res),
);

router.patch(
  '/:id/finish',
  TokenValidation,
  (req: Request, res: Response) => matchController.finishMatch(req, res),
);

router.post(
  '/',
  TokenValidation,
  Validations.validateTeam,
  (req: Request, res: Response) => matchController.createMatch(req, res),
);

export default router;
