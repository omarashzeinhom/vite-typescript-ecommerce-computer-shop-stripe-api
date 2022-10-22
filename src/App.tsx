import { Nav } from "./components";
import { Home, Shop, About } from "./pages";
import { Routes, Route } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
      <Nav />
      <MDBContainer fluid>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MDBContainer>
    </>
  );
}
