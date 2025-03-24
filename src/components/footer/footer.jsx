import React from 'react'

const Footer = () => {
    return (
        <section className='footerSection mt-10'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 shadow-inverted-white-lg rounded-b-lg">
                <div>
                    <h2 className="text-orange-500 text-2xl py-4">Sallu JS</h2>
                    <div className='flex flex-col space-y-8 items-start'>
                        <p>Find Us:<br />Gongabu, Kathmandu</p>
                        <p className="mt-4">Call Us:<br />9862004936</p>
                        <p className="mt-4 ">Email Us:<br />
                            <a href="mailto:support@solutiongate.com.np" className="text-orange-500 p-0">support@solutiongate.com.np</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-orange-500 text-2xl p-4">Company</h2>
                    <ul className='flex flex-col space-y-4'>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Newsletters</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-orange-500 text-2xl p-4">Our Services</h2>
                    <ul className='flex flex-col space-y-4 items-start'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Publications</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Networks</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-orange-500 text-2xl p-2">Connect With Us.</h2>
                    <ul className='flex flex-col space-y-4 items-start'>
                        <li><a href="https://facebook.com/shailendra.shrestha1" target="_blank">
                            <i className="fa-brands fa-facebook"></i> Facebook
                        </a></li>
                        <li><a href="https://www.instagram.com/shailendra.stha" target="_blank">
                            <i className="fa-brands fa-instagram"></i> Instagram
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/shailendra-shrestha-9154b91a6" target="_blank">
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </a></li>
                        <li><a href="https://x.com/Shailen25213921" target="_blank">
                            <i className="fa-brands fa-x"></i> Twitter
                        </a></li>
                        <li><a href="https://x.com/Shailen25213921" target="_blank">
                            <i className="fa-brands fa-google"></i> Google
                        </a></li>
                        <li><a href="https://x.com/Shailen25213921" target="_blank">
                            <i className="fa-brands fa-youtube"></i> Youtube
                        </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
