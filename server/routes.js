const router = require("express").Router();
const { getList, postUser, makeGroups } = require("./controllers.js");

router
  .route("/getQueue")
  .get(getList);


module.exports = router;