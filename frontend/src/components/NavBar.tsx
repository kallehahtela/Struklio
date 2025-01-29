// Importing Icons
import Hamburger from '../assets/icons/hamburger.svg'

const NavBar = () => {
    return (
        <div className='relative flex w-full'>
            <div className='flex flex-row w-full items-center justify-between px-10 py-4 border-b border-gray-300'>
                <a href="#">
                    <h3 
                        className='text-2xl font-bold'
                    >
                        Struklio
                    </h3>
                </a>

                <a href="#">
                    <img 
                        className='w-5'
                        src={Hamburger} 
                        alt="Hamburger menu" 
                    />
                </a>
            </div>
        </div>
    );
}

export default NavBar