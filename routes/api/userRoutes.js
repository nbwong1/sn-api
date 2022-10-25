const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser, 
    addReaction, 
    removeReaction,
} = require('../../controllers/userController.js');

// /api/users

router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser).delete(deleteUser);

// /api/users/:userId/reactions
router.route('/:userId/reactions').post(addReaction);

// /api/users/:userId/reactions/:reactionId
router.route('/:userId/reactions/:reactionId').delete(removeReaction);

module.exports = router;