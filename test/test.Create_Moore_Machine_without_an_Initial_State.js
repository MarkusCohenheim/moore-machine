/**
 * Title: Create Moore Machine without an Initial State
 * Description: A state machine should at least have an initial state.
 */

 // define imports
const assert = require("chai").assert;
const MooreMachineBuilder = require("../dev/MooreMachineBuilder");

// define test
describe("Create Moore Machine without an Initial State", function() {

    // define expectation
    it("Expectation: Throws Error", function() {

        assert.throws(function(){

            // create builder
            let mooreMachineBuilder = new MooreMachineBuilder();
            
            // get an instance of the configured moore machine
            mooreMachineBuilder.buildMooreMachine();
        });
    });
});