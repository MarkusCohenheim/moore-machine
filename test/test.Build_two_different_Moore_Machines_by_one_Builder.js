/**
 * Title: Build two different Moore Machines by one Builder
 * Description: After declaring a configuration and building a state machine,
 * it should be possible to reset the builder and create another state machine from another configuration.
 */

// define imports
const assert = require("chai").assert;
const MooreState = require("../dev/MooreState");
const TransitionToken = require("../dev/TransitionToken");
const MooreMachineBuilder = require("../dev/MooreMachineBuilder");

// define test
describe("Build two different Moore Machines by one Builder", function () {

    // define expectation
    it("Expectation: Passes", function () {

        // count calls to "active()"
        let counterInitialState = 0;
        let counterState1 = 0;
        let counterState2 = 0;

        // states
        let initialState = new MooreState("initial", function () { counterInitialState++ });
        let state1 = new MooreState("state1", function () { counterState++ });
        let state2 = new MooreState("state1", function () { counterState++ });

        // transition tokens
        let transitionTokenT = new TransitionToken("T");
        let transitionTokenB = new TransitionToken("B");

        // create builder
        let mooreMachineBuilder = new MooreMachineBuilder();

        // define configuration
        mooreMachineBuilder.setInitialState(initialState);
        mooreMachineBuilder.addTransition(initialState, transitionTokenT, state1);

        // get an instance of the configured moore machine
        let mooreMachine1 = mooreMachineBuilder.buildMooreMachine();

        // take transition
        mooreMachine1.transite(transitionTokenT);

        // check if "active()" was called
        assert.strictEqual(0, counterInitialState);
        assert.strictEqual(1, counterState1);

        // reset count of calls to "active()"
        counterInitialState = 0;
        counterState1 = 0;
        counterState2 = 0;

        // delete configuration
        mooreMachineBuilder.reset();
        
        // define configuration
        mooreMachineBuilder.setInitialState(initialState);
        mooreMachineBuilder.addTransition(initialState, transitionTokenB, state1);
        mooreMachineBuilder.addTransition(state1, transitionTokenB, state2);
        mooreMachineBuilder.addTransition(state2, transitionTokenT, state1);
        
        // get an instance of the configured moore machine
        let mooreMachine2 = mooreMachineBuilder.buildMooreMachine();

        // take transition
        mooreMachine2.transite(transitionTokenB);
        mooreMachine2.transite(transitionTokenB);
        mooreMachine2.transite(transitionTokenT);

        // check if "active()" was called
        assert.strictEqual(0, counterInitialState);
        assert.strictEqual(2, counterState1);
        assert.strictEqual(1, counterState1);
    });
});