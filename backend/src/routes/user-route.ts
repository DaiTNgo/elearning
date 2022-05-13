import express from 'express';
import UserController from '../controllers/user-controller';
const router = express.Router();

router.route('/update/:email').post(UserController.updateUser);

router.route('/').get((req, res) => {
	res.json('ok');
});

export default router;
