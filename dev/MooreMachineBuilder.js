"use strict";

// define imports
const MooreState = require("./MooreState");
const TransitionToken = require("./TransitionToken")
const MooreMachine = require("./MooreMachine");

// define class
class MooreMachineBuilder {

    constructor(){

    }

    /**
     * 
     * @param {MooreState} _initialSate 
     */
    setInitialState(_initialSate){

    }

    /**
     * 
     * @param {MooreState} originState 
     * @param {TransitionToken} transitionToken 
     * @param {MooreState} destinationState 
     */
    addTransition(originState, transitionToken, destinationState){

    }

    /**
     * 
     * @returns {MooreMachine}
     */
    buildMooreMachine(){

        return new MooreMachine();
    }
}

// define export
module.exports = MooreMachineBuilder;