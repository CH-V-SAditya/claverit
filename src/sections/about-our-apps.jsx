import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { Truck, Users, Building2 } from "lucide-react";

export default function AboutOurApps() {
    const sectionData = [
        {
            title: "Logistics & Fulfilment",
            description: "End-to-end delivery visibility with multi-carrier integration and real-time tracking.",
            icon: <Truck className="size-6 text-indigo-400" />,
            className: "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10"
        },
        {
            title: "Channel Partners",
            description: "Growth through partnerships with dedicated dashboards, incentives, and training.",
            icon: <Users className="size-6 text-indigo-400" />,
            className: "py-10 border-b border-slate-700 md:py-0 lg:border-r md:border-b-0 md:px-10"
        },
        {
            title: "Enterprise Enablement",
            description: "Built for scale, governance, and impact. Support for startups, MSMEs, and institutions.",
            icon: <Building2 className="size-6 text-indigo-400" />,
            className: "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10"
        },
    ];
    return (
        <section className="flex flex-col items-center" id="ecosystem">
            <SectionTitle title="Logistics & Ecosystem" description="End-to-end fulfilment and partnership opportunities designed for scale." />
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 mt-18">
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={data.className}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="size-10 p-2 bg-indigo-600/20 border border-indigo-600/30 rounded flex items-center justify-center">
                            {data.icon}
                        </div>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-200">{data.title}</h3>
                            <p className="text-sm text-slate-400">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
