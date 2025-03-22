import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="Models" element={<About />} />
        <Route path="Pricing" element={<About />} />
        <Route path="About Us" element={<About />} />
        <Route path="Contact Us" element={<About />} />
        <Route path="Custom Models" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
