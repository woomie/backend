let events = require("events");
let eventEmitter = new events.EventEmitter();

let witListener = function witListener(){
    console.log("WIT listener has been called")
}
let mcaListener = function mcaListener(){
    console.log("mca listener has been called")
}
let createdOnce= function createdOnce(){
    console.log("this event was created using once")
}

//bind the event to the callback fn (greet is the event)
eventEmitter.addListener("greet", witListener)
eventEmitter.on("greet", mcaListener)
eventEmitter.once("greet", createdOnce)

//fire the event
eventEmitter.emit("greet");

