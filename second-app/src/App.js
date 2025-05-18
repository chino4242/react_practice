import logo from './logo.svg';
import './App.css';

const title = "My React App";

function App() {
  return (
    <div className="App">
      <Header />
      <Body author={author}/>
      <Footer text= {footerText} />
      </div>
  );
}

function Header(){
  return <h3>{title}</h3>
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
      <h4>{props.text}</h4>
    </div>
  )
}

let footerText = "footer text";
let author = {
  name: "John Doe",
  phone: "800-555-1212",
  email: "jdoe@gmail.com"
}
export default App;
