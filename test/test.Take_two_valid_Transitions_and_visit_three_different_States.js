/**
 * Title: Take two valid Transitions and visit three different States
 * Description: The moore machine does not call the "active( )" function of the initial state,
 * but does call the "active( )" function of the other two states that it visits.
 * Expectation: Test should pass without any errors.
 */

 // define imports
 const assert = require("chai").assert;
 const MooreState = require("../dev/MooreState");
 const TransitionToken = require("../dev/TransitionToken");
 const MooreMachineBuilder = require("../dev/MooreMachineBuilder");
 
 // define test
 describe("Take two valid Transitions and visit three different States", function() {
 
     // define expectation
     it("Expectation: Passes", function() {
 
         // count calls to "active()"
         let counterInitialState = 0;
         let counterState1 = 0;
         let counterState2 = 0;
 
         // states
         let initialState = new MooreState("initial", function(){counterInitialState++});
         let state1 = new MooreState("state1", function(){counterState1++});
         let state2 = new MooreState("state2", function(){counterState2++});
 
         // transition tokens
         let transitionToken = new TransitionToken("t");
 
         // create builder
         let mooreMachineBuilder = new MooreMachineBuilder();
         
         // define configuration
         mooreMachineBuilder.setInitialState(initialState);
         mooreMachineBuilder.addTransition(initialState, transitionToken, state1);
         mooreMachineBuilder.addTransition(state1, transitionToken, state2);
 
         // get an instance of the configured moore machine
         let mooreMachine = mooreMachineBuilder.buildMooreMachine();
 
         // take transition
         mooreMachine.transite(transitionToken);
         mooreMachine.transite(transitionToken);
 
         // check if "active()" was called
         assert.strictEqual(0, counterInitialState);
         assert.strictEqual(1, counterState1);
         assert.strictEqual(1, counterState2);
     });
 });