import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MessagePage from './pages/MessagePage';
import GalleryPage from './pages/GalleryPage';
import CreatePage from './pages/CreatePage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Routes inside the Navbar layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/crear/:templateId" element={<CreatePage />} />
        </Route>

        {/* Message viewer is standalone, no navbar */}
        <Route path="/m/:slug" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
