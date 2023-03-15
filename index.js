const { transformFileSync } = require("babel-core")

function Monday(){
    console.log("go gor a fve-mile run")
    console.log("Pump iron")
}

function Tuesday(){
    console.log("go for a five-mile run")
    console.log("swim 40 laps")
}

function Wednesday(){
    console.log("go for a five-mile run")
    console.log("go for a five-mile run")
}

function Thursday(){
    console.log("go for a five-mile run")
    console.log("Pump iron")
}

function Friday(){
    console.log("go for a five-mile run")
    console.log("swim 40 laps")
}

function runFiveMiles(){
    console.log("go for a five-mile run")
}

function liftweights(){
    console.log("Pump iron")
}

function swimFortyLaps(){
    console.log("swim 40 laps")
}

function Monday(){
    runFiveMiles()
    liftweights()
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

function Monday(){
    exerciseRoutine(liftweights);
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

