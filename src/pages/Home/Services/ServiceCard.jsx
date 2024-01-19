import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, description, img, price, rating, time, title } = service;
    return (
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
                    <Link to={`/checkout/${_id}`}><button className=" text-lg flex  items-center text-custom hover:tracking-wide">Book Now <IoArrowForwardCircleOutline className="ml-2" /></button></Link>
                    <button className="flex text-lg  items-center hover:text-custom hover:tracking-wide transition-all duration-75">Tour Details<IoArrowForwardCircleOutline className="ml-2" /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;