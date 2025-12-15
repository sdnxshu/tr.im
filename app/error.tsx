'use client' // Error boundaries must be Client Components

import React, { useEffect } from 'react'

import { DefaultBackground } from "@/components/background/default"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <DefaultBackground />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground italic leading-relaxed max-w-3xl">
                    {"Don't panic!"}
                    <br />
                    {"We're short of something right now."}
                    <br />
                    {"We'll be back soon."}
                </h1>

                <div className="mt-12 relative">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl font-bold text-foreground">Oops!</span>

                    <div className="flex items-center gap-2">
                        <span className="text-8xl md:text-9xl font-bold text-primary/60">4</span>

                        {/* Robot */}
                        <div className="relative">
                            <div className="w-24 h-32 bg-primary rounded-t-full border-4 border-foreground/80 relative">
                                <div className="absolute inset-2 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-foreground" />
                                    <div className="absolute top-4 right-2 w-6 h-6 rounded-full bg-foreground/60" />
                                    <div className="absolute bottom-4 left-2 w-5 h-5 rounded-full bg-foreground/40" />
                                </div>
                            </div>

                            <div className="w-20 h-16 bg-primary mx-auto border-4 border-foreground/80 flex items-center justify-center">
                                <div className="bg-foreground text-card text-xs font-bold px-2 py-1 rounded">ERROR</div>
                            </div>

                            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-card rounded-full" />
                            </div>
                        </div>

                        <span className="text-8xl md:text-9xl font-bold text-primary/60">4</span>
                    </div>
                </div>
            </div>
        </main>
    )
}