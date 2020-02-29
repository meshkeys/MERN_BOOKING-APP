const bookingsResource = require ("../controllers/bookingsController");
module.exports = app => {
    app.route("/api/bookings")
        .post(bookingsResource.create)
        .get(bookingsResource.getAll)

    app.route("/api/bookings/")
    .get(bookingsResource.getOne)
    .put(bookingsResource.update)
    .delete(bookingsResource.delete)
};