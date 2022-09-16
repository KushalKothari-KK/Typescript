import React, { useReducer } from "react";

type CounterState = {
    count:number
}

type UpdateAction ={
    //type:string can be any value so use string litteral for restricting
    // type:string
    type:'increment' | 'decrement'
    payload:number
}

// made seprate type as this does not have payload
type ResetAction ={
    type:'reset'
}

// Discriminated Union in Typescript
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 };

function reducer(state:CounterState, action:CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
        return initialState
    default:
        return state
  }
}

export const Counter = () => {
    //reducer function and initialState return state and dispatch
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
    Count:{state.count}
    <button onClick={()=> dispatch({type:'increment',payload:10})}>Increment 10</button>
    <button onClick={()=> dispatch({type:'decrement',payload:10})}>Decrement 10</button>
    <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </>
  );
};
