import mongoose from "mongoose";
import slugGenerator from "mongoose-slug-generator";
mongoose.plugin(slugGenerator);

const Schema = mongoose.Schema;
const Course = new Schema({
  name: {type: String, maxLength: 255},
  description: {type: String,  maxLength: 255},
  image: {type: String},
  slug: {type: String, slug: 'name', unique: true},
},{timestamps: true});

const CourseModel = mongoose.model('Course', Course);
export default CourseModel;
