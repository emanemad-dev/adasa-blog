import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./BlogsFilterBar.css";

const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات"
];

function BlogsFilterBar({ onCategoryChange, onSearch }) {
    const [activeCategory, setActiveCategory] = useState("جميع المقالات");
    const [search, setSearch] = useState("");

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        onCategoryChange?.(cat);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch?.(value);
    };

    return (
        <div className="blogs-filter-wrapper">
            <div className="container">
                <div className="blogs-filter-bar d-flex align-items-center justify-content-between flex-wrap gap-4">

                    {/* Search */}
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="ابحث في المقالات..."
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </div>

                    {/* Categories */}
                    <div className="categories d-flex flex-wrap gap-3">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                                onClick={() => handleCategoryClick(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BlogsFilterBar;