import Footer from "./Footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <div
            className="bg-main-500">
            <div className="container mx-auto">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}