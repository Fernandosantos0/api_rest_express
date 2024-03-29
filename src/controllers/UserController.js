import User from '../models/User';

class UserController {
    async store(req, res, next) {
        try {
            const novoUser = await User.create(req.body);

            res.status(200).json(novoUser);
        } catch (e) {
            console.error(e);
            res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }
}

export default new UserController();
