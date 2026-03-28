import { useState } from "react";
import { FaSearch, FaTh, FaList } from "react-icons/fa";
import "./BlogsFilterBar.css";

const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات"
];

function BlogsFilterBar({ onCategoryChange, onSearch, viewMode = 'grid', onViewChange }) {
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

                    {/* View Toggle */}
                    <div className="view-toggle d-flex gap-2">
                        <button
                            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => onViewChange('grid')}
                            title="شبكة"
                        >
                            <FaTh />
                        </button>
                        <button
                            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                            onClick={() => onViewChange('list')}
                            title="قائمة"
                        >
                            <FaList />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BlogsFilterBar;