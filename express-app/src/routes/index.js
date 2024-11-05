const UserRouter = require("../routes/UseRouter");
const SongRouter = require("../routes/SongRouter");

const routes = (app) => {
  app.use("/api", UserRouter);
  app.use("/api/song", SongRouter);
};

module.exports = routes;
