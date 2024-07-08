const express = require('express');
const mongoose = require('mongoose');
const sinhvien = require('./sinhvienModel');
//tạo đối tượng exp
const app = express();
app.set('view engine','ejs');
//kết nối với csld
mongoose.connect('mongodb://localhost:27017/ADR103',{
   useNewUrlParser: true,
   useUnifiedTopology:  true,
}).then(()=>{
    console.log('đã kết nối thành công');
}).catch((err)=>{
console.error(err);
});
// khi người dùng gọi tới 3000 sinh viên
app.get('/sinhvien',async (req, res)=>{
    try {
        const sinhviens = await sinhvien.find(); //đọc dữ liệu
        //res.json(sinhviens);//chuyển dl thành jsomn

        res.render('students',{sinhviens:sinhviens});
        console.log(sinhviens); 
    } catch (error) {
        console.error(error);//in ra lỗi 
        res.status(500).json({error:'Internet server Error'})
    }
});
//tạo cổng dịch vụ
const PORT = process.env.PORT||3000;
//server alwnsg nghe
 app.listen(PORT,()=>{
    console.log('server đang chạy ở cổng 3000');
 })