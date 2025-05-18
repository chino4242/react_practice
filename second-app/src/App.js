import logo from './logo.svg';
import './App.css';
import React from 'react';

const title = "My React App";
let initialState = {
  title: "My React App",
  footerText: "footer text",
  author: {
  name: "John Doe",
  phone: "800-555-1212",
  email: "jdoe@gmail.com",
  books: [
    {isbn: '123', title: 'The Time Machine', price: 5.95},
    {isbn: '456', title: 'The War of the Worlds', price: 6.95},
    {isbn: '789', title: 'The Invisible Man', price: 4.95}
  ]
  }
}

function App() {
  let state = initialState;
  return (
    <div className="boxed">
      <Header title={state.title}/>
      <Body author={state.author}/>
      {/*<FragTest />*/}
      <Footer text= {state.footerText} />
      </div>
  );
}

function Booklist(props) {
  return ( <ul>
      {props.books.map(
        (book, index) => {return (
          <li key={index} >{book.title}</li> )}
      )}
    </ul>
  );
}

function Header(props){
  return <h3 style={divStyle}>{props.title}</h3>
}

function Body(props) {
  return ( <div>
      <p>Author: {props.author.name}</p>
      <Booklist books={props.author.books} />
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

const divStyle = {
  backgroundColor: 'lightgrey',
  margin: '0px',
  padding: '5px',
  textAlign: 'center'
}
export default App;
