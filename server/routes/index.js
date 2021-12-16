module.exports = (app) => {
  app.use("/auth", require("./auth.routes"));
  app.use("/restaurantes", require("./restaurant.routes"));
  app.use("/admin", require("./admin.routes"));
  app.use("/reservation", require("./reservation.routes"));
  app.use("/sendReservation", require("./nodemailer.routes"));
};
