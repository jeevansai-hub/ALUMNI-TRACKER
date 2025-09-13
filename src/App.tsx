import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import AlumniDirectory from './pages/AlumniDirectory';
import Profile from './pages/Profile';
import WallOfFame from './pages/WallOfFame';
import Events from './pages/Events';
import Mentorship from './pages/Mentorship';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/directory" element={<AlumniDirectory />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/wall-of-fame" element={<WallOfFame />} />
              <Route path="/events" element={<Events />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
