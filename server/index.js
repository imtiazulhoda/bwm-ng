const express =require ('express');
const mongoose =require ('mongoose');
const config = require('./config/dev');
const rental = require('./models/rental');
const FakeDB = require('./fake-db');
const rentalRoutes = require ('./routes/rental')

mongoose.connect(config.DB_URI).then( ()=> {
const fakeDb = new FakeDB();
fakeDb.seeDb();


}) ;
const app = express();
app.use('/api/v1/rentals', rentalRoutes);




const PORT =process.env.PORT || 3001;
app.listen(PORT, function (){
    //console.log(PORT)
    console.log ('i am running')
})