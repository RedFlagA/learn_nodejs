import newRouter from "./news.js"
import SiteRouter from "./site.js"
import CoursesRouter from "./courses.js"
import MeRouter from "./me.js"
export default function route (app){
  app.use('/news', newRouter)
  app.use('/courses', CoursesRouter)
  app.use('/me', MeRouter)
  app.use('/', SiteRouter)
}
