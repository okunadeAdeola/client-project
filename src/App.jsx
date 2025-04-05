import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Pages/home/index'
import Merchant from './Pages/grabbl-merchants/index'
import MerchantForm from './Pages/grabbl-merchant-form/index'
import Blog from './Pages/blogs/index'
import BlogPost from './Pages/blog-post/index'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/merchant" element={<Merchant /> } />
          <Route path="/merchant_form" element={<MerchantForm /> } />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/blog_post" element={<BlogPost /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
