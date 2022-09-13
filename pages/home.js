import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <div
                className="text-white">
                {/* intro */}
                <section
                    className="intro px-36 py-20">
                    <div
                        className="text-secondary-600 title font-sffont pb-8">
                        Hi, my name is
                    </div>
                    <h2
                        className="text-7xl font-calibre font-semibold leading-tight">
                            <span
                                className="text-purple-main">Muhamad Syahrul Ramadhan</span> <br/>
                            <span
                                className="text-gray-main">I build things for the web.</span>
                        </h2>
                    <h2
                        className="text-7xl font-calibre font-semibold "></h2>
                </section>
            </div>
        </Layout>
    )
}