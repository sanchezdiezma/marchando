module.exports = (app) => {
  app.use("/auth", require("./auth.routes"));
  app.use("/restaurantes", require("./restaurant.routes"));
  app.use("/admin", require("./admin.routes"));
};
