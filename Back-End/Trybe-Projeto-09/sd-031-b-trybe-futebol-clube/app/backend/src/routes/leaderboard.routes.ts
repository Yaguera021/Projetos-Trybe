import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/home', (req, res) => leaderboardController.getLeaderboard(req, res));
router.get('/away', (req, res) => leaderboardController.getAwayLeaderboard(req, res));

export default router;
