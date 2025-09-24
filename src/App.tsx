// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";

// // import HomePage from "./pages/homepage";
// import LoginPage from "./pages/loginpage";
// // import RegisterPage from "./pages/register";
// import AboutPage from "./pages/about";
// import ServicesPage from "./pages/services";
// import ContactsPage from "./pages/contacts";
// import Register from "./pages/register";
// import HomePage from "./pages/homepage";
// import Topwear from "./pages/Topwears";
// import Lowerwear from "./pages/lowerwears";
// import Footwear from "./pages/footwear";
// <Route path="/" element={<HomePage />} />






// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return localStorage.getItem("auth") === "true";
//   });
//   const [isRegistered] = useState(() => {
//     return localStorage.getItem("registered") === "true";
//   });
//   const designMode = true; // set to false later

//   return (
//     <Router>
//       <Routes>
//         {designMode ? (
//           <>
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/contacts" element={<ContactsPage />} />
//             <Route path="/Topwear" element={<Topwear />} />
//             <Route path="/lowerwear" element={<Lowerwear />} />
//             <Route path="/footwear" element={<Footwear />} />
//           </>
//         ) : (
//           <>
//             <Route
//               path="/"
//               element={
//                 isAuthenticated ? (
//                   <HomePage />
//                 ) : isRegistered ? (
//                   <Navigate to="/login" replace />
//                 ) : (
//                   <Navigate to="/register" replace />
//                 )
//               }
//             />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/Topwear" element={<Topwear />} />
//             <Route path="/lowerwear" element={<Lowerwear />} />
//             <Route path="/footwear" element={<Footwear />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/contacts" element={<ContactsPage />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );

// }

// export default App;




import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import Footer from "./Component/Footer";
import Register from "./pages/register";
import Login from "./pages/loginpage";
import Topwear from "./pages/Topwears";
import Lowerwear from "./pages/lowerwears";
import Footwear from "./pages/footwear";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contacts";




function App() {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Topwears" element={<Topwear />} />
        <Route path="/lowerwears" element={<Lowerwear />} />
        <Route path="/footwears" element={<Footwear />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;


