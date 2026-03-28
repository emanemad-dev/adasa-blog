import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import LatestPosts from "../components/LatestPosts";
import BlogsFilterBar from "../components/BlogsFilterBar";
import blogData from "../data/blogs";

function Blogs() {
    const posts = blogData?.posts || [];

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const categoryFromQuery = searchParams.get("category") || "جميع المقالات";
    const [activeCategory, setActiveCategory] = useState(categoryFromQuery);
    const [searchText, setSearchText] = useState("");
    const [viewMode, setViewMode] = useState("grid");

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        if (category !== "جميع المقالات") {
            navigate(`/blogs?category=${encodeURIComponent(category)}`);
        } else {
            navigate("/blogs");
        }
    };

    useEffect(() => {
        setActiveCategory(categoryFromQuery);
    }, [categoryFromQuery]);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const handleViewChange = (mode) => {
        setViewMode(mode);
    };

    // فلترة + بحث
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchCategory =
                activeCategory === "جميع المقالات" ||
                post.category === activeCategory;

            const matchSearch =
                post.title?.toLowerCase().includes(searchText.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchText.toLowerCase());

            return matchCategory && matchSearch;
        });
    }, [posts, activeCategory, searchText]);

    return (
        <>
            <BlogsFilterBar
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                onSearch={handleSearch}
                onViewChange={handleViewChange}
                viewMode={viewMode}
            />

            <LatestPosts posts={filteredPosts} viewMode={viewMode} />
        </>
    );
}

export default Blogs;