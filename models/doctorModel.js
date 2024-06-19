const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = mongoose.Schema({
    doctorName : {type : String, required:false},
    doctorPhoneNumber : {type : String, required:false},
    doctorSpecialist : {type : String, required:false},
    doctorEmail : {type : String, required:false},
    doctorPassword : {type : String, required:false},
    doctorAddress : {type : String, required:false}
});

doctorSchema.pre('save',async function (next){
    const Doctor = this;
    if(Doctor.isModified('doctorPassword')){
        Doctor.doctorPassword = await bcrypt.hash(Doctor.doctorPassword, 8);
    }
    next();
})

doctorSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.doctorPassword);
}

module.exports = mongoose.model('Doctor', doctorSchema);


    // {
    // "doctorName" : "doctor1",
    // "doctorPhoneNumber" : "1324344",
    // "doctorSpecialist" : "specialist1",
    // "doctorEmail" : "doctor1@gmail.com",
    // "doctorPassword" : "doctor1",
    // "doctorAddress" :"pune"
    // }