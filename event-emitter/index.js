const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();

//register a listener
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

//emit a event (trigger)
myFirstEmitter.emit("greet", "Rahul Kumar");
