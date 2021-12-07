module.exports = app => {
  app.use("/auth", require("./auth.routes"));
  //app.use("/restaurantes", require("./restaurant.routes"));
}

// const router = require("express").Router();

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

// // Base routes
// const baseRoutes = require("./base.routes");
// router.use("/", baseRoutes);

// // Auth routes
// const authRoutes = require("./auth.routes");
// router.use("/auth", authRoutes);

// // Restaurant routes
// router.use("/Restaurantes", require("./restaurant.routes"));

// // User routes
// router.use("/Usuarios", require("./user.routes"));

// // You put the next routes here 👇
// // example: router.use("/auth", authRoutes)

// module.exports = router;









