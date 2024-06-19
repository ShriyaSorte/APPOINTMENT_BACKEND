const mongoose = require('mongoose');
const Patient = require('../models/patientModel');

async function addPatient(req,res){
    try {
        const newPatient = new Patient(req.body)
        result = await newPatient.save()
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}

async function loginPatient(req,res){
    try {
        const {patientEmail,patientPassword} = req.body;
        const patient = await Patient.findOne({patientEmail});
        if(!patient || !(await patient.comparePassword(patientPassword))){
            return res.status(400).send({message:"Patient not found",success:false});
        }
        return res.status(200).send({message:"Patient Login Successful",success:true});
    } catch (error) {
        return res.status(500).send(error);
    }
}

async function getAllPatients(req,res){
    try {
        const result = await Patient.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {addPatient,loginPatient,getAllPatients};
