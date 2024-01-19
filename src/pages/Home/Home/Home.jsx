import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import ProvidedServices from "../ProvidedServices/ProvidedServices";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <Services></Services>
            <ProvidedServices></ProvidedServices>
        </div>
    );
};

export default Home;