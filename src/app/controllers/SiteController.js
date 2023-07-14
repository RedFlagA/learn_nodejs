import CourseModel from "../models/Courses.js";
import mongoose from "../../utils/mongoose.js";
export default class SiteController {
  // [GET] / news
  home(req, res, next) {
    CourseModel.find()
      .then((courses) => {
        res.render("home", {
          courses : mongoose.multipleMongoosesObject(courses),
        });
      })
      .catch(next);
    //
  }
  // [GET] / news/:slug
  search(req, res) {
    res.render("search");
  }
}
