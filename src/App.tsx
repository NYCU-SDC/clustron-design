import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login.tsx";
import Layout from "@/components/AppShell/Layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
