import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    const sections = [
      { id: "#title-service-1", x: 20 },
      { id: "#title-service-2", x: -25 },
      { id: "#title-service-3", x: 40 },
      { id: "#title-service-4", x: -40 },
      { id: "#title-service-5", x: 25 }, // microservices
    ];

    sections.forEach((item) => {
      gsap.to(item.id, {
        xPercent: item.x,
        ease: "none",
        scrollTrigger: {
          trigger: item.id,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });

  return (
<section className="mt-20 sm:mt-1 md:mt-2 overflow-hidden font-light leading-snug text-center mb-24 md:mb-42 contact-text-responsive px-4">

  <div
    id="title-service-1"
    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
  >
    <p>Architecture</p>
  </div>

  <div
    id="title-service-2"
    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:translate-x-16"
  >
    <p className="font-normal">Development</p>
    <div className="w-6 h-1 sm:w-10 md:w-32 bg-gold" />
    <p>Deployment</p>
  </div>

  <div
    id="title-service-3"
    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:-translate-x-24"
  >
    <p>APIs</p>
    <div className="w-6 h-1 sm:w-10 md:w-32 bg-gold" />
    <p className="italic">Frontends</p>
    <div className="w-6 h-1 sm:w-10 md:w-32 bg-gold" />
    <p>Scalability</p>
  </div>

  <div
    id="title-service-4"
    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:translate-x-24"
  >
    <p>Databases</p>
  </div>

  {/* ✅ FIXED Microservices */}
  <div
    id="title-service-5"
    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:-translate-x-24"
  >
    <p className="font-medium tracking-wide">Microservices</p>
  </div>

</section>
  );
};

export default ServiceSummary;