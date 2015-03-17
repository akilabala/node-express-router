/**
 * Created by abalasubramanian on 3/17/15.
 */
var express = require('express'),
    app = express();
var adminRouter = express.Router();

// 1. Generic Router Middleware
adminRouter.use(function(req, res, next) {
   console.log(req.method, req.url);
   next();
});
// 2. Router Middleware for params
adminRouter.param('place', function(req, res, next, place) {
    console.log("Doing validations on: " + place);
    req.place = place;
    next();
});
// 3. Use express.Router() to define groups of routes
adminRouter.get('/', function(req, res) {
    console.log("I'm the dashboard");
    res.send("I'm the dashboard");
});
adminRouter.get('/users', function(req, res) {
    console.log("I show all users");
    res.send("I show all users");
});
adminRouter.get('/places/:place', function(req, res) {
    console.log("Hi " + req.place + "!");
    res.send("Hi " + req.place + "!");
});
adminRouter.get('/posts', function(req, res) {
   console.log("I show all posts");
   res.send("I show all posts");
});
// 4. Apply router to a section of the site
app.use('/admin', adminRouter);
// 5. Use app.route() as a shortcut to express.Router
app.route('/login')
.get(function(req, res) {
        res.send("This is the login form");
    })
.post(function(req, res) {
        console.log("processing...");
        res.send("processing the login form!");
    });
app.listen(1331);