const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const patientController = require('../controllers/patientController');
const appointmentContoller = require('../controllers/appointmentController');

//Doctor Routes
router.post('/addDoctor', doctorController.addDoctor);
router.post('/loginDoctor',doctorController.loginDoctor);
router.get('/doctors', doctorController.getAllDoctors);

// Patient Routes
router.post('/addPatient', patientController.addPatient);
router.post('/loginPatient', patientController.loginPatient);
router.get('/patients', patientController.getAllPatients);

// Appointment Routes
router.post('/addAppointment', appointmentContoller.addAppointment);
router.delete('/deleteAppointment/:id', appointmentContoller.deleteAppointment);

router.get('/getAllAppointments', appointmentContoller.getAllAppointments);
router.get('/getAppointmentByPatientId', appointmentContoller.getAppointmentByPatientId);
router.get('/getAppointmentByDoctorId', appointmentContoller.getAppointmentByDoctorId);

router.put('/updateAppointment/:id', appointmentContoller.updateAppointment);
module.exports = router;