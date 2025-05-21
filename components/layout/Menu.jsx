import { Link, useLocation } from "react-router-dom";

export default function Menu() {
    const location = useLocation();
    const pathname = location.pathname + location.hash;

    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
					<Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className={location.pathname === "/services" ? "nav-link active" : "nav-link"}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/work" className={location.pathname === "/work" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/pricing" className={location.pathname === "/pricing" ? "nav-link active" : "nav-link"}>
                        Pricing
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/blog-list" className={location.pathname === "/blog-list" ? "nav-link active" : "nav-link"}>
                        Blog
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/#contact" className={pathname === "/#contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    );
}
