import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Products} />
      <Route path="/page/:pageNumber" component={Products} />
    </Router>
  );
}

export default App;
