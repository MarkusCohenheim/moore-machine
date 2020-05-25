/**
 * Title: Take recursive Transition
 * Description: Recursive transitions are allowed and call the "active( )" function once.
 * Expectation: Test should pass without any errors.
 */

 // define imports
const assert = require("chai").assert;
const MooreState = require("../dev/MooreState");
const TransitionToken = require("../dev/TransitionToken");
const MooreMachineBuilder = require("../dev/MooreMachineBuilder");

// define test
describe("Take recursive Transition", function() {

    // define expectation
    it("Expectation: Passes", function() {

        // count calls to "active()"
        let counter = 0;

        // states
        let initialState = new MooreState("initial", function(){counter++});

        // transition tokens
        let transitionToken = new TransitionToken("t");

        // create builder
        let mooreMachineBuilder = new MooreMachineBuilder();
        
        // define configuration
        mooreMachineBuilder.setInitialState(initialState);
        mooreMachineBuilder.addTransition(initialState, transitionToken, initialState);

        // get an instance of the configured moore machine
        let mooreMachine = mooreMachineBuilder.buildMooreMachine();

        // take transition
        mooreMachine.transite(transitionToken);

        // check if "active()" was called
        assert.strictEqual(1, counter);
    });
});