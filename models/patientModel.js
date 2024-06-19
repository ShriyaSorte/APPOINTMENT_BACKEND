const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = mongoose.Schema({
    patientName : {type : String, required:false},
    patientPhoneNumber : {type : String, required:false},
    patientBloodGroup : {type : String, required:false},
    patientEmail : {type : String, required:false},
    patientPassword : {type : String, required:false},
});

patientSchema.pre('save',async function (next){
    const patient = this;
    if(patient.isModified('patientPassword')){
        patient.patientPassword = await bcrypt.hash(patient.patientPassword, 8);
    }
    next();
})

patientSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.patientPassword);
};

module.exports = mongoose.model('patient', patientSchema);


// {
//     "patientName" : "patient1",
//     "patientPhoneNumber" : "3533242",
//     "patientBloodGroup" : {type : String, required:false},
//     "patientEmail" : "patient1@example.com",
//     "patientPassword" : "patient1"
// }