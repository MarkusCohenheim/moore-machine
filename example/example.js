// import as node_module
const MooreState = require("../index").MooreState;
const TransitionToken = require("../index").TransitionToken;
const MooreMachineBuilder = require("../index").MooreMachineBuilder;

// states
let initialState = new MooreState("initial", function(){});
let helloState = new MooreState("hello", function(){console.log("Hello")});
let worldState = new MooreState("world", function(){console.log("World")});

// transition tokens
let transitionToken6 = new TransitionToken("6");

// create builder
let mooreMachineBuilder = new MooreMachineBuilder();

// define configuration
mooreMachineBuilder.setInitialState(initialState);
mooreMachineBuilder.addTransition(initialState, transitionToken6, helloState);
mooreMachineBuilder.addTransition(helloState, transitionToken6, worldState);

// get an instance of the configured moore machine
let mooreMachine = mooreMachineBuilder.buildMooreMachine();

// delete configuration if necessary
mooreMachineBuilder.reset();

// enter helloState
mooreMachine.transite(transitionToken6); // console: Hello
// enter worldState
mooreMachine.transite(transitionToken6); // console: World