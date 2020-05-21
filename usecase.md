# Use Case
Here is a list of all use cases that are supposed to succeed or fail.

## Create Empty Moore Machine
Creating a moore machine that has no states is not considered correct, because  
1. it is semantically senseless and
2. it goes against having at least an initial state.

## Create Moore Machine without an initial state
A state machine should at least have an initial state.

## Create Moore Machine with duplicate State Labels
Duplicate State Labels are forbidden.

## Create Moore Machine with duplicate Transition Token on same State
Duplicate Transition Token on same State are forbidden.

## Take Transition without defining it
Undefined transitions are forbidden.

## Take recursive Transition
Recursive transitions are allowed and call the "active( )" function once.

## Take two valid Transitions and visit three different States
The moore machine does not call the "active( )" function of the initial state, but does call the "active( )" function of the other two states it visits.

## Create Two Copies of a Moore Machines by one Builder
After declaring a configuration, it should be possible to create two copies of a moore machine by a single builder.

## Create Two different Moore Machines by one Builder
After declaring a configuration and building a state machine, it should be possible to reset the builder and create another state machine from another configuration.