import { Nav } from "./components";
import { Home,Shop,About } from "./pages";
import {Routes, Route} from "react-router-dom";


export default function App() {

  return (
    <div className="row">
      <div className="col">
      <Nav/>

      </div>
      <br/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </div>
  );
}

