/**
 * Title: Create Moore Machine with duplicate State Labels
 * Description: Duplicate State Labels are forbidden.
 */

 // define imports
const assert = require("chai").assert;
const MooreState = require("../dev/MooreState");
const TransitionToken = require("../dev/TransitionToken");
const MooreMachineBuilder = require("../dev/MooreMachineBuilder");

// define test
describe("Create Moore Machine with duplicate State Labels", function() {

    // define expectation
    it("Expectation: Throws Error", function() {

        assert.throws(function(){

            // states
            let state1 = new MooreState("state", function(){});
            let state2 = new MooreState("state", function(){});

            // transition tokens
            let transitionToken = new TransitionToken("5");

            // create builder
            let mooreMachineBuilder = new MooreMachineBuilder();
            
            // define configuration
            mooreMachineBuilder.setInitialState(state1);
            mooreMachineBuilder.addTransition(state1, transitionToken, state2);

            // get an instance of the configured moore machine
            mooreMachineBuilder.buildMooreMachine();
        });
    });
});