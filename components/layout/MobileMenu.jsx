
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className='mobile-header-wrapper-inner'>
          <div className='mobile-header-logo'>
            <Link
              className='d-flex main-logo align-items-center d-inline-flex'
              to='/'
            >
              <img src='/assets/imgs/footer-1/logo.svg' alt='infinia' />
              <span className='fs-4 ms-2 text-dark'>khizar.dev</span>
            </Link>
            <div
              className={`burger-icon burger-icon-white border rounded-3 ${
                isMobileMenu ? "burger-close" : ""
              }`}
              onClick={handleMobileMenu}
            >
              <span className='burger-icon-top' />
              <span className='burger-icon-mid' />
              <span className='burger-icon-bottom' />
            </div>
          </div>
          <div className='mobile-header-content-area'>
            <PerfectScrollbar className='perfect-scroll'>
              <div className='mobile-menu-wrap mobile-header-border'>
                <nav>
                  <ul className='mobile-menu font-heading ps-0'>
                    <li className='nav-item'>
                      <Link className='nav-link active' to='/'>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/services'>
                        Services
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/work'>
                        Portfolio
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/pricing'>
                        Pricing
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/blog-list'>
                        Blog
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/#contact'>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </>
  );
}
