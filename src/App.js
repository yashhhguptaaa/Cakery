import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import "./App.css";

const CakeDirectory = lazy(() => import("./pages/CakeDirectory"));
const AdminControl = lazy(() => import("./pages/AdminControl"));
const CakePage = lazy(() => import("./pages/CakePage"));

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Suspense
          fallback={
            <span>
              <Loader />
            </span>
          }
        >
          <Routes>
            <Route path="/" element={<CakeDirectory />} />
            <Route path="/admin" element={<AdminControl />} />
            <Route path="/cake/:cakeId" element={<CakePage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
