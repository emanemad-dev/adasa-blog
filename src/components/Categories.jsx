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
            { threshold: 0.2, rootMargin: "50px" }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardsRef.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section className="categories-section py-4 py-md-5">
            <div className="container">
                <div className="text-center mb-4 mb-md-5">
                    <span className="hero-badge mb-3 d-inline-flex align-items-center gap-2">
                        <span className="loading-dots">
                            <span></span>
                            <span></span>
                        </span>
                        التصنيفات
                    </span>
                    <h2 className="fw-bold mb-2 hero-title">استكشف حسب الموضوع</h2>
                    <p className="categories-subtitle">اعثر على محتوى مصمم حسب اهتماماتك</p>
                </div>

                <div className="categories-grid">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={cat.id}
                                className="category-card-wrapper"
                                onClick={() => onCategorySelect(cat.title)}
                                role="button"
                                aria-label={cat.title}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        onCategorySelect(cat.title);
                                    }
                                }}
                            >
                                <div
                                    className="category-card text-center"
                                    ref={(el) => (cardsRef.current[idx] = el)}
                                >
                                    <div className="category-icon-wrapper">
                                        <Icon size={28} />
                                    </div>
                                    <h5 className="category-title">{cat.title}</h5>
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