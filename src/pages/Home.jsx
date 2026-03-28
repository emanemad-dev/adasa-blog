import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import Newsletter from "../components/Newsletter";
import blogData from "../data/blogs";
import { useNavigate } from "react-router-dom";
import { Categories } from "../components/Categories";
import SelectedArticles from "../components/SelectedArticles";
// import Newsletter from "../components/Newsletter";


function Home() {
    const navigate = useNavigate();
    const posts = blogData && blogData.posts ? blogData.posts : [];

    const handleCategoryClick = (category) => {
        navigate(`/blogs?category=${encodeURIComponent(category)}`);
    };


    return (
        <>
            <SelectedArticles posts={posts} />
            <Categories onCategorySelect={handleCategoryClick} />
            <LatestPosts posts={posts.slice(0, 6)} />
            <Newsletter />
        </>
    );
}

export default Home;