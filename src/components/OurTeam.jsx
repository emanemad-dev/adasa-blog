import React from 'react';
import './OurTeam.css';
import { FaCamera, FaVideo, FaLink, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

// Generate 24 team members with unique social links
const generateTeamMembers = (count = 24) => {
    const roles = ["مصور طبيعة", "مصور بورتريه", "مصور مختبر", "مصور أزياء", "مصور طعام"];
    const names = ["إبراهيم حسن", "محمد علي", "سالم أحمد", "نورهان سمير", "ياسمين خالد", "رامي يوسف", "ليلى سعيد", "عمر مصطفى"];
    const avatars = [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/55.jpg",
        "https://randomuser.me/api/portraits/women/66.jpg",
        "https://randomuser.me/api/portraits/men/77.jpg",
        "https://randomuser.me/api/portraits/women/88.jpg",
    ];
    const socialData = [
        { icon: FaLink, url: "https://example.com", label: "الموقع الشخصي" },
        { icon: FaCamera, url: "https://portfolio.com", label: "معرض الصور" },
        { icon: FaVideo, url: "https://youtube.com", label: "قناة يوتيوب" },
        { icon: FaInstagram, url: "https://instagram.com", label: "إنستجرام" },
        { icon: FaTwitter, url: "https://twitter.com", label: "تويتر" },
    ];

    return Array.from({ length: count }).map((_, idx) => ({
        id: idx + 1,
        name: `${names[idx % names.length]} ${idx + 1}`,
        role: roles[idx % roles.length],
        avatar: avatars[idx % avatars.length],
        socialLinks: socialData.slice(0, 3).map((item, i) => ({
            icon: <item.icon />,
            url: item.url,
            label: item.label
        }))
    }));
};

const OurTeam = () => {
    const teamMembers = generateTeamMembers(24); // 4 columns × 6 rows

    return (
        <section className="our-team-section py-5" dir="rtl">
            <div className="container text-center">
                {/* Header */}
                <h1 className="team-title mb-2 d-block">
                    فريقنا
                </h1>
                
                <h1 className="team-title mb-2">تعرف على كتابنا</h1>
                <p className="team-subtitle mb-4">
                    فريقنا من المصورين والكتاب ذوي الخبرة شغفون بمشاركة معرفتهم مع المجتمع.
                </p>

                {/* Team Grid */}
                <div className="row g-3">
                    {teamMembers.map(member => (
                        <div key={member.id} className="col-6 col-md-3">
                            <div className="card team-member-card h-100 text-center p-3">

                                {/* Avatar */}
                                <div className="member-avatar mb-3" style={{
                                    backgroundImage: `url(${member.avatar})`,
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    margin: '0 auto 10px'
                                }} />

                                {/* Name & Role */}
                                <h5 className="member-name mb-1">{member.name}</h5>
                                <p className="member-role mb-2">{member.role}</p>

                                {/* Social Links */}
                                <div className="d-flex justify-content-center gap-2 mt-auto">
                                    {member.socialLinks.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            title={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
