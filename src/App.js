import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


// Import your components here
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import About from './components/About';
// import NotFound from './components/NotFound';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7900D2',
      },
      secondary: {
        main: '#FFF',
      },
    },
  });

    useEffect(() => {
      AOS.init({
        duration : 2000
      });
    }, []);
  
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
    {/* <Route path="/contact" element={<Form />} /> */}

    {/*   <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      */}
    </Routes>
    <Footer />
  </Router>
  </ThemeProvider>
  );
}

export default App;