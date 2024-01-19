import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    updateUser({
                        displayName: name
                    })
                        .then(() => { })
                        .catch(error => setError(error.message))
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Signup Succesful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })
            .catch(error => setError(error.message));

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left py-4 md:w-1/2 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-custom">Signup Now!</h1>
                    <h4 className="font-bold my-4">Welcome to Globe Tour!</h4>
                    <p className="pr-6 md:text-lg text-[#758697]">
                        Embark on a journey of discovery with Globe Tour. Sign up now to unlock a world of travel experiences, breathtaking landscapes, and cultural encounters. Whether you are a seasoned explorer or a first-time traveler, Globe Tour is your gateway to unforgettable moments.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <form className="card-body" onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
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
                                    Already Have an account? <Link to='/login' className=" link link-hover">Login</Link>
                                </p>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-custom-md" value="Signup" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;