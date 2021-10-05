import logo from './logo.svg';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm' ;
import './App.css';
import ChatFeed from './components/ChatFeed' ;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="b0477b59-e91c-4e02-9965-08b7ec6e3313"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()} 
    /> 
  )
}

export default App;
