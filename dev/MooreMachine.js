"use strict";

// define imports
const MooreState = require("./MooreState");
const TransitionToken = require("./TransitionToken");

// define class
/**
 * This implementation consideres a state to be labeled uniquely;
 * give it a name no other state has yet. This allows identifying issues
 * and naming the problematic states with ease. A state must also provide
 * a function that is called when the state is acknowledged as the
 * current state of the state machine; this function is called "active( )".
 * There are no directly visible transitions. Instead, you define
 * transition tokens that also require a unique name to be identified easily.
 * The moore machine itself starts with an initial state that is at the
 * same time the current state, but explicitely does not call the "active( )"
 * function of said state. It calls "active( )" only when it enters a new
 * current state; "new" does not exclude entering the same state again, since
 * recursive transitions are viable. You can change the current state by
 * calling "transite( transitionToken )". If you try to take a transition
 * that is not defined for the current state and transition token, the state
 * machine throws an error. This enforces correct behavior, by eliminating
 * the possibility of being stuck on a certain state accidentally.
 */
class MooreMachine {

    /**
     * Create the moore machine with the given initial state and a map
     * that holds as keys the states of the state machine and as values another map.
     * That second map takes as key a transition token and returns as value the
     * associated destination state to that transition and origin state.
     * @param {Map<MooreState, Map<TransitionToken, MooreState>>} _stateToTransitionsMap 
     */
    constructor(_initialState, _stateToTransitionsMap){

        this._currentState = _initialState;
        this._stateToTransitionsMap = _stateToTransitionsMap;
    }

    /**
     * Attempt to change the current state. If the transition on the
     * current state and given transition token is defined, take that
     * transition, set the destination state as current state and call
     * the "active()" function of the updated current state. Otherwise,
     * throw an error, because the transition is undefined.
     * @param {TransitionToken} transitionToken 
     */
    transite(transitionToken){

        // get transitions from current state
        let transitionTokenToStateMap = this._stateToTransitionsMap.get(this._currentState);
        
        // get destination state based on token
        let destinationState = transitionTokenToStateMap.get(transitionToken);

        if(destinationState === undefined){

            throw Error("Transition Token " + transitionToken.label + " on State Label "
            + this._currentState.label + " is not defined.");
        }else{

            this._currentState = destinationState;
            this._currentState.active();
        }
    }
}

// define export
module.exports = MooreMachine;