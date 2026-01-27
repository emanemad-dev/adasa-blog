import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import Newsletter from "../components/Newsletter";
import blogData from "../data/blogs";
import { Categories } from "../components/Categories";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
// import Newsletter from "../components/Newsletter";
import ContactCTA from "../components/ContactCTA";
import OurValues from "../components/OurValues";
function About() {
    return (
        <>
           
            <OurValues />
            <OurTeam />
            <ContactCTA />
            
        </>
    );
}

export default About;
