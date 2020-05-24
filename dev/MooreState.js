"use strict";

// define imports

// define class
/**
 * A moore state has a label and a function that is called,
 * when the state machine enters this state.
 * All labels must be unique within the context of a single
 * moore machine.
 */
class MooreState {

    /**
     * Create a moore state. The _label must be unique
     * within a moore machine. The function _active is
     * called when this state becomes active.
     * @param {string} _label 
     * @param {Function} _active 
     */
    constructor(_label, _active){

        /**@type {string} */
        this._label = _label;
        
        /**@type {Function} */
        this._active = _active;
    }

    /**
     * Return the label of this state.
     * @returns {string} _label
     */
    get label(){

        return this._label;
    }

    /**
     * Return the function that is supposed to be called
     * when this state becomes active.
     * @returns {Function} _active
     */
    get active(){

        return this._active;
    }
}

// define export
module.exports = MooreState;