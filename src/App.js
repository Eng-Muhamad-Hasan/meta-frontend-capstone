import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import ReservationsPage from './components/ReservationsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
