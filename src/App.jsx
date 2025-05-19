import {Routes, Route, Link} from 'react-router-dom';

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from './pages/About.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Fashion from './pages/Blog/Fashion.jsx';
import Embroidery from './pages/Blog/Embroidery.jsx';
import Crochet from './pages/Blog/Crochet.jsx';
import PostDetail from './pages/Blog/PostDetail.jsx';
import Contact from './pages/Contact.jsx';

export default function App(){
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/fashion" element={<Fashion/>} />
          <Route path="/blog/embroidery" element={<Embroidery/>} />
          <Route path="/blog/crochet" element={<Crochet/>} />
          <Route path="/blog/:id" element={<PostDetail/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}