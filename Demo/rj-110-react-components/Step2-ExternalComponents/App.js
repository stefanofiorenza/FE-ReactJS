import React from 'react';
import './App.css';

import ButtonFunction from './components/widgets/ButtonFunction.jsx';
import ButtonClass from './components/widgets/ButtonClass.jsx';
import ButtonCmp from './components/widgets/ButtonCmp';

function App() {
  return (
    <div className="default-text" >
      first message from React UI
      Demo Buttons <br/>
      Stateless UI Component as function <ButtonFunction btnLabel="Function Button" /><br/>
      Stateful UI Component as class <ButtonClass btnLabel="Class Button" /><br/>
      Styled UI Component as standalone component <ButtonCmp btnLabel="Styled Button" /><br/>
    </div>
  );
}

export default App;
