let Bookings = require ('../models/bookingsModel');

module.exports.create = (req, res) => {
        const bookings = req.body;

        const newBookings = new Bookings(bookings)

        newBookings.save()
        .then(() => res.json({message: 'Booking Successful!'}))
        .catch(err => res.status(400).json({error: err, message: "Booking not successful"}))
};

module.exports.getAll = (req, res) => {
    Bookings.find()
    .then(bookings => res.json({body: bookings}))
    .catch(err => res.status(400).json({error: err, message:"Booking not found"}))
};

module.exports.getOne = (req, res) => {

};

module.exports.update = (req, res) => {

};