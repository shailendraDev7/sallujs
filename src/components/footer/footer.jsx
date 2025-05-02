import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 pb-10 shadow-inverted-white-lg mt-48 pt-12">
            <div>
                {/* <h2 className="text-orange-500 text-3xl font-bold py-4">Sallu JS</h2> */}
                <div className='flex flex-col space-y-8 items-start'>
                    <p className="text-orange-500 text-2xl font-bold">Find Us:</p>
                    <p>Gongabu, Kathmandu</p>
                    <p className="text-orange-500 text-2xl font-bold">Call Us:</p>
                    <p className="text-left"><a href="tel:+9779862004936">+977 9862004936</a></p>
                    <p className="text-orange-500 text-2xl font-bold">Email Us:</p>                    
                    <p><a href="mailto:support@solutiongate.com.np" className="text-orange-500 lowercase pt-0">support@solutiongate.com.np</a></p>
                </div>
            </div>
            <div>
                <h2 className="text-orange-500 text-3xl font-bold px-5 pb-5">Company</h2>
                <ul className='flex flex-col space-y-4 '>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Newsletters</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-orange-500 text-3xl font-bold px-5 pb-5">Services</h2>
                <ul className='flex flex-col space-y-4 items-start'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Publications</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Networks</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-orange-500 text-3xl font-bold px-5 pb-5">Connect With Us</h2>
                <ul className='flex flex-col space-y-4 items-start'>
                    <li><a href="https://facebook.com/shailendra.shrestha1" target="_blank" className="flex items-center">
                       <FaFacebook/> &nbsp; Facebook
                    </a></li>
                    <li><a href="https://www.instagram.com/shailendra.stha" target="_blank" className="flex items-center">
                       <FaInstagram/> &nbsp; Instagram
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/shailendra-shrestha-9154b91a6" target="_blank" className="flex items-center">
                    <FaLinkedin/> &nbsp; LinkedIn
                    </a></li>
                    <li><a href="https://x.com/Shailen25213921" target="_blank" className="flex items-center">
                    <FaTwitter/> &nbsp; Twitter
                    </a></li>
                    <li><a href="https://x.com/Shailen25213921" target="_blank" className="flex items-center">
                    <FaGoogle/> &nbsp; Google
                    </a></li>
                    <li><a href="https://x.com/Shailen25213921" target="_blank" className="flex items-center">
                    <FaYoutube/> &nbsp; Youtube
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
