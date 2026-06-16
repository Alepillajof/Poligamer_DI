import { BrowserRouter, Route, Routes } from "react-router"
import Landing from "./pages/Landing"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Contact from "./pages/contacts/Contacts"
import Login from "./pages/Login"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App