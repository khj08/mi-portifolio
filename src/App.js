import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import {tsParticles} from 'tsparticles';
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
    <tsParticles 
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 0,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape:{
          type: "start",
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
