import React from 'react';
import './App.css';
import TextField from './TextField';

const App :React.FC =()=>{
    return <div>
      <TextField text='hello' person={{firstName:'John',lastName:'Doe'}}/>
    </div>
};

export default App;
