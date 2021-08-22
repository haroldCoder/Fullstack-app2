import {Router} from 'express';
const {getUser, createUser, updateUser, deleteUser} = require('../controllers/users.controllers');
const route = Router();
route.route('/')
.get(getUser)
.post(createUser)
.put(updateUser)
.delete(deleteUser)

module.exports = route;