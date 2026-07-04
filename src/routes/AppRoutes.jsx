import { Routes, Route } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CreativeSpaces from "../pages/CreativeSpaces/CreativeSpaces";
import Events from "../pages/Events/Events";
import Gallery from "../pages/Gallery/Gallery";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
    return (
        <Routes>

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/spaces" element={<CreativeSpaces />} />

                <Route path="/events" element={<Events />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/booking" element={<Booking />} />

                <Route path="/contact" element={<Contact />} />

            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default AppRoutes;