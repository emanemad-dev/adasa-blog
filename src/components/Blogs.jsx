import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Categories } from "../components/Categories";
import blogData from "../data/blogs";
import PostCard from "../components/PostCard";

export default function Blogs() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const categoryFromQuery = searchParams.get("category") || "";

    const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery);

    const allPosts = blogData.posts || [];
    const filteredPosts = selectedCategory
        ? allPosts.filter((post) => post.category === selectedCategory)
        : allPosts;

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);

        // تغيير الراوت مع query param
        navigate(`/blogs?category=${encodeURIComponent(category)}`);
    };

    return (
        <div>
            <Categories onCategorySelect={handleCategorySelect} />

            <div className="container">
                {filteredPosts.length === 0 ? (
                    <p style={{ color: "#fff" }}>لا توجد مقالات لهذه الفئة</p>
                ) : (
                    <div className="posts-grid">
                        {filteredPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
