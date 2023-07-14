import mongoose from 'mongoose';

export default async function dbConnect(){
  try {
    await mongoose.connect('mongodb://localhost:27017/learn_nodejs', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connnected to db')
  } catch (error) {
    console.log("🚀 ~ file: index.js:10 ~ connect ~ error:", error)
  }
}
