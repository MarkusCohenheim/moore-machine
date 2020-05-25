"use strict";

// define imports

// define class
/**
 * A transition token identifies a transition
 * within a moore machine. A token cannot be used more
 * than once in combination with the same state, but
 * can be otherwise freely re-used.
 */
class TransitionToken {

    /**
     * Create a transition token with the specified label.
     * @param {string} _label 
     */
    constructor(_label){
        
        /**@type {string} */
        this._label = _label;
    }

    /**
     * Return the label of this transition token.
     * @returns {string} _label
     */
    get label(){
        
        return this._label;
    }
}

// define export
module.exports = TransitionToken;