const express = require("express");
const path = require("path");

const compliments= [
    "you look nice today",
    "that dress looks good",
    "thats hot",
    "you are amazing",
    "you have a nice shirt",
    "this is awesome",
    "nice beard"
]

function getRandomCompliment(){
    const randomIndex= Math.floor(Math.random() * compliments.length)
    return compliments[randomIndex];
}

const app = express();

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/compliment", function(req,res){
    res
    .json({
        compliment:getRandomCompliment()
    })
    .end();
})

app.use("/public", express.static("./public"))

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);

// console.log("listening on http://localhost:3000");

