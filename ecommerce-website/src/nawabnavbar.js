import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;

}
function Services()
{
    return(
    <div>
    <h1>Services page</h1>
    <nav style={{marginBottom:'20px'}}>
    <Link to ="/Services/car">car</Link> |{" "}
    <Link to ="/Services/bike">bike</Link> |{" "}
    </nav>
    </div>
    );
}

function Navbar() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/Services">Services</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services"element={<Services/>}/>
        <Route path="car"element={<Services/>}/>
        {/* <Route path="bike" element={Services/>}/> */}
        </Routes>
    </BrowserRouter>
    
  );
} 
export default Navbar

