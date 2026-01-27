import React from "react";
import { FaBullseye, FaUsers, FaLightbulb, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurValues.css";

/**
 * Values data
 */
const VALUES = [
    {
        id: 1,
        title: "دائماً محدد",
        subtitle: "أحدث الاتجاهات",
        description:
            "نحرص دائماً على متابعة أحدث الاتجاهات وأفضل الممارسات في المجال.",
        icon: <FaBullseye />,
    },
    {
        id: 2,
        title: "المجتمع",
        subtitle: "التعلم الجماعي",
        description:
            "انضم إلى مجتمع كبير من المصورين لتبادل الخبرات والتجارب.",
        icon: <FaUsers />,
    },
    {
        id: 3,
        title: "تركيز عملي",
        subtitle: "تطبيق مباشر",
        description:
            "أمثلة واقعية يمكنك تطبيقها مباشرة في مشاريعك اليومية.",
        icon: <FaLightbulb />,
    },
    {
        id: 4,
        title: "الجودة أولاً",
        subtitle: "محتوى احترافي",
        description:
            "نقدم محتوى مدروس ومكتوب بخبرة عالية.",
        icon: <FaStar />,
    },
];

/**
 * Single Value Card
 */
const ValueCard = ({ icon, title, subtitle, description }) => (
    <div className="col-md-6 col-lg-3">
        <div className="value-card h-100 p-3 d-flex flex-column align-items-center text-center">
            <div className="value-icon mb-3">{icon}</div>

            <h5 className="value-title fw-bold mb-1">{title}</h5>
            <span className="value-subtitle mb-2">{subtitle}</span>

        </div>
    </div>
);

/**
 * Our Values Section
 */
const OurValues = () => {
    return (
        <section className="our-values py-5 text-center" dir="rtl">
            <div className="container">

                {/* Section Header */}
                <header className="mb-5">
                    <h1 className="values-title fw-bold text-white">قيمنا</h1>
                    <p className="section-description">
                        المبادئ التي توجه كل ما نقوم بإنشائه
                    </p>
                </header>

                {/* Values Grid */}
                <div className="row justify-content-center g-4">
                    {VALUES.map((value) => (
                        <ValueCard key={value.id} {...value} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurValues;
