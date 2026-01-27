import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import Newsletter from "../components/Newsletter";
import blogData from "../data/blogs";
import { Categories } from "../components/Categories";
import SelectedArticles from "../components/SelectedArticles";
// import Newsletter from "../components/Newsletter";


function Home() {
    // استخراج posts من blogData
    const posts = blogData && blogData.posts ? blogData.posts : [];

    return (
        <>
            <SelectedArticles posts={posts} />
            <Categories />
            <LatestPosts posts={posts} />
            <Newsletter />
        </>
    );
}

export default Home;