const router = require('express').Router();

const {userCtrl} = require('../controllers')

router.get('/all', userCtrl.getAllUsers);

router.post('/', userCtrl.createUser);

// router.put('/users/:id', userCtrl.updateUser);

// router.delete('/users/:id', userCtrl.deleteUser);

module.exports = router;