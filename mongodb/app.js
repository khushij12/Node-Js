const express = require('express');
const mongoose =require('mongoose');


const app = express();

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.lcbuqqb.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


  const schema = mongoose.Schema({
    borough: String,
    cuisine: String,
    name: String,
  })
  
  var rest = mongoose.model('restaurants', schema);
  const router = express.Router();



const getData = async (req, res) => { 
    try {
        const data = await rest.find({});
        console.log(data)
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

router.get('/', getData);

app.listen(3000,()=>{console.log('Listening ...');});