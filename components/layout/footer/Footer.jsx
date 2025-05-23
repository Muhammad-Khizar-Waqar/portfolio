import { Link } from "react-router-dom";

export default function Footer() {
    return (
    <>
      <footer>
        <div className='section-footer-2 position-relative'>
          <div className='container position-relative z-1 border-top border-1 pb-2 pt-4'>
            <div className='text-center'>
              <Link to='/' className='d-flex main-logo align-items-center justify-content-center mb-3'>
                <img
                  src='assets/imgs/home-page-2/template/favicon.svg'
                  alt='khizar'
                />
                <span className='fs-4 ms-2'>Khizar.dev</span>
              </Link>
              <div className='d-flex justify-content-center gap-3'>
                {/* <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-facebook-circle-fill fs-18" />
                                </a> */}
                {/* <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-twitter-x-fill fs-18" />
                                </a> */}
                <a href='https://www.linkedin.com/in/muhammad-khizar-waqar' target="_blank" rel="noopener noreferrer">
                  <i className='ri-linkedin-fill fs-18' />
                </a>
                {/* <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-github-fill fs-18" />
                                </a> */}
              </div>
              <div className='navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4'>
                <a href='#about' className='fs-6'> About me </a>
                <a href='#services' className='fs-6'> Services </a>
                <a href='#portfolio' className='fs-6'> Portfolio </a>
                <a href='#blog' className='fs-6'> Blog </a>
                <a href='#contact' className='fs-6'> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
