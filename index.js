const express = require("express");
const handler = require("./handler");
// root app
const app = express();
// app.enable("case sensitive routing")
// sub app
const admin = express();
const ejs = require("ejs");

/* app.locals.myVar = "I am from ExpressJS."
// console.log(app.locals.myVar);

app.get("/", handler => {
    console.log(handler);
}); */

// we have to create app instance at first the we can use it.
/* admin.get("/dashboard", (req, res) => {
    // admin.on("mount",(parent)=> {
    //     console.log(parent);
    // })
    console.log(admin.mountpath);
    res.send("HI, I AM FROM ADMIN APP.");
}); */


// we need to create route at first then we can use it.
// app.use("/admin", admin);

// app.set("name", "ExpressJS....!");

/* app.all("/admin", (req, res,next) => {
    console.log("I am from admin route....!");
    next();
}); */

// app.get("/admin", (req, res) => {
//     res.send("HI......!");
//     console.log(app.get("name"))
// });

// app.post("/Admin", (req, res) => {
//     res.send("HI......!")
// });

/* app.param("userId", (req, res, next,userId) => {
    console.log(userId);
    next();
}); */

/* app.put("/user/:userId", (req, res,next) => {
    res.send(`Hello....!`);
    next();
}); */

/* app.route("/users/user")
    .get("/:userId", (req, res) => { })
    .post("/:userId", (req, res) => { })
    .put("/:userId", (req, res) => { })
    .delete("/:userId", (req, res) => { }); */

/* admin.get("/", (req, res) => {
        console.log(admin.path());
    })

app.use("/admin", admin);
 */

app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
    res.render("index.ejs",{name:"EJS"})
});

// server running code
app.listen(3000, () => {
    console.log("Server is running at 3000 port.....!");
});
