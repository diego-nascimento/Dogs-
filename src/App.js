import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import User from './Components/User/User/User';
import GlobalStyle from './Global/GlobalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './UserContext';
import ProtectedRoute from './Helper/ProtectedRoute';

import PhotoLink from './Components/Photo/PhotoLink/PhotoLink';
import Profile from './Components/User/UserProfile/UserProfile';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <GlobalStyle />
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <ProtectedRoute path="/conta/*" element={<User />} />
              <Route path="/foto/:id" element={<PhotoLink />} />
              <Route path="/perfil/:user" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
