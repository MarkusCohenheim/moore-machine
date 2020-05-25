# Moore Machine

## General Moore Machine
A moore machine is a state machine and therefore has states and transitions between those states. In addition, a moore machine creates a certain output based solely on the state that it is currently in, therefore ignoring the specific transition that lead into that state. A state machine has an initial state.

## Implemented Moore Machine

### Moore State
This implementation consideres a state to be labeled uniquely; give it a name no other state has yet. This allows identifying issues and naming the problematic states with ease. A state must also provide a function that is called when the state is acknowledged as the current state of the state machine; this function is called "active( )".

### Transition Token
There are no directly visible transitions. Instead, you define transition tokens that also require a unique name to be identified easily.

### Moore Machine
The moore machine itself starts with an initial state that is at the same time the current state, but explicitely does not call the "active( )" function of said state. It calls "active( )" only when it enters a new current state; "new" does not exclude entering the same state again, since recursive transitions are viable. You can change the current state by calling "transite( transitionToken )". If you try to take a transition that is not defined for the current state and transition token, the state machine throws an error. This enforces correct behavior, by eliminating the possibility of being stuck on a certain state accidentally.

### Moore Machine Builder
You are not supposed to build a moore machine by hand; use the builder for that task. You can use "setInitialState( mooreState )" to set a state as the initial state. You can use "addTransition( originState, transitionToken, destinationState )" to add a transition. You do not need to specifically add each state individually. When the state machine is finalized, you can call "buildMooreMachine( )" to get a copy of the moore machine you configured. If you need another moore machine, just use "reset( )" to restore the builder to it's original setup.

## How to use

### Example: Hello World - Moore Machine

Import this package into your project:
```javascript
// import as node_module
const MooreState = require("moore-machine").MooreState;
const TransitionToken = require("moore-machine").TransitionToken;
const MooreMachineBuilder = require("moore-machine").MooreMachineBuilder;
```
Create states:
```javascript
// states
let initialState = new MooreState("initial", function(){});
let helloState = new MooreState("hello", function(){console.log("Hello")});
let worldState = new MooreState("world", function(){console.log("World")});
```

Create transition tokens:
```javascript
// transition tokens
let transitionToken6 = new TransitionToken("6");
```

Create moore machine builder:
```javascript
// create builder
let mooreMachineBuilder = new MooreMachineBuilder();

// define configuration
mooreMachineBuilder.setInitialState(initialState);
mooreMachineBuilder.addTransition(initialState, transitionToken6, helloState);
mooreMachineBuilder.addTransition(helloState, transitionToken6, worldState);
```

Create moore machine:
```javascript
// get an instance of the configured moore machine
let mooreMachine = mooreMachineBuilder.buildMooreMachine();

// delete configuration if necessary
mooreMachineBuilder.reset();
```

Run moore machine:
```javascript
// enter helloState
mooreMachine.transite(transitionToken6); // console: Hello
// enter worldState
mooreMachine.transite(transitionToken6); // console: World
```

### See also:
[Use Case](./usecase.md)

## Installation

### Requirements:
- Node.js

### Install as node_module:
1. Open directory of your project in terminal.
2. Run in terminal:  
npm install ht<span>tp://github.com/MarkusCohenheim/moore-machine#master</span>

### Install as standalone:
1. Clone Repository.
2. Open directory of repository in terminal.
3. Run in terminal:  
npm install