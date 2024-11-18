import Layout from "./component/Layout";
import { About } from "./pages/About";
import { Techstack } from "./pages/Techstack";
import  Project  from "./pages/Project";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Project />
        <Work />
        <br />
        <br />
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made with 😍 Shiva Rajput &copy; 2024 </h4>
      </div>
      <ScrollToTop smooth/>
    </>
  );
} 

export default App;
