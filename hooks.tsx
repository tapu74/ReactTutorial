import React, { useState } from 'react';

// This hook allows you to add state to functional components. 
// It returns a stateful value and a function to update it. 
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}



// This hook is used for handling side effects in functional components. 
// It can be used to perform actions when the component mounts, updates, or unmounts.

import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return <p>Time: {time} seconds</p>;
}



// This hook is an alternative to useState and is used for managing more complex state logic.
//  It's particularly useful for state transitions that involve multiple actions

import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}




// This hook is used to memoize expensive calculations or operations. 
// It helps in optimizing performance by only recalculating the memoized value 
// when its dependencies change. It takes a function and an array of dependencies, 
// and it returns a memoized value.

import React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(() => {
    // Perform some complex calculations on 'data'
    return result;
  }, [data]);

  return <p>Result: {expensiveValue}</p>;
}


// This hook is similar to useMemo, but it's used for memoizing functions, especially in scenarios
//  where you want to prevent unnecessary re-renders of child components.

import React, { useCallback } from 'react';

function ChildComponent({ onClick }) {
  // Using useCallback to prevent unnecessary re-renders
  const handleClick = useCallback(() => {
    onClick(someValue);
  }, [onClick]);

  return <button onClick={handleClick}>Click Me</button>;
}


//This hook is used to create a mutable reference that persists across renders. It's often 
// used to access DOM elements, store previous values, or maintain values that don't trigger re-renders.

import React, { useRef, useEffect } from 'react';

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element on mount
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

// This hook allows you to access the context provided by a Context.Provider component in
//  the component tree. It's used for passing down values such as themes, user authentication, etc.

import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const contextValue = useContext(MyContext);

  return <p>Context Value: {contextValue}</p>;
}