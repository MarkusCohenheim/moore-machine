/**
 * Title: Create Moore Machine with duplicate Transition Token on same State
 * Description: Duplicate transition token on same the state are forbidden.
 */

 // define imports
const assert = require("chai").assert;
const MooreState = require("../dev/MooreState");
const TransitionToken = require("../dev/TransitionToken");
const MooreMachineBuilder = require("../dev/MooreMachineBuilder");

// define test
describe("Create Moore Machine with duplicate Transition Token on same State", function() {

    // define expectation
    it("Expectation: Throws Error", function() {

        assert.throws(function(){

            // states
            let initialState = new MooreState("initial", function(){});
            let state1 = new MooreState("state1", function(){});
            let state2 = new MooreState("state2", function(){});

            // transition tokens
            let transitionToken = new TransitionToken("5");

            // create builder
            let mooreMachineBuilder = new MooreMachineBuilder();
            
            // define configuration
            mooreMachineBuilder.setInitialState(initialState);
            mooreMachineBuilder.addTransition(initialState, transitionToken, state1);
            mooreMachineBuilder.addTransition(initialState, transitionToken, state2);

            // get an instance of the configured moore machine
            mooreMachineBuilder.buildMooreMachine();
        });
    });
});