import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddBlog from './pages/AddBlog';
import Homepage from './pages/Homepage';
import MyBlogs from './pages/MyBlogs';
import ShowBlog from './pages/ShowBlog';
import Login from './pages/login';
import Register from './pages/Register';
import EditBlog from './pages/EditBlog';
import Profile from './pages/Profile';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Layout />
      <Routes>
        {/* Wrap all routes inside Layout */}
        <Route>
          <Route path='/' element={<Homepage />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="myBlogs" element={<MyBlogs />} />
          <Route path="/blog/:id" element={<ShowBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/blog/edit/:id" element={<EditBlog />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
