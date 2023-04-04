const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// GET and POST routes for /api/users
// Get all users and create a new user
router.route('/').get(getUsers).post(createUser);

// GET, PUT, and DELETE routes /api/users/:userId
// Get a single user, update an existing user, delete an existing user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST and DELETE routes for /api/users/:userId/friends/:friendId
// Add and delete friends from a user
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;