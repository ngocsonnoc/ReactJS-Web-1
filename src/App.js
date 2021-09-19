import { Footer, Navbar, ScrollToTop } from "./components";
import GlobalStyles from './globalStyle.js'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import { footerData, menuItems } from "./connfig/data";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop/>
      <Navbar menuItems={menuItems} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Footer {...footerData} menuItems={menuItems} />
    </Router>
  );
}

export default App;
