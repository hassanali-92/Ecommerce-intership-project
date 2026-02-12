import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import NotFound from './Components/404';
import SecondNav from './Components/SecondNav';

export default function App() {
  const location = useLocation();
  
  // Is list ko apne actual routes ke mutabiq rakhein
  const definedRoutes = ['/']; 

  // Agar route NotFound (*) hai, toh Navbar nahi dikhega
  const isKnownRoute = definedRoutes.includes(location.pathname);

  return (
    <>
      {/* Navbar aur SecondNav sirf tab dikhein jab route sahi ho */}
      {isKnownRoute && (
        <header>
          <Navbar />
          <SecondNav />
        </header>
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agay chal kar aap yahan mazeed routes add karenge */}
          {/* <Route path="/about" element={<About />} /> */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}