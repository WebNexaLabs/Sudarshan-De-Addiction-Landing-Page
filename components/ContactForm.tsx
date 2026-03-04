"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(/^[0-9+() -]{10,15}$/, "Invalid phone number"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log("Form Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                    <input
                        {...register("name")}
                        className={`rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all ${errors.name ? 'border-red-500 ring-red-500/20' : 'focus:border-primary'}`}
                        placeholder="Full Name"
                        type="text"
                    />
                    {errors.name && <span className="text-xs font-bold text-red-500 mt-1">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input
                        {...register("phone")}
                        className={`rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all ${errors.phone ? 'border-red-500 ring-red-500/20' : 'focus:border-primary'}`}
                        placeholder="+91 00000 00000"
                        type="tel"
                    />
                    {errors.phone && <span className="text-xs font-bold text-red-500 mt-1">{errors.phone.message}</span>}
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                    <select
                        {...register("subject")}
                        className={`rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all ${errors.subject ? 'border-red-500 ring-red-500/20' : 'focus:border-primary'}`}
                    >
                        <option value="">Select an option</option>
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Treatment Details">Treatment Details</option>
                        <option value="Employment Opportunities">Employment Opportunities</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.subject && <span className="text-xs font-bold text-red-500 mt-1">{errors.subject.message}</span>}
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Message</label>
                    <textarea
                        {...register("message")}
                        className={`rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all ${errors.message ? 'border-red-500 ring-red-500/20' : 'focus:border-primary'}`}
                        placeholder="How can we help you?"
                        rows={4}
                    ></textarea>
                    {errors.message && <span className="text-xs font-bold text-red-500 mt-1">{errors.message.message}</span>}
                </div>
                <button
                    disabled={isSubmitting}
                    className="md:col-span-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:translate-y-0"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Sending...
                        </span>
                    ) : "Send Message"}
                </button>
            </form>

            {submitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl animate-fade-in">
                    <div className="text-center p-8">
                        <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-secondary/20">
                            <span className="material-symbols-outlined text-3xl">check</span>
                        </div>
                        <h3 className="text-2xl font-bold dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-slate-600 dark:text-slate-400">We will get back to you within 2 hours.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
