const Student = require('../models/student');

exports.getStudentAll = async(req, res) => {
    try{
        const student = await Student.find();
        res.json(student);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

exports.getStudent1ID = async(req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

exports.getStudent1One = async (req, res) => {
    try {
        const { std_name } = req.query; // รับชื่อจาก query parameter
        const student = await Student.findOne({ std_name });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message }); // แก้ไข massage เป็น message
    }
};

exports.addStudent = async (req, res) => {
    
    const { std_id, std_name, major, faculty, gender, tel, email } = req.body;

    const student = new Student({std_id, std_name, major, faculty, gender, tel, email});

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);

    } catch (err) {
        res.status(400).json({ message: err.message }); // แก้ไข massage เป็น message
    }
};

exports.updateStudentIDU = async (req, res) => {
    try{
        const { std_id, std_name, major, faculty, gender, tel, email } = req.body;
        
        const updateStudentIDU = await Student.findByIdAndUpdate(
            req.params.id,
            { std_id, std_name, major, faculty, gender, tel, email },
            { new: true }
        );
        if (!updateStudentIDU) return res.status(404).json({ message: 'Student not found' });

        res.json(updateStudentIDU);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const { std_id, std_name, major, faculty, gender, tel, email } = req.body;
        
        // ค้นหานิสิตด้วย findById
        const student = await Student.findById(req.params.id);
        
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // อัปเดตข้อมูลของนิสิตทีละฟิลด์
        student.std_id = std_id || student.std_id;
        student.std_name = std_name || student.std_name;
        student.major = major || student.major;
        student.faculty = faculty || student.faculty;
        student.gender = gender || student.gender;
        student.tel = tel || student.tel;
        student.email = email || student.email;

        // บันทึกการอัปเดต
        const updatedStudent = await student.save();

        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteStudent1 = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) return res.status(404).json({ message: 'Student not found' });
        
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteStudent2 = async (req, res) => {
    try {
        const student = await Student.findOneAndDelete({ _id: req.params.id });

        if (!student) return res.status(404).json({ message: 'Student not found' });
        
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteStudent3 = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) return res.status(404).json({ message: 'Student not found' });

        await student.remove(); // หรือใช้ await Student.deleteOne({ _id: student._id });
        
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

