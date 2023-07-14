import CourseModel from "../models/Courses.js";
import mongoose from "../../utils/mongoose.js";
export default class CourseController {
  // [GET] / coursers/:slug
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug }).then((course) => {
      res.render("courses/show", {
        course: mongoose.mongooseToObject(course),
      });
    }).catch(next);
  }
  //GET
  create(req, res, next) {
    res.render("courses/create");
  }

  //POST //courses/store
  store(req, res, next) {
    // const newData = req.body;
    // newData.slug = convertStrToSlug(req.body.name);
    // console.log("🚀 ~ file: CourseController.js:22 ~ CourseController ~ store ~ newData:", newData)
    const course = new CourseModel(req.body);
    course.save().then(() => {
      res.redirect("/");
    }).catch(next);
  }

  edit(req, res, next) {
    CourseModel.findById(req.params.id).then((course) => {
      res.render("courses/edit", {
        course: mongoose.mongooseToObject(course),
      });
    }).catch(next);
  }

  //PUT /courses/:id
  update(req, res, next) {
   CourseModel.updateOne({ _id: req.params.id }, req.body).then(() => {
     res.redirect("/me/stored/courses");
   }).catch(next);
  }
}
