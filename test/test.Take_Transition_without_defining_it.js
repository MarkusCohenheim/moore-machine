/**
 * Title: Take Transition without defining it
 * Description: Undefined transitions are forbidden.
 */

 // define imports
const assert = require("chai").assert;
const MooreState = require("../dev/MooreState");
const TransitionToken = require("../dev/TransitionToken");
const MooreMachineBuilder = require("../dev/MooreMachineBuilder");

// define test
describe("Take Transition without defining it", function() {

    // define expectation
    it("Expectation: Throws Error", function() {

        assert.throws(function(){

            // states
            let initialState = new MooreState("initial", function(){});

            // transition tokens
            let transitionToken = new TransitionToken("t");

            // create builder
            let mooreMachineBuilder = new MooreMachineBuilder();
            
            // define configuration
            mooreMachineBuilder.setInitialState(initialState);

            // get an instance of the configured moore machine
            let mooreMachine = mooreMachineBuilder.buildMooreMachine();

            // take undefined transition
            mooreMachine.transite(transitionToken);
        }, /Transition Token (.|\s)* on State Label (.|\s)* is not defined./);
    });
});