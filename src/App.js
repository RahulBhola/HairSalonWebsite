import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Whatsapp from "./components/whatsapp/Whatsapp";
import Services from "./components/services/Services";
import Brands from "./components/brands/Brands";
import Eshop from "./components/eshop/Eshop";
import MemberShip from "./components/membership/MemberShip";
import Footer from "./components/footer/Footer";
import HairCourses from "./modalComponents/HairCourses";
import MakeUpCourses from "./modalComponents/MakeUpCourses";
import NailCourses from "./modalComponents/NailCourses";
import SkinCourses from "./modalComponents/SkinCourses";
import ContactModal from "./modalComponents/ContactModal";

function App() {
  return (
    <div className="scrollbar scrollbar-thin scrollbar-thumb-gol scrollbar-track-slate-700">
      <ContactModal />
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/home" element={<Header />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/e-shop" element={<Eshop />} />
            <Route path="/membership" element={<MemberShip />} />
            <Route path="/hair_courses" element={<HairCourses />} />
            <Route path="/makeup_courses" element={<MakeUpCourses />} />
            <Route path="/nail_courses" element={<NailCourses />} />
            <Route path="/skin_courses" element={<SkinCourses />} />
            <Route path="*" element={<Header />} />
          </Routes>
          <Footer/>
          <Whatsapp />
      </BrowserRouter>
    </div>
  );
}

export default App;



