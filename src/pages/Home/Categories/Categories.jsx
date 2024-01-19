import { FaCity } from "react-icons/fa";
import { GiColiseum } from "react-icons/gi";
import { GiHiking } from "react-icons/gi";
import { TbSunset2 } from "react-icons/tb";
import { GiSailboat } from "react-icons/gi";


const Categories = () => {
    return (
        <div className="py-6 my-12 space-y-14 md:space-y-20">
            <div className="text-center">
                <p className="text-custom">Tour Type</p>
                <h2 className="text-3xl md:text-4xl font-bold">Tour Categories</h2>
            </div>
            <div className="w-full grid md:grid-cols-5 gap-y-6 justify-items-center">
                <div className="card w-56 bg-[#f9f9f9] text-center py-6 border border-custom">
                    <div>
                        <button className="btn btn-circle btn-outline outline-custom text-custom text-3xl w-16 h-16 hover:bg-custom hover:text-white hover:border-custom">
                            <FaCity />
                        </button>
                    </div>
                    <div className="card-body py-3 items-center text-center">
                        <h3 className="text-2xl font-bold">City Tours</h3>
                        <h5 className="text-slate-200">24+ Tour</h5>
                    </div>
                </div>
                <div className="card w-56 bg-[#f9f9f9] text-center py-6 border border-custom">
                    <div>
                        <button className="btn btn-circle btn-outline outline-custom text-custom text-3xl w-16 h-16 hover:bg-custom hover:text-white hover:border-custom">
                            <GiColiseum />
                        </button>
                    </div>
                    <div className="card-body py-3 items-center text-center">
                        <h3 className="text-2xl font-bold">Historical</h3>
                        <h5 className="text-slate-200">44+ Tour</h5>
                    </div>
                </div>
                <div className="card w-56 bg-[#f9f9f9] text-center py-6 border border-custom">
                    <div>
                        <button className="btn btn-circle btn-outline outline-custom text-custom text-3xl w-16 h-16 hover:bg-custom hover:text-white hover:border-custom">
                            <GiHiking />
                        </button>
                    </div>
                    <div className="card-body py-3 items-center text-center">
                        <h3 className="text-2xl font-bold">Hiking</h3>
                        <h5 className="text-slate-200">10+ Tour</h5>
                    </div>
                </div>
                <div className="card w-56 bg-[#f9f9f9] text-center py-6 border border-custom">
                    <div>
                        <button className="btn btn-circle btn-outline outline-custom text-custom text-3xl w-16 h-16 hover:bg-custom hover:text-white hover:border-custom">
                            <TbSunset2 />
                        </button>
                    </div>
                    <div className="card-body py-3 items-center text-center">
                        <h3 className="text-2xl font-bold">Sea Beaches</h3>
                        <h5 className="text-slate-200">24+ Tour</h5>
                    </div>
                </div>
                <div className="card w-56 bg-[#f9f9f9] text-center py-6 border border-custom">
                    <div>
                        <button className="btn btn-circle btn-outline outline-custom text-custom text-3xl w-16 h-16 hover:bg-custom hover:text-white hover:border-custom">
                            <GiSailboat />
                        </button>
                    </div>
                    <div className="card-body py-3 items-center text-center">
                        <h3 className="text-2xl font-bold">Boat</h3>
                        <h5 className="text-slate-200">15+ Tour</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;