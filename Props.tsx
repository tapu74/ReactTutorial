import React from 'react';




const App = () => {
    return <WelcomeMessage name="John" />;
  };


  export default App;



  const WelcomeMessage = (props) => {
    return <h1>Welcome, {props.name}!</h1>;
  };
  
  export WelcomeMessage;
  
  