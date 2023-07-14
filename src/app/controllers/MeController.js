import mongoose from "../../utils/mongoose.js";
import CourseModel from "../models/Courses.js";
export default class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    CourseModel.find().then((courses) => {
      res.render("me/stored-courses", {
        courses: mongoose.multipleMongoosesObject(courses),
      });
    }).catch(next);
  }
}
