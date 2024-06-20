const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: {type:mongoose.Schema.Types.ObjectId, ref: "Patient", required:true},
    doctorId: {type:mongoose.Schema.Types.ObjectId, ref: "Doctor", required:true},
    appointmentDateTime: {type: Date, required:true},
    status: {type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending"}
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

// {
//     "patientId": "6668184965e3ecd3ff948203",
//     "doctorId":"66680240ff10df96bfee0c72",
//     "appointmentDateTime": "2024-06-18T12:44:01",
// }