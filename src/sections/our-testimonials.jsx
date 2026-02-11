import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { BarChart, ShieldCheck, Heart, Users } from "lucide-react";

export default function OurTestimonials() {
    const features = [
        {
            title: "Analytics & Insights",
            description: "Data-driven decision making with real-time activity tracking and performance metrics for businesses and partners.",
            icon: <BarChart className="size-6 text-indigo-400" />,
        },
        {
            title: "Security & Privacy",
            description: "Built with compliance at the core. OTP-based authentication, KYC verification, and granular access controls.",
            icon: <ShieldCheck className="size-6 text-indigo-400" />,
        },
        {
            title: "Social Impact",
            description: "Technology serving the community. Blood donation network with location-based alerts and emergency requests.",
            icon: <Heart className="size-6 text-red-400" />,
        },
        {
            title: "Who It’s For",
            description: "Designed for Individuals, MSMEs, Channel Partners, Hospitals, and Government Institutions.",
            icon: <Users className="size-6 text-indigo-400" />,
        },
    ];

    return (
        <section className="flex flex-col items-center" id="impact">
            <SectionTitle title="Impact & Trust" description="Data-driven insights, security at the core, and technology serving the community." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-18 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div key={feature.title} className="group border border-slate-800 p-6 rounded-xl hover:bg-slate-900/50 transition-colors"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                                {feature.icon}
                            </div>
                            <div>
                                <h2 className="text-xl font-medium text-slate-100 mb-2">
                                    {feature.title}
                                </h2>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
