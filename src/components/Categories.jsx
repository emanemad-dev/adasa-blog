import { SlidersHorizontal, Image, User, Sun, Settings } from "lucide-react";
import { useEffect, useRef } from "react";
import "./Categories.css";

const categories = [
    { id: 1, title: "تقنيات", count: 5, icon: SlidersHorizontal },
    { id: 2, title: "مناظر طبيعية", count: 2, icon: Image },
    { id: 3, title: "بورتريه", count: 3, icon: User },
    { id: 4, title: "إضاءة", count: 3, icon: Sun },
    { id: 5, title: "معدات", count: 3, icon: Settings },
];

export function Categories({ onCategorySelect }) {
    const cardsRef = useRef([]);

    // Fade-in on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });
    }, []);

    return (
        <section className="categories-section py-5">
            <div className="container text-center mb-5 ">
                <span className="hero-badge mb-3 d-inline-flex align-items-center gap-2">
                    <span className="loading-dots">
                        <span></span>
                        <span></span>
                    </span>
                    التصنيفات
                </span>
                <h2 className="fw-bold mb-2 hero-title">استكشف حسب الموضوع</h2>
                <p style={{ color: "#bbbbbb" }}>اعثر على محتوى مصمم حسب اهتماماتك</p>
            </div>

            <div className="container">
                <div className="d-flex flex-row flex-wrap flex-lg-nowrap justify-content-between">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <div key={cat.id} className="flex-grow-1 mx-2">
                                <div
                                    className="category-card text-center h-100"
                                    onClick={() => onCategorySelect(cat.title)}
                                    role="button"
                                    aria-label={cat.title}
                                    tabIndex={0}
                                    ref={(el) => (cardsRef.current[idx] = el)}
                                >
                                    <div className="category-icon-wrapper">
                                        <Icon size={28} />
                                    </div>
                                    <h5>{cat.title}</h5>
                                    <p className="category-count mb-0">{cat.count} مقالة</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


        </section>
    );
}
