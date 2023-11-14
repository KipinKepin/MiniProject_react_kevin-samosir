import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './components/Login';
import About from './pages/About';
import Users from './pages/Users';
import Generate from './pages/Generate';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Convert from './pages/Convert';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/:id' element={<EditUser />} />
          <Route path='/convert' element={<Convert />} />
          <Route path='/generate' element={<Generate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
