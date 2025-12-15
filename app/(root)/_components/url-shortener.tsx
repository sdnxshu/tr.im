"use client"

import React from 'react'

import { ArrowDown } from "lucide-react"

type Props = {
    onShorten: () => void
}

const UrlShortener = ({ onShorten }: Props) => {
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

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                    type="url"
                    placeholder="Paste link here..."
                    className="w-full sm:w-96 px-6 py-4 rounded-xl border-2 border-foreground/20 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <button
                    onClick={onShorten}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl border-2 border-foreground/80 hover:bg-primary/90 transition-colors"
                >
                    Shorten
                </button>
            </div>
        </div>
    )
}

export { UrlShortener }