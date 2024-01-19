import img1 from '../../../assets/images/services/service-1.png';
import img2 from '../../../assets/images/services/service-2.png';
import img3 from '../../../assets/images/services/service-3.png';
import img4 from '../../../assets/images/services/service-4.png';
const ProvidedServices = () => {
    return (
        <div className='my-12 space-y-8'>
            <div className="text-center mb-12">
                <p className="text-custom">Our All</p>
                <h2 className="text-3xl md:text-4xl font-bold">Provided Services</h2>
            </div>
            <div className='grid md:grid-cols-4 justify-items-center gap-y-6'>
                <div className="card w-80">
                    <img src={img1} alt="Shoes" className='w-60 mx-auto' />
                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl font-bold">Car Rental Services</h2>
                        <p className='text-custom'>100+ Listing</p>
                    </div>
                </div>
                <div className="card w-80 ">

                    <img src={img2} alt="Shoes" className='w-60 mx-auto' />

                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl font-bold">Hotel Booking</h2>
                        <p className='text-custom'>65+ Listing</p>
                    </div>
                </div>
                <div className="card w-80">

                    <img src={img3} alt="Shoes" className='w-60 mx-auto' />

                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl font-bold">Restaurent</h2>
                        <p className='text-custom'>90+ Listing</p>
                    </div>
                </div>
                <div className="card w-80">

                    <img src={img4} alt="Shoes" className='w-60 mx-auto' />

                    <div className="card-body items-center text-center">
                        <h2 className="text-2xl font-bold">Club & Bar</h2>
                        <p className='text-custom'>45+ Listing</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProvidedServices;