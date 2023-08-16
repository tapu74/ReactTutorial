import React from 'react';


const Button = (props) => {
    return <button onClick={props.onClick}>{props.label}</button>;
  };

  
const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Button label="Click me" onClick={() => console.log('Button clicked!')} />
    </div>
  );
};

export default App;