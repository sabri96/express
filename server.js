const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  var d = new Date();
  var n = d.getDay();
  var nh = d.getHours();
  if (n > 0 && n < 6 && nh >= 9 && nh <= 17) next();
  else
    res
      .status(404)
      .send(
        "we are offline at this time , please visit us from monday to friday , from 9 to 17"
      );
});

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) console.log("Error... : ", err);
  else console.log(`the server is running on port ${port}`);
});