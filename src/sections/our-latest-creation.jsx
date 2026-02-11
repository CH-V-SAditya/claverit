import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [className, setClassName] = useState("");

    const sectionData = [
        {
            title: "Personal Networking",
            description: "Smarter connections with secure calling, messaging, and digital visiting cards.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
            align: "object-center",
        },
        {
            title: "Business Mode",
            description: "Manage catalog, orders, payments, and analytics in one place.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            align: "object-center",
        },
        {
            title: "ONDC Marketplace",
            description: "Discover products from multiple sellers with category-based search and secure payments.",
            image: "/claverit/assets/ondc-marketplace.jpeg",
            align: "object-center",
        },
        {
            title: "Save Lives Near You",
            description: "Connect with a network of verified donors, track real-time blood requirements, and receive emergency alerts in your community.",
            image: "/claverit/assets/blood-assist.jpeg",
            align: "object-center",
        },
        {
            title: "Coordinate With Ease",
            description: "Schedule professional meetings or social gatherings with integrated calendar syncing and a seamless, collaborative chat interface.",
            image: "/claverit/assets/schedule-meetings.jpeg",
            align: "object-center",
        },
    ];

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sectionData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered, sectionData.length]);

    return (
        <section className="flex flex-col items-center" id="features">
            <SectionTitle
                title="Core Capabilities"
                description="Everything you need to connect, manage, and grow in a unified digital ecosystem."
            />

            <div className="flex items-center gap-4 h-100 w-full max-w-5xl mt-18 mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${isHovered && className ? "hover:w-full w-56" : index === activeIndex ? "w-full" : "w-56"} ${className} ${!className ? "pointer-events-none" : ""}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() => setClassName("transition-all duration-500")}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img className={`h-full w-full object-cover ${data.align}`} src={data.image} alt={data.title} />
                        <div className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 transition-all duration-300 ${isHovered && className ? "opacity-0 group-hover:opacity-100" : index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                            <h1 className="text-3xl font-semibold">{data.title}</h1>
                            <p className="text-sm mt-2">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
