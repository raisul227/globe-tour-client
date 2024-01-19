import about from '../../assets/images/About/about.jpg';
const About = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                            <p className="text-center font-bold text-custom md:text-left">Who we are</p>

                            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Operational since 2008</h1>

                            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                Welcome to the captivating history of Globe Tour, a visionary travel platform that has been redefining the way people explore the world since its inception
                            </p>
                            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                Globe Tour was founded in 2008 by a passionate team of avid travelers who shared a common dream – to make global exploration accessible to everyone. Fueled by a love for adventure and a belief in the transformative power of travel, the founders set out to create a platform that would inspire, connect, and empower individuals to embark on extraordinary journeys.
                            </p>
                        </div>
                        <div>
                            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                <img src={about} loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;