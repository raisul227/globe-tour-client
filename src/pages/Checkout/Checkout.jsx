import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { description, img, price, rating, time, title } = service || {};

    const handleCheckout = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const orders = {
            customerName: name,
            service: title,
            img,
            price: price,
            date,
            email
        }
        fetch('https://globe-tour-server-raisul227.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Order Placed Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="grid md:grid-cols-2 items-center gap-5 mx-8">
                <div className="mt-8 md:mt-0">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="md:w-1/2 md:h-full">
                            <figure><img src={img} className="md:h-72" alt="Album" /></figure>
                        </div>
                        <div className="px-4 py-3 md:w-1/2 space-y-2">
                            <h2 className="card-title mb-4 text-2xl hover:text-custom">{title}</h2>
                            <div className="flex justify-between">
                                <span className="flex items-center"><IoMdTime className="mr-2" /> {time} days</span>
                                <span className="flex items-center">
                                    {rating} <FaStar className="ml-2 text-custom" />
                                </span>
                            </div>
                            <p>{description}</p>
                            <p className="mb-2">{price}</p>
                            <div className="card-actions justify-between items-center border-t-2 border-t-base-200 pt-4">
                                <Link to='/'><button className="btn btn-sm btn-outline  text-[#ffff] bg-custom border-custom hover:bg-error hover:border-error"><IoArrowBackCircleOutline /> Go Back</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleCheckout}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" defaultValue={user?.email} readOnly name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" defaultValue={price} readOnly name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-custom text-[#ffff] hover:btn-error hover:text-[#ffff]">Checkout</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Checkout;