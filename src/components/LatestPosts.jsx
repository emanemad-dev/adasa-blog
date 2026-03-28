import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    FaArrowLeft,
    FaRegClock,
    FaChevronRight,
    FaChevronLeft,
} from "react-icons/fa";
import "./LatestPosts.css";

/* ---------------------- */
/* Helper Functions       */
/* ---------------------- */
const formatDateArabic = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    const arabicDay = day
        .toString()
        .split("")
        .map((d) => arabicNumbers[parseInt(d)])
        .join("");
    const arabicYear = year
        .toString()
        .split("")
        .map((y) => arabicNumbers[parseInt(y)])
        .join("");

    const arabicMonths = [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
    ];

    return `${arabicDay} ${arabicMonths[month]} ${arabicYear}`;
};

const extractReadTimeMinutes = (readTimeText) => {
    if (!readTimeText) return null;
    const match = readTimeText.match(/(\d+)/);
    if (!match) return null;
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return arabicNumbers[parseInt(match[1])] || null;
};

/* ---------------------- */
/* Pagination Component   */
/* ---------------------- */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(1, currentPage - 2);
            let endPage = startPage + maxVisible - 1;

            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = Math.max(1, endPage - maxVisible + 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination-container" dir="rtl">
            <div className="page-info">
                صفحة <span className="current-page">{currentPage}</span> من{" "}
                <span className="total-pages">{totalPages}</span>
            </div>

            <div className="pagination">
                <button
                    className="pagination-btn arrow-btn next-btn"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    title="التالي"
                >
                    <FaChevronRight />
                </button>

                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        className={`pagination-btn ${page === currentPage ? "active" : ""}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className="pagination-btn arrow-btn prev-btn"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    title="السابق"
                >
                    <FaChevronLeft />
                </button>
            </div>
        </div>
    );
};

/* ---------------------- */
/* Post Card Component    */
/* ---------------------- */
const PostCard = ({ post }) => (
    <Link to={`/blog/${post.slug}`} className="post-card-link" key={post.id}>
        <article className="post-card">
            <div
                className="post-image"
                style={{
                    backgroundImage: post.image
                        ? `url(${post.image})`
                        : `url('/placeholder.jpg')`,
                }}
            />

            <div className="post-content-wrapper">
                {post.category && (
                    <span className="post-category-badge">{post.category}</span>
                )}

                {(post.readTime || post.date) && (
                    <div className="post-card-header">
                        <div className="post-time-date">
                            {post.readTime && (
                                <span className="post-read-time">
                                    <FaRegClock className="read-time-icon" />
                                    <span style={{ margin: "0 6px" }}>
                                        {extractReadTimeMinutes(post.readTime)} دقائق للقراءة
                                    </span>
                                </span>
                            )}
                            {post.readTime && post.date && (
                                <span className="post-separator">•</span>
                            )}
                            {post.date && (
                                <span className="post-date">{formatDateArabic(post.date)}</span>
                            )}
                        </div>
                    </div>
                )}

                <div className="post-card-content">
                    {post.title && (
                        <h3 className="post-title">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                    )}
                    {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
                </div>

                {post.author && (
                    <Link to={`/blog/${post.slug}`} className="post-author-link">
                        <div className="post-author">
                            <div className="author-info">
                                {post.author.avatar && (
                                    <div
                                        className="author-avatar"
                                        style={{
                                            backgroundImage: `url(${post.author.avatar})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />
                                )}
                                <div className="author-details">
                                    {post.author.name && (
                                        <h4 className="author-name">{post.author.name}</h4>
                                    )}
                                    {post.author.role && (
                                        <p className="author-role">{post.author.role}</p>
                                    )}
                                </div>
                                <span className="author-arrow">&gt;</span>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </article>
    </Link>
);

/* ---------------------- */
/* Main Component         */
/* ---------------------- */
const LatestPosts = ({ posts = [], viewMode = "grid" }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isBlogsPage = location.pathname === "/blogs";

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = isBlogsPage ? 9 : 3;

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section className="latest-posts-section" dir="rtl">
            <div className="container">
                {!isBlogsPage && <HomeHeader navigate={navigate} />}

                {isBlogsPage && <BlogsHeader postsCount={posts.length} />}

                {currentPosts.length === 0 ? (
                    <div className="no-posts-message text-center py-10">
                        <h3>لا توجد مقالات لهذه الفئة</h3>
                        <p>جرب فئة أخرى أو ابحث بكلمات مختلفة</p>
                    </div>
                ) : (
                    <div
                        className={`posts-grid ${isBlogsPage ? "blogs-grid-layout" : ""} ${viewMode === "list" ? "list-view" : ""}`}
                    >
                        {currentPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                )}

                {isBlogsPage && totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </section>
    );
};

/* ---------------------- */
/* Sub Components         */
/* ---------------------- */
const HomeHeader = ({ navigate }) => (
    <div className="section-header text-end">
        <span className="hero-badge">
            <span className="loading-dots">
                <span></span>
                <span></span>
            </span>
            الاحدث
        </span>
        <h1 className="section-title">أحدث المقالات</h1>

        <div className="subtitle-row">
            <p className="section-subtitle">محتوى جديد طازج من المطبعة</p>
            <div className="arrow-buttons">
                <button className="arrow-btn" onClick={() => navigate("/blogs")}>
                    عرض جميع المقالات
                    <FaArrowLeft />
                </button>
            </div>
        </div>
    </div>
);

const BlogsHeader = ({ postsCount }) => (
    <div className="blogs-page-header">
        <div className="blogs-meta">
            <span className="total-posts-count">عرض {postsCount} مقالة</span>
        </div>
    </div>
);

export default LatestPosts;
