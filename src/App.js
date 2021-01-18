import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import User from './Components/User/User/User';
import GlobalStyle from './Global/GlobalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './UserContext';
import ProtectedRoute from './Helper/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <ProtectedRoute path="/conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
