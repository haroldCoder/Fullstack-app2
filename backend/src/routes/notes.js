import {Router} from 'express';
const {getnotes,createnotes,updatenotes,deletenotes} = require('../controllers/notes.controllers');
const route = Router();
route.route('/')
.get(getnotes)
.post(createnotes)
.put(updatenotes)
.delete(deletenotes)

module.exports = route;