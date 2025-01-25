import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import Validations from '../middlewares/Validations';
import TokenValidation from '../middlewares/TokenValidation';

const usersController = new UsersController();

const router = Router();

router.get('/role', TokenValidation, (req, res) => usersController.getByRole(req, res));
router.post('/', Validations.validateUser, (req, res) => usersController.login(req, res));

export default router;
