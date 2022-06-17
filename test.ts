import mongoose from 'mongoose';


const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/test')
}

// Collection schema
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

// Collection type
const Student = mongoose.model('student', studentSchema);

connect()
  .then(async connection => {
    //collection instance
    const student = await Student.create({ firstName: 'abc' });
    console.log(student);
  })
  .catch(e => console.error(e))