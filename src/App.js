import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router';

import ChatFeed from "./components/ChatFeed.jsx";


function App() {
  return (
    <>
      {/* create routes */}
      {/* one for home and one for dynamic routes */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ChatFeed />}/> 
          <Route exact path="/:id" element={<><h1>Dynamic</h1></>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
