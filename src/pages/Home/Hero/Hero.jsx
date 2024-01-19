const Hero = () => {
    return (
        <div className="hero min-h-screen bg-heroImg" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content md:text-center text-neutral-content">
                <div className="space-y-4">
                    <p className="text-custom md:text-lg font-semibold">Welcome To Globe Travel</p>
                    <h1 className=" mb-5  text-start text-5xl md:text-6xl font-Poppins font-bold leading-snug">Make Tour & Explore <br />
                        Incredible Destinations</h1>
                    <button className="btn-custom-md btn-custom-sm">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Hero;