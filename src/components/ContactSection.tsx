'use client'

import { useState } from 'react'
import { Send, Mail, Github, Linkedin } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ContactSection() {
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const json = await res.json()
            if (!res.ok) throw new Error(json.error || 'Something went wrong')

            toast.success('Message sent successfully!')
            form.reset()
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message)
            } else {
                toast.error('An unknown error occurred')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-24 bg-white dark:bg-gray-950 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Contact Me
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Let&apos;s work together! I&apos;d love to hear from you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Info Side */}
                    <div className="flex flex-col justify-center gap-6 text-gray-700 dark:text-gray-300">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-sm leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or collaboration
                                opportunities. Feel free to drop me a message or connect via socials below.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                Location
                            </h4>
                            <p className="flex items-center gap-2 text-sm">
                                <svg width="16" height="16" fill="currentColor" className="text-indigo-500">
                                    <path d="M8 0C5.238 0 3 2.238 3 5c0 3.25 5 11 5 11s5-7.75 5-11c0-2.762-2.238-5-5-5zm0 6.5C7.172 6.5 6.5 5.828 6.5 5S7.172 3.5 8 3.5 9.5 4.172 9.5 5 8.828 6.5 8 6.5z" />
                                </svg>
                                Colombo, Sri Lanka
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                Email
                            </h4>
                            <a
                                href="mailto:your@email.com"
                                className="flex items-center gap-2 text-sm text-indigo-500 hover:underline"
                            >
                                <Mail size={16} /> your@email.com
                            </a>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                Socials
                            </h4>
                            <div className="flex items-center gap-4 mt-2">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener"
                                    className="flex items-center gap-2 hover:text-indigo-500"
                                >
                                    <Github size={18} />
                                    <span className="text-sm hidden sm:inline">GitHub</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener"
                                    className="flex items-center gap-2 hover:text-indigo-500"
                                >
                                    <Linkedin size={18} />
                                    <span className="text-sm hidden sm:inline">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
                    >
                        <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                placeholder="Type your message here"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
