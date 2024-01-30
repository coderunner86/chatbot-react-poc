import './props.css';
import React from 'react';
const Header = () => {
   return (
      <React.Fragment>
         <div className="text-white mini-container">
            <h2>React Component</h2>
         </div>
      </React.Fragment>
   )
}


const TextContent = (props) => {
    const changeColor = () => {
      document.getElementById('myText').style.background='#000';
    }
    return (
       <React.Fragment>
           <p className="content-text" id="myText">Hello {props.name}</p>
       </React.Fragment>
    )
 }


const MainContent = () => { // ===>>>ESTE ES EL PADRE DE TextContent<<<===
   return (
      <React.Fragment>
         <div className="all-content">
            {<TextContent name={'Josh'}/>}
         </div>
      </React.Fragment>
   )
}


const Footer = () => {
   return (
      <React.Fragment>
         <div className="text-white mini-container"></div>
      </React.Fragment>
   )
}


const App = () => {
   return (
      <div>
         <Header />
         <MainContent />
         <Footer />
      </div>
   );
};
export default App;