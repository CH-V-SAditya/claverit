import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrustedCompanies() {
    return (
        <section className="flex flex-col items-center">
            <SectionTitle title="Join the Ecosystem" description="One platform, endless possibilities." />
            <motion.div className="relative max-w-5xl w-full py-20 md:py-26 mt-18 overflow-hidden mx-auto border border-indigo-900 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#10b981]/10 to-[#7c3aed]/20 rounded-3xl p-4 md:p-10 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-[#10b981] to-[#7c3aed]/60 blur-[180px]"></div>
                <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-[#7c3aed] to-[#10b981]/60 blur-[180px]"></div>
                
                <div className="flex flex-col items-center z-10">
                    <span className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        Ready to get started?
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold max-w-3xl bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text leading-tight">
                        Build, Connect, and Grow with Us
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mt-6">
                        Whether you're an individual looking to network, a business aiming to scale, or a partner seeking growth — there's a place for you here.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white font-medium active:scale-95 rounded-full px-8 py-3.5 shadow-lg shadow-green-900/20">
                            Get Started
                            <ArrowRight className="size-5" />
                        </button>
                        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 transition text-white font-medium active:scale-95 rounded-full px-8 py-3.5 backdrop-blur-sm">
                            Request Demo
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
