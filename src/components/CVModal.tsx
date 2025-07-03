'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function CVModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 z-10"
                    aria-label="Close CV viewer"
                >
                    <X size={24} />
                </button>

                <iframe
                    src="/Upela_Gajanayaka_CV.pdf"
                    className="w-full h-full border-none"
                    title="CV Preview"
                />
            </motion.div>
        </div>
    )
}
