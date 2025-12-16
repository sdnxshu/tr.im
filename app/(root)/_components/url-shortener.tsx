"use client"

import React from 'react'

import { useFormik } from 'formik';
import { toast } from "sonner";

import { ArrowDown } from "lucide-react"

type Props = {
    onShorten: () => void
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

                await fetch(
                    "/api/shorten",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values),
                    }
                )

            } catch (error) { toast.error("error") }

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
                        onClick={onShorten}
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl border-2 border-foreground/80 hover:bg-primary/90 transition-colors"
                    >
                        Shorten
                    </button>
                </div>
            </form>

        </div>
    )
}

export { UrlShortener }