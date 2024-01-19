import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }
    const navLinks = <>
        <li><Link>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/bookings'>Bookings</Link></li>
        {
            !user?.email && <li><Link to='/login'>login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link><img src={logo} className="w-10 ml-4" alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <> <h6 className="mr-4 hidden md:block">{user?.displayName}</h6>
                        <button onClick={handleLogOut} className="btn bg-custom text-base-200 uppercase hover:bg-error">Logout</button></> : <Link to='/signup' className="btn bg-custom text-base-200 uppercase hover:bg-error">Signup</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;