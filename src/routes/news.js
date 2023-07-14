import express from 'express'
import NewController from '../app/controllers/NewController.js'
const newRouter = express.Router()
const newController = new NewController()

newRouter.get('/:slug', newController.showDetail)
newRouter.get('/', newController.index)


export default newRouter
