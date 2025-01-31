// Import Social media icons
import Facebook from '../src/assets/logos/facebook.svg';
import Instagram from '../src/assets/logos/instagram.svg';
import Tiktok from '../src/assets/logos/tiktok.svg';
import X from '../src/assets/logos/x.svg';
import Linkedin from '../src/assets/logos/linkedin.svg';
import Youtube from '../src/assets/logos/youtube.svg';

const Footer = () => {
    return (
        <div className="relative flex flex-col w-full bg-[#171717] text-white p-2">
            <div className="flex flex-wrap gap-20 justify-center items-center pt-10 pb-10">
                <div>
                    <h3 className="text-lg">Solutions</h3>
                    <ul className="pt-5 text-sm/7">
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Use Cases</a></li>
                        <li><a href="">Templates</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg">Company</h3>
                    <ul className="pt-5 text-sm/7">
                        <li><a href="">Press & Media</a></li>
                        <li><a href="">Patent Notice</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg">Support</h3>
                    <ul className="pt-5 text-sm/7">
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Contact Support</a></li>
                        <li><a href="">Report a Bug</a></li>
                        <li><a href="">Community</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg">Learn</h3>
                    <ul className="pt-5 text-sm/7">
                        <li><a href="">Documentation</a></li>
                        <li><a href="">API Reference</a></li>
                        <li><a href="">Tutorials</a></li>
                        <li><a href="">Guides</a></li>
                    </ul>
                </div>
            </div>

            {/* HR LINE */}
            <div className="relative flex w-full items-center justify-center pb-10">
                <div className="flex w-2/3 outline outline-[#cacaca] " />
            </div>

            {/* Social Media icons */}
            <div className="relative flex w-full justify-center pb-10">
                <div className="flex flex-row items-center gap-5">
                    <a href="">
                        <img 
                            className="w-8"
                            src={Facebook} 
                            alt="" 
                        />
                    </a>
                    <a href="">
                        <img 
                            className="w-8"
                            src={Instagram} 
                            alt="" 
                        />
                    </a>
                    <a href="">
                        <img 
                            className="w-8"
                            src={Tiktok} 
                            alt="" 
                        />
                    </a>
                    <a href="">
                        <img 
                            className="w-8"
                            src={X} 
                            alt="" 
                        />
                    </a>
                    <a href="">
                        <img 
                            className="w-8"
                            src={Linkedin} 
                            alt="" 
                        />
                    </a>
                    <a href="">
                        <img 
                            className="w-8"
                            src={Youtube} 
                            alt="" 
                        />
                    </a>
                </div>
            </div>

            {/* Copy */}
            <div className='flex w-full justify-center'>
                <p className='text-sm'>
                    &copy; 2025 Struklio Oy. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;