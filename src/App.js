import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import GlobalStyle from './Global/GlobalStyle';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { UserStorage } from './UserContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
