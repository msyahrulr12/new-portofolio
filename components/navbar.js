import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [logo, setLogo] = useState('');
    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        setLogo('https://images.examples.com/wp-content/uploads/2017/03/Free-Electrical-Business-Logo.jpg');

        setNavItems([
            {
                id: "01.",
                name: "Home",
                link: "/home",
                class: ""
            },
            {
                id: "02.",
                name: "About",
                link: "/about",
                class: ""
            },
            {
                id: "03.",
                name: "Experience",
                link: "/experience",
                class: ""
            },
            {
                id: "04.",
                name: "Work",
                link: "/work",
                class: ""
            },
            {
                id: "05.",
                name: "Contact",
                link: "/contact",
                class: ""
            },
            {
                id: "06.",
                name: "Resume",
                link: "/resume",
                class: ""
            },
        ])
    }, []);

    return (
        <nav
            className="flex flex-row justify-between bg-gradient-to-b from-main-300 to-main-200 text-white py-6">
            {/* logo */}
            <div>
                <Image
                    loader={() => logo}
                    src={logo}
                    width="50"
                    height="50"
                />
            </div>

            {/* nav-item */}
            <div
                className="flex gap-8 text-gray-400 my-auto text-sm">
                {
                    navItems.map((item, index) => {
                        return (
                            <Link
                                href={item.link}
                                className={item.class}>
                                    <a
                                        className="flex gap-1">
                                        <span
                                            className="text-secondary-600">{item.id}</span>
                                        <span
                                            className="text-ghost-white">{item.name}</span>
                                    </a>
                                </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}