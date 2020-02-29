const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const bookingsSchema = new Schema({
  title:{
      type: String,
      trim: true
  },
  content: {
      type:String,
      trim: true
  }

});

const Bookings = mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;