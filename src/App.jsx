import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Route below to home since there isn't a page provided */}
        <Route path="models" element={<Home />} />
        <Route path="pricing" element={<Home />} />
        <Route path="about-us" element={<Home />} />
        <Route path="contact-us" element={<Home />} />
        <Route path="custom-models" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
