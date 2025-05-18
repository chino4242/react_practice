import logo from './logo.svg';
import './App.css';
import React from 'react';

const title = "My React App";

function App() {
  return (
    <div className="boxed">
      <Header />
      <Body author={author}/>
      {/*<FragTest />*/}
      <Footer text= {footerText} />
      </div>
  );
}

function Header(){
  return <h3 style={divStyle}>{title}</h3>
}

function Body(props) {
  return (
    <div>
      <p>Author: {props.author.name}</p>
      <p>some random text</p>
    </div>
  )
}

function Footer(props) {
  return (
    <div>
      <h4 style={divStyle}>{props.text}</h4>
    </div>
  )
}

function FragTest(props) {
  return <ul><ColorList /></ul>
}

function ColorList(props) {
  return <React.Fragment><li>Red</li>
          <li>Yellow</li>
          <li>Blue</li>
          </React.Fragment>
}

let footerText = "footer text";
let author = {
  name: "John Doe",
  phone: "800-555-1212",
  email: "jdoe@gmail.com"
}
const divStyle = {
  backgroundColor: 'lightgrey',
  margin: '0px',
  padding: '5px',
  textAlign: 'center'
}
export default App;
