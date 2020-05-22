/**
 * Title: Build two Copies of a Moore Machine by one Builder
 * Description: After declaring a configuration, it should be possible to create
 * two copies of a moore machine by a single builder.
 */

// define imports
const assert = require("chai").assert;
const MooreState = require("../dev/MooreState");
const TransitionToken = require("../dev/TransitionToken");
const MooreMachineBuilder = require("../dev/MooreMachineBuilder");

// define test
describe("Build two Copies of a Moore Machine by one Builder", function () {

    // define expectation
    it("Expectation: Passes", function () {

        // count calls to "active()"
        let counterInitialState = 0;
        let counterState = 0;

        // states
        let initialState = new MooreState("initial", function () { counterInitialState++ });
        let state = new MooreState("state1", function () { counterState++ });

        // transition tokens
        let transitionToken = new TransitionToken("t");

        // create builder
        let mooreMachineBuilder = new MooreMachineBuilder();

        // define configuration
        mooreMachineBuilder.setInitialState(initialState);
        mooreMachineBuilder.addTransition(initialState, transitionToken, state);

        // get an instance of the configured moore machine
        let mooreMachine1 = mooreMachineBuilder.buildMooreMachine();

        // take transition
        mooreMachine1.transite(transitionToken);

        // check if "active()" was called
        assert.strictEqual(0, counterInitialState);
        assert.strictEqual(1, counterState);

        // reset count of calls to "active()"
        counterInitialState = 0;
        counterState = 0;

        // get another instance of the configured moore machine
        let mooreMachine2 = mooreMachineBuilder.buildMooreMachine();

        // take transition
        mooreMachine2.transite(transitionToken);

        // check if "active()" was called
        assert.strictEqual(0, counterInitialState);
        assert.strictEqual(1, counterState);
    });
});