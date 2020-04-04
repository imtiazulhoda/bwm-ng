const express = require ('express');
const router = express.Router() ;
const Rental = require('../models/rental');

router.get('', function (req, res){
Rental.find({}, function (error, foundRental){
    res.json (foundRental);
});
});
router.get('/:id', function (req, res){
    const toBeFind = req.params.id;

    Rental.findById(toBeFind, function (error, foundRental){
        if (error){
            res.status(422).send({errors: [{title: 'Rental Error', detail: 'Could not found Rental'}]});
        }
        res.json (foundRental);
    })
});
module.exports=router;