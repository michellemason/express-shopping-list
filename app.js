const express = require("express")
const app = express();
const ExpressError = require("./expressError")
const itemsRoutes = require("./routes/items")

app.use(express.json());
app.use('/items', itemsRoutes);

/** 404 handler */

app.use(function(req, res, next) {
    return new ExpressError("Not Found", 404);
});

/** general error handler */

app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err.message,
    });
  });



app.listen(3100, function() {
    console.log("Server starting on port 3100")
})

module.exports = app;