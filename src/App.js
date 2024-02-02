import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import {Routes , Route } from 'react-router-dom'
import RestaurantsDetails from './components/RestaurantsDetails';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant/:id' element={<RestaurantsDetails />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
