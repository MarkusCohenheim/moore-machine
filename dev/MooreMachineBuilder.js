"use strict";

// define imports
const MooreState = require("./MooreState");
const TransitionToken = require("./TransitionToken")
const MooreMachine = require("./MooreMachine");

// define class
/**
 * This is a builder that constructs a moore machine
 * based on the defined configuration. You must at least
 * set an initial state before you can build the state
 * machine.
 */
class MooreMachineBuilder {

    /**
     * Create moore machine builder.
     */
    constructor(){

        /**@type {MooreState} */
        this._initialState = undefined;
        /**@type {Map<MooreState, Map<TransitionToken, MooreState>>} */
        this._stateToTransitionsMap = undefined;

        this.reset();
    }

    /**
     * Set the initial state of the moore machine.
     * A state machine must have at least an initial state.
     * @param {MooreState} _initialState 
     */
    setInitialState(_initialState){

        if(_initialState === undefined){
            
            throw new Error("Initial State must not be undefined.");
        }
        this.createMapData(_initialState);
        this._initialState = _initialState;
    }

    /**
     * Add a transition to the moore machine.
     * A transition token cannot be used twice in combination
     * with the same state.
     * @param {MooreState} originState 
     * @param {TransitionToken} transitionToken 
     * @param {MooreState} destinationState 
     */
    addTransition(originState, transitionToken, destinationState){

        this.createMapData(originState);
        this.createMapData(destinationState);

        // get transitions for originState
        let transitionTokenToStateMap = this._stateToTransitionsMap.get(originState);

        // check if entry has a value for the key that is the transitionToken
        if(transitionTokenToStateMap.get(transitionToken) === undefined){

            // insert transitionToken as value and destinationState as key into entry
            transitionTokenToStateMap.set(transitionToken, destinationState);
        }else{

            // throw error because of duplicate use of transitionToken
            throw new Error("Transition Token "
             + transitionToken.label + " on State Label "
             + originState.label + " is a duplicate.");
        }
    }

    /**
     * Create entry in the map that holds transitions for the given state.
     * @param {MooreState} state 
     */
    createMapData(state){

        // check if state has entry in map
        if(this._stateToTransitionsMap.get(state) === undefined){
            
            // check for duplicate state label
            let stateIterator = this._stateToTransitionsMap.keys();
            let nextState = stateIterator.next();
            while(nextState.value !== undefined){

                // duplicate found
                if(state.label.localeCompare(nextState.value.label) === 0){

                    throw new Error("State Label " + state.label + " is a duplicate.")
                }
                
                nextState = stateIterator.next();
            }            

            // create entry
            this._stateToTransitionsMap.set(state, new Map());
        }
    }

    /**
     * Build and return the configured moore machine.
     * @returns {MooreMachine} Configured Moore Machine
     */
    buildMooreMachine(){

        if(this._initialState === undefined){
            
            throw new Error("Initial State is not specified.");
        }

        return new MooreMachine(this._initialState, this._stateToTransitionsMap);
    }

    /**
     * Reset the configuration of the builder.
     */
    reset(){

        this._initialState = undefined;
        this._stateToTransitionsMap = new Map();
    }
}

// define export
module.exports = MooreMachineBuilder;