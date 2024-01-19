import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/Services/ServiceCard";

const AllServices = () => {
    const allServices = useLoaderData();
    return (
        <div className="py-16 space-y-16">
            <div>
                <p className="text-custom text-center">Services</p>
                <h2 className="text-center text-4xl font-bold">All Tours Package</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mx-6">
                {
                    allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;