const mongoose = require('mongoose');//import thuw vien
const SinhvienSchema = new mongoose.Schema({
  name:{
    type: String,
    require:true

  },
  age:{
    type: Number,
    require:true
  }
});
const sinhvien= mongoose.model('student',SinhvienSchema);
module.exports=sinhvien;
