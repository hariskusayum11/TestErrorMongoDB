const express = require('express');

const {getStudentAll, getStudent1ID,getStudent1One,addStudent,updateStudentIDU,updateStudent,deleteStudent1,deleteStudent2,deleteStudent3}
= require('../controllers/stdControllers');

const router = express.Router();

// เส้นทางสำหรับดึงข้อมูลนักเรียนทั้งหมด
router.get('/students', getStudentAll);

// เส้นทางสำหรับดึงข้อมูลนักเรียนตาม ID
router.get('/students/:id', getStudent1ID);

// เส้นทางสำหรับดึงข้อมูลนักเรียนตามชื่อ (query parameter)
router.get('/student', getStudent1One);

// เส้นทางสำหรับเพิ่มนักเรียนใหม่
router.post('/students', addStudent);

// เส้นทางสำหรับอัปเดตข้อมูลนักเรียนตาม ID (การอัปเดตทั้งหมด)
router.put('/students/:id', updateStudentIDU);

// เส้นทางสำหรับอัปเดตข้อมูลนักเรียนตาม ID (การอัปเดตทีละฟิลด์)
router.put('/students2/:id', updateStudent);

// เส้นทางสำหรับลบนักเรียนตาม ID โดยใช้ findByIdAndDelete
router.delete('/students1/:id', deleteStudent1);

// เส้นทางสำหรับลบนักเรียนตาม ID โดยใช้ findOneAndDelete
router.delete('/students2/:id', deleteStudent2);

// เส้นทางสำหรับลบนักเรียนตาม ID โดยใช้ findById + remove
router.delete('/students3/:id', deleteStudent3);

module.exports = router;