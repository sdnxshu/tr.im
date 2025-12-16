"use client"

import React from 'react'

import { useFormik } from 'formik';
import { toast } from "sonner";

import { ArrowDown } from "lucide-react"

type Props = {
    onShorten: (data: { shortUrl: string; shortCode: string; id: number }) => void
}

const UrlShortener = ({ onShorten }: Props) => {

    const formik = useFormik({

        initialValues: {
            url: '',
        },

        onSubmit: async (values, { setSubmitting }) => {

            setSubmitting(true)

            await formik.validateForm()
            if (!formik.isValid) { toast.error("Try entering some real values"); return }

            try {

                const response = await fetch(
                    "/api/shorten",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values),
                    }
                )

                if (!response.ok) {
                    toast.error("Failed to shorten URL")
                    return
                }

                const data = await response.json()

                // Pass the shortened URL data to parent
                onShorten(data)

                // Reset form
                formik.resetForm()

            } catch (error) {
                toast.error("Error shortening URL")
            }

            finally { setSubmitting(false) }

        },

    });

    return (
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                <span className="italic">Shorten your URLs</span>
                <br />
                <span className="italic">simple and easy</span>
            </h1>

            <div className="mt-12 flex items-center justify-center gap-2 text-foreground/80 text-lg">
                <span>Just paste your link</span>
                <ArrowDown className="w-5 h-5" />
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        id="url"
                        name="url"
                        type="url"
                        placeholder="Paste link here..."
                        required
                        value={formik.values.url}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full sm:w-96 px-6 py-4 rounded-xl border-2 border-foreground/20 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                    <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl border-2 border-foreground/80 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {formik.isSubmitting ? 'Shortening...' : 'Shorten'}
                    </button>
                </div>
            </form>

        </div>
    )
}

export { UrlShortener }