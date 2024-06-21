import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function RoutLayout() {
    return <>
        <Header/>
        <div className="content">
            <Outlet/>
        </div>
        <Footer/>
    </>
}