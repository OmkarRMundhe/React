import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import "./styles/App.css";
import UserDetails from "./pages/UserDetails";
import NotfoundError from "./pages/NotfoundError";

function App() {
  return (
    <>
      {/*  creating the navbar with the NavLink tag to prevent reload . */}

      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </nav>

      {/* Routes are defined here and mapped to the components. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />

        {/* To pass the URI parameter in the route  */}
        <Route path="/profile/:id" element={<UserDetails />} />

        {/*  When user hits any routes defined other than the above defined routes */}
        <Route path="*" element={<NotfoundError />} />
      </Routes>
      
    </>
  );
}

export default App;
