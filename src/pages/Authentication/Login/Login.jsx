import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [error, setError] = useState('');
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    navigate(from, { replace: true })
                }
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left py-4 md:w-1/2 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-custom">Login Now!</h1>
                    <h4 className="font-bold my-4">Welcome to Globe Tour!</h4>
                    <p className="pr-6 md:text-lg text-[#758697]">
                        Embark on a journey of discovery with Globe Tour. Login now to unlock a world of travel experiences, breathtaking landscapes, and cultural encounters. Whether you are a seasoned explorer or a first-time traveler, Globe Tour is your gateway to unforgettable moments.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label>
                                <p className="text-error">{error}</p>
                            </label>
                            <label className="label">
                                <p className="label-text-alt">
                                    Do not have any account? <Link to='/signup' className=" link link-hover">Signup</Link>
                                </p>

                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <input className="btn btn-custom-md" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;