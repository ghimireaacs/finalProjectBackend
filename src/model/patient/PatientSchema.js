import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    mName: {
        type: String,
        required: false,
    },
    lName: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    maritalStatus: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: false,
    },
    language: {
        type: String,
        required: false,
    },
    religion: {
        type: String,
        required: false,
    },
    nationality: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    patientStreetAddress: {
        type: String,
        required: true,
    },
    patientStreetAddressLine2: {
        type: String,
        required: false,
    },
    patientCity: {
        type: String,
        required: true,
    },
    patientState: {
        type: String,
        required: true,
    },
    patientpostal: {
        type: String,
        required: true,
    },
});

export default PatientSchema;
