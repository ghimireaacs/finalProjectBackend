// File: src/model/appointment/AppointmentSchema.js
import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    doctorId: {
        type: String,
        required: true,
    }, // New field to link to doctor
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Appointment", AppointmentSchema);
