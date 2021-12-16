const router = require("express").Router();
const transporter = require("../config/nodemailer.config");
const Reservation = require("../models/Reservation.model");

router.post("/:reservationId", (req, res) => {
  const { reservationId } = req.params;

  Reservation.findById(reservationId)
    .populate("restaurantId")
    .populate("client")
    .then((reservation) => {
      const email = reservation.client.email;
      const subject = "Tu reserva de Marchando";
      const restaurantName = reservation.restaurantId.restaurantName;
      const reservationTime = reservation.date;

      const message = `Enhorabuena, tienes una reserva hoy en ${restaurantName} a las ${reservationTime} Gracias por confiar en Marchando. Que aproveche`;

      res.status(200).json(reservation);

      transporter.sendMail({
        from: '"Marchando Mail" <marchandoIH123@gmail.com>',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`,
        html: `<b>${message}</b>  `,
      });
    });
});

module.exports = router;
