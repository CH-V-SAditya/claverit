import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-400 mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <a href="#!" className="text-2xl font-bold text-white tracking-tight">
                        <span className="text-green-500">Cla</span>verit
                    </a>
                    <p className="text-sm/7 mt-6">
                        Claverit is a multi-utility mobile application designed for genuine, Aadhaar-verified users to connect, communicate, trade, and support communities safely.
                    </p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-white">Platform</h2>
                        <a className="hover:text-green-400 transition" href="#features">Features</a>
                        <a className="hover:text-green-400 transition" href="#ecosystem">Ecosystem</a>
                        <a className="hover:text-green-400 transition" href="#impact">Impact</a>
                        <a className="hover:text-green-400 transition" href="#contact">Contact</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p>Get the latest updates on platform features and community impact.</p>
                        <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-slate-900 border border-slate-800">
                            <input className="outline-none w-full max-w-64 py-2 rounded px-2 bg-transparent text-white" type="email" placeholder="Enter your email" />
                            <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 text-white rounded font-medium">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-8 text-center border-t mt-12 border-slate-800 text-slate-500">
                Copyright 2026 © Claverit by WINSMILES. All Rights Reserved.
                Developed by NighaTech Global.
            </p>
        </motion.footer>
    );
};
