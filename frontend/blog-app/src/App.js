import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddBlog from './pages/AddBlog';
import Homepage from './pages/Homepage';
import MyBlogs from './pages/MyBlogs';
import { Fragment } from 'react';
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
