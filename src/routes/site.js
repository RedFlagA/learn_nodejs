import express from 'express'
import SiteController from '../app/controllers/SiteController.js'
const SiteRouter = express.Router()
const siteController = new SiteController()

SiteRouter.get('/search', siteController.search)
SiteRouter.get('/', siteController.home)


export default SiteRouter
