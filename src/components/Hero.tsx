'use client'

import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex items-center min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden px-6 md:px-16"
        >
            <div className="absolute inset-0 bg-gradient-hero bg-[length:300%_300%] animate-gradient-x opacity-10 z-0" />

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 md:py-32 z-10">
                {/* Left: Content */}
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
                        HELLO I'M, <br />
                        Ujela Gajanayaka <span className="underline decoration-indigo-400"> A Passionate Web Developer</span>
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg max-w-md mx-auto md:mx-0">
                        I build modern, responsive websites using Next.js, TypeScript, Tailwind CSS and more.
                        Let's bring your ideas to life!
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Link
                            href="#contact"
                            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="#studio"
                            className="flex items-center gap-2 border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition"
                        >
                            <PlayCircle size={18} /> My Studio
                        </Link>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/R.gif"
                        alt="Camera"
                        width={480}
                        height={480}
                        className="w-full max-w-xs md:max-w-md rounded-xl shadow-lg opacity-90"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
