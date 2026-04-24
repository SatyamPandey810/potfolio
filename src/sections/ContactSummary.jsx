import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// ── Enhanced Tech Marquee ──────────────────────────────────────────────────
const TechMarquee = ({ items }) => {
  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="tech-pill">
            <span className="tech-dot" />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        .tech-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 18px 0;
          border-top: 1px solid rgba(212, 175, 55, 0.35);
          border-bottom: 1px solid rgba(212, 175, 55, 0.35);
          
        }

        /* Left & right fade masks */
        .tech-marquee-wrapper::before,
        .tech-marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .tech-marquee-wrapper::before {
          left: 0;
          // background: linear-gradient(90deg, var(--bg, #000) 0%, transparent 100%);
        }
        .tech-marquee-wrapper::after {
          right: 0;
          // background: linear-gradient(270deg, var(--bg, #000) 0%, transparent 100%);
        }

        /* Scrolling track */
        .tech-marquee-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: techScroll 28s linear infinite;
          will-change: transform;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes techScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        /* Individual pill */
        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 28px 6px 20px;
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
          font-size: clamp(0.90rem, 2vw, 1rem);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          // color: rgba(255, 255, 255, 0.55);
          white-space: nowrap;
          cursor: default;
          position: relative;
          transition:
            color 0.35s ease,
            text-shadow 0.35s ease;
        }

        /* Separator between pills */
        .tech-pill::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 14px;
          // background: rgba(212, 175, 55, 0.2);
        }

        .tech-pill:hover {
          color: #d4af37;
          text-shadow:
            0 0 12px rgba(212, 175, 55, 0.6),
            0 0 28px rgba(212, 175, 55, 0.3);
        }

        /* Gold dot accent */
        .tech-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d4af37;
          opacity: 0.45;
          flex-shrink: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tech-pill:hover .tech-dot {
          opacity: 1;
          transform: scale(1.4);
        }

        /* Shimmer sweep on the whole track */
        @keyframes shimmerSweep {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────
const ContactSummary = () => {
  const containerRef = useRef(null);

  const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];
  const items2 = [
    "JavaScript", "React", "Node.js", "Nest.js",
    "MongoDB", "PostgreSQL", "CI/CD", "Docker", "Git",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >

      <TechMarquee items={items2} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> “
        </p>
      </div>

      <Marquee items={items} />
      {/* ↓ Replace the old Marquee with this enhanced version */}
    </section>
  );
};

export default ContactSummary;