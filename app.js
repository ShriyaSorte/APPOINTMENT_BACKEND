const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(express.json());

connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://shriyasorte2000:wTrjoAwx58Wst0zn@cluster0.dmwak8m.mongodb.net/APPOINTMENTBACKEND');
        console.log('database connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:',error);
    }
}

connectDB();

app.use('/api',apiRoutes);

app.listen(port, ()=> console.log(`Example app listening on port ${port}`));
