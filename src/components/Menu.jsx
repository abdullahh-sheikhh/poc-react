import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    function hamburger() {
        if (showMenu === true) {
            return (
                <nav className=' transition-all ease-in-out mt-12 z-10 fixed top-0 w-full flex flex-col bg-black text-white p-4 mx-auto gap-8 justify-center items-center'>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                </nav>
            );
        }
    }

    function horizontal() {
        if (showMenu === false) {
            return (
                <div className='mx-auto gap-8 justify-center items-center hidden sm:flex'>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                </div>
            );
        }
    }

    return (
        <div>
            <nav className='fixed top-0 w-full flex bg-black text-white p-4'>
                {horizontal()}
                <a className='ml-auto my-auto cursor-pointer'>
                    <IoMenu
                        onClick={() => {
                            setShowMenu(!showMenu);
                        }}
                    />
                </a>
            </nav>
            {hamburger()}
        </div>
    );
}

export default Menu;
