import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://globe-tour-server-raisul227.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="py-16 space-y-16">
            <div>
                <p className="text-custom text-center">Services</p>
                <h2 className="text-center text-4xl font-bold">Features Tours</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mx-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center">
                <Link to='/services'><button className=" btn btn-outline flex  items-center text-custom hover:bg-custom hover:border-custom">View All Tours<IoArrowForwardCircleOutline className="ml-2" /></button></Link>
            </div>
        </div>
    );
};

export default Services;