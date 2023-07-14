import express from 'express'
import CourseController from '../app/controllers/CourseController.js'
const CoursesRouter = express.Router()
const courseController = new CourseController()

CoursesRouter.get('/create', courseController.create)
CoursesRouter.post('/store', courseController.store)
CoursesRouter.get('/:id/edit', courseController.edit)
CoursesRouter.put('/:id', courseController.update)
CoursesRouter.get('/:slug', courseController.show)


export default CoursesRouter
