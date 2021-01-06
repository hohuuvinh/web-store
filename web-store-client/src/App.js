import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './components/Page/Home';
import Page from './components/Page/Page';
import CategoryPage from './components/Page/CategoryPage';

function App() {
  return (
    <Router>
        <Route exact path="/">
          <Home />
        </Route>  
        <Route exact path="/san-pham/:slug">
          <Page/>
        </Route>  
        <Route exact path="/danh-muc/:slug">
          <CategoryPage/>
        </Route>    
      </Router>
  );
}

export default App;
