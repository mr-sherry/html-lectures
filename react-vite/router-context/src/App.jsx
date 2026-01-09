import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogdetails/:id' element={<BlogDetails />} />
      <Route path='/blogs/blogdetails/:id' element={<BlogDetails />} />
      {/* <Route path='/blogs'>
        <Route path='blogdetails' element={<BlogDetails />} />
      </Route> */}
    </Routes>
  );
}

export default App;
