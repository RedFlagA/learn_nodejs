import express from 'express'
import MeController from '../app/controllers/MeController.js'
const MeRouter = express.Router()
const meController = new MeController()

MeRouter.get('/stored/courses', meController.storedCourses)


export default MeRouter
