const router = require('express').Router();

const {
  getUsers,
  getUserById,
  updateUser,
  updateAvatar,
  getCurrentUser,

} = require('../controllers/users');

const { userIdValidation, updateUserValidation, updateAvatarValidation } = require('../middlewares/validation');

router.get('/users', getUsers);

router.get('/users/me', getCurrentUser);

router.get('/users/:userId', getUserById, userIdValidation);

router.patch('/users/me', updateUser, updateUserValidation);

router.patch('/users/me/avatar', updateAvatar, updateAvatarValidation);

module.exports = router;
