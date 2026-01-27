import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import Newsletter from "../components/Newsletter";
import blogData from "../data/blogs";
import { Categories } from "../components/Categories";
import Footer from "../components/Footer";
// import ContactCTA from "../components/latestposts";
// import Newsletter from "../components/Newsletter";
function Blogs() {
    const posts = blogData && blogData.posts ? blogData.posts : [];

    return (
        <>
           <LatestPosts posts={posts} />
        </>
    );
}

export default Blogs;
