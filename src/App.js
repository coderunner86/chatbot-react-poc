import './App.css';
import React from 'react';
const Header = () => {
  return (
    <React.Fragment>
      <div className='bg-black text-white mini-container'>
        <h2>React Component</h2>
      </div>
    </React.Fragment>
  )
}
function TextContent() {
  const changeColor = () => {
    document.getElementById('myText').style.background = '#FF0000';
  };

  return (
    <React.Fragment>
      <p className="learn-react-beginner" id="myText">Function component in React</p>
      <button className="btn btn-success" id="submit-btn" onClick={changeColor}>Change color</button>
    </React.Fragment>
  );
}
function MainContent() {
  return (
    <React.Fragment>
      <div className="all-content">
        <TextContent />
      </div>
    </React.Fragment>
  );
}
const Footer = () => {
  return (
    <React.Fragment>
      <div className='bg-black text-white mini-container'>
      </div>
    </React.Fragment>
  )
}
const App = () => {
  return (
    <div>
      {<Header />}
      {<MainContent />}
      {<Footer />}
    </div>
  );
};
export default App;
