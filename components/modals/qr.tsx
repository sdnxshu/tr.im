"use client"

import React from 'react'

import { X, Download } from "lucide-react"

type Props = {
    isOpen: boolean
    onClose: () => void
}

const QrModal = ({ isOpen, onClose }: Props) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 px-4">
            <div className="bg-card rounded-3xl p-8 max-w-md w-full relative shadow-xl">
                <button onClick={onClose} className="absolute top-6 right-6 text-foreground hover:text-foreground/70">
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-foreground text-center">Customize QR Code</h2>

                <div className="mt-6 flex items-start gap-8">
                    <div className="w-40 h-40 bg-card border-2 border-foreground/20 rounded-lg flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-32 h-32">
                            <rect x="0" y="0" width="30" height="30" fill="currentColor" />
                            <rect x="70" y="0" width="30" height="30" fill="currentColor" />
                            <rect x="0" y="70" width="30" height="30" fill="currentColor" />
                            <rect x="5" y="5" width="20" height="20" fill="white" />
                            <rect x="75" y="5" width="20" height="20" fill="white" />
                            <rect x="5" y="75" width="20" height="20" fill="white" />
                            <rect x="10" y="10" width="10" height="10" fill="currentColor" />
                            <rect x="80" y="10" width="10" height="10" fill="currentColor" />
                            <rect x="10" y="80" width="10" height="10" fill="currentColor" />
                            <rect x="35" y="5" width="5" height="5" fill="currentColor" />
                            <rect x="45" y="5" width="5" height="5" fill="currentColor" />
                            <rect x="55" y="5" width="5" height="5" fill="currentColor" />
                            <rect x="35" y="15" width="5" height="5" fill="currentColor" />
                            <rect x="50" y="15" width="5" height="5" fill="currentColor" />
                            <rect x="35" y="25" width="5" height="5" fill="currentColor" />
                            <rect x="45" y="25" width="5" height="5" fill="currentColor" />
                            <rect x="55" y="25" width="5" height="5" fill="currentColor" />
                            <rect x="35" y="35" width="5" height="5" fill="currentColor" />
                            <rect x="50" y="35" width="5" height="5" fill="currentColor" />
                            <rect x="60" y="35" width="5" height="5" fill="currentColor" />
                            <rect x="5" y="40" width="5" height="5" fill="currentColor" />
                            <rect x="20" y="40" width="5" height="5" fill="currentColor" />
                            <rect x="35" y="45" width="5" height="5" fill="currentColor" />
                            <rect x="55" y="45" width="5" height="5" fill="currentColor" />
                            <rect x="75" y="45" width="5" height="5" fill="currentColor" />
                            <rect x="90" y="45" width="5" height="5" fill="currentColor" />
                            <rect x="5" y="55" width="5" height="5" fill="currentColor" />
                            <rect x="15" y="55" width="5" height="5" fill="currentColor" />
                            <rect x="25" y="55" width="5" height="5" fill="currentColor" />
                            <rect x="45" y="55" width="5" height="5" fill="currentColor" />
                            <rect x="60" y="55" width="5" height="5" fill="currentColor" />
                            <rect x="80" y="55" width="5" height="5" fill="currentColor" />
                            <rect x="40" y="65" width="5" height="5" fill="currentColor" />
                            <rect x="55" y="65" width="5" height="5" fill="currentColor" />
                            <rect x="70" y="65" width="5" height="5" fill="currentColor" />
                            <rect x="85" y="65" width="5" height="5" fill="currentColor" />
                            <rect x="35" y="75" width="5" height="5" fill="currentColor" />
                            <rect x="50" y="75" width="5" height="5" fill="currentColor" />
                            <rect x="65" y="75" width="5" height="5" fill="currentColor" />
                            <rect x="80" y="75" width="5" height="5" fill="currentColor" />
                            <rect x="40" y="85" width="5" height="5" fill="currentColor" />
                            <rect x="55" y="85" width="5" height="5" fill="currentColor" />
                            <rect x="70" y="85" width="5" height="5" fill="currentColor" />
                            <rect x="90" y="85" width="5" height="5" fill="currentColor" />
                        </svg>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground">Choose format</h3>
                        <div className="mt-3 space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="format" defaultChecked className="w-4 h-4 accent-primary" />
                                <span className="text-foreground">PNG</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="format" className="w-4 h-4 accent-primary" />
                                <span className="text-foreground">SVG</span>
                            </label>
                        </div>
                    </div>
                </div>

                <button className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl border-2 border-foreground/80 hover:bg-primary/90 transition-colors">
                    <Download className="w-5 h-5" />
                    Download
                </button>
            </div>
        </div>
    )
}

export { QrModal }