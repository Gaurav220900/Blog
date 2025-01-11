import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddBlog from './pages/AddBlog';
import Homepage from './pages/Homepage';
import MyBlogs from './pages/MyBlogs';
import { Fragment } from 'react';
function App() {
  return (<Fragment>
        <Layout />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path='/addBlog' element= {<AddBlog />} />
          <Route path='/myBlogs' element = {<MyBlogs />} />
      </Routes>
      </Fragment>
    
  );
}

export default App;
