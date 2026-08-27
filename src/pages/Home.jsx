import { useState, useEffect } from "react";
import {
    GraduationCap,
    Globe,
    MessageCircle,
    Play,
    Briefcase,
    Camera,
    Video,
    ArrowRight
} from "lucide-react";
import "../Styles/home.css";
import logoUrl from "../assets/img/escudo.jpg";

const LINKS = [
    {
        label: "Admisiones 2027",
        sublabel: "¡Forma parte de nuestra familia!",
        url: "https://www.pedagogicocrear.edu.co/admisiones-2027.html",
        icon: GraduationCap,
        highlight: true
    },
    {
        label: "Sitio Web Oficial",
        sublabel: "www.pedagogicocrear.edu.co",
        url: "https://www.pedagogicocrear.edu.co/",
        icon: Globe
    },
    {
        label: "Chatea con nosotros",
        sublabel: "Atención directa vía WhatsApp",
        url: "https://wa.me/573118537912",
        icon: MessageCircle
    },
    {
        label: "Canal de YouTube",
        sublabel: "Nuestros eventos y videos",
        url: "https://www.youtube.com/channel/UC33y4DbY4kGPuzEDv_dXlVA",
        icon: Play
    },
    {
        label: "Portafolio Educativo",
        sublabel: "Conoce nuestra propuesta",
        url: "https://drive.google.com/file/d/1AU6Y5ZcxPTFHJmlhMyX8IyaDLEDPpGYt/view",
        icon: Briefcase
    },
];

const SOCIALS = [
    { label: "Instagram", url: "https://www.instagram.com/colegiopedagogicocrear/?hl=es", icon: Camera },
    { label: "TikTok", url: "https://www.tiktok.com/@colegio_pedagogic", icon: Video },
    { label: "YouTube", url: "https://www.youtube.com/channel/UC33y4DbY4kGPuzEDv_dXlVA", icon: Play },
];

export const Home = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const onMove = (e) => {
        const t = e.currentTarget;
        const r = t.getBoundingClientRect();
        t.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        t.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };

    return (
        <div className={`inf-wrap ${mounted ? "inf-ready" : ""}`}>
            <div className="inf-noise" />

            {/* Decoraciones animadas infantiles flotantes de fondo */}
            <div className="inf-floating-shapes">
                <span className="shape s1">🌟</span>
                <span className="shape s2">🎨</span>
                <span className="shape s3">🚀</span>
                <span className="shape s4">🎈</span>
            </div>

            <main className="inf-card school-theme">
                <div className="inf-viewfinder">
                    {/* Contenedor único para mover la insignia independientemente */}
                    <div className="joy-badge-container">
                        <span className="vf-rec joy-badge">
                            <span className="vf-dot" /> 🌟 APRENDIZAJE Y CREATIVIDAD
                        </span>
                    </div>

                    <div className="inf-logo-box pulse-logo">
                        <img src={logoUrl} alt="Colegio Pedagógico CREAR" className="inf-logo" />
                    </div>
                </div>

                <div className="school-header-text">
                    <h1 className="inf-main-title">@colegiopedagogicocrear</h1>
                    <p className="inf-tag">
                        <span className="inf-line" />
                        Instituto Pedagógico para el Desarrollo Integral "CREAR"
                        <span className="inf-line" />
                    </p>
                </div>

                {/* Mini Reproductor de YouTube Integrado */}
                <div className="video-container" style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%',
                    height: 0,
                    marginBottom: '24px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px -4px rgba(30, 58, 138, 0.1)',
                    border: '1px solid #e2e8f0',
                    background: '#000'
                }}>
                    <video
                        src="https://res.cloudinary.com/uykul1p9/video/upload/v1787850456/videoplayback.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            border: 0
                        }}
                    >
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                </div>

                <div className="inf-links">
                    {LINKS.map((l, i) => {
                        const IconComponent = l.icon;
                        return (
                            <a
                                key={l.label}
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inf-link ${l.highlight ? "highlight-link" : ""}`}
                                onMouseMove={onMove}
                                style={{ "--d": `${i * 0.08 + 0.2}s` }}
                            >
                                <span className="inf-link-glow" />
                                <span className="inf-link-tag">
                                    <IconComponent size={22} />
                                </span>
                                <span className="inf-link-text">
                                    <strong>{l.label}</strong>
                                    <small>{l.sublabel}</small>
                                </span>
                                <span className="inf-arrow">
                                    <ArrowRight size={18} />
                                </span>
                            </a>
                        );
                    })}
                </div>

                <div className="inf-socials">
                    {SOCIALS.map((s, i) => {
                        const SocialIcon = s.icon;
                        return (
                            <a
                                key={s.label}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inf-social"
                                style={{ "--d": `${i * 0.1 + 0.6}s` }}
                            >
                                <SocialIcon size={16} className="social-icon-svg" /> {s.label}
                            </a>
                        );
                    })}
                </div>

                <p className="inf-foot">© 2027 · Colegio Pedagógico CREAR · ¡Juntos transformamos la educación!</p>
            </main>
        </div>
    );
};

export default Home;