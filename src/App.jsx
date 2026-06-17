import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import StudentHub from "./pages/StudentHub";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function Layout() {
  const location = useLocation();

  const hideLayout = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
  <Route path="/" element={<Login />} />

  <Route
    path="/home"
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />

  <Route
    path="/about"
    element={
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    }
  />

  <Route
    path="/programs"
    element={
      <ProtectedRoute>
        <Programs />
      </ProtectedRoute>
    }
  />

  <Route
    path="/studenthub"
    element={
      <ProtectedRoute>
        <StudentHub />
      </ProtectedRoute>
    }
  />

  <Route
    path="/gallery"
    element={
      <ProtectedRoute>
        <Gallery />
      </ProtectedRoute>
    }
  />

  <Route
    path="/contact"
    element={
      <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
    }
  />
</Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Kuchipudi-Dance-Academy">
      <Layout />
    </BrowserRouter>
  );
}

export default App;