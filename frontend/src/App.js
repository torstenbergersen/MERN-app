import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import './App.css';

import HomePage from './pages/HomePage.js'
import TopicsPage from './pages/TopicsPage.js'
import TravelsPage from './pages/TravelsPage';
import ContactPage from './pages/ContactPage.js';


import EditTripPageTable from './pages/EditTripPageTable';
import AddTripPageTable from './pages/AddTripPageTable';


function App() {

  const [trip, setTripToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Torsten <img src="./android-chrome-192x192.png" alt="Icon of an abstract mountain."/> Bergersen</h1>
            <p>Travel Log Portfolio Project</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="triplist" element={<TravelsPage setTrip={setTripToEdit}/>} />
                    <Route path="topics" element={<TopicsPage/>} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/create" element={<AddTripPageTable />} /> 
                    <Route path="/update" element={<EditTripPageTable tripToEdit={trip} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Torsten Bergersen</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;