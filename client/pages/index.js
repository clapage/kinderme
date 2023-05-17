import { Button } from '@mantine/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './home';
import LoginPage from './login';
import SignupPage from './signup';


function App() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Router>
    );
  }
  
export default App;

/*
function HomePage() {
  return (
    <div className="text-4xl">
      Welcome to kinderMe!
      <Button>Hello Mantine</Button>
    </div>
  );
}

export default HomePage
*/