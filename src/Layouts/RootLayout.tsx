import { Outlet } from "react-router-dom";
import Header from "../Fragments/Header";
import Footer from "../Fragments/Footer";

export default function RoutLayout() {
    return <>
        <Header/>
        <main className="container">
            <Outlet/>
        </main>
        <Footer/>
    </>
}