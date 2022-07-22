const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());

const routes = require('./digital-twin/routes')


// mongoose.connect('mongodb+srv://ircengg:12345@ircengg.4al9o.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true });



app.use(express.static('../client/build'))
app.use('/api',routes); 



const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});