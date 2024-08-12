import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function DefaultLayout() {
    return <>
        <Header/>
        <div className="container">
            <div className="content">
                <Outlet/>
            </div>
        </div>
        <Footer/>
    </>
}