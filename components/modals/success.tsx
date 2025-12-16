"use client"

import React from 'react'

import { X, QrCode, Copy, Check } from "lucide-react"

import { ShareButtons } from "@/components/buttons/share"

type Props = {
    isOpen: boolean
    onClose: () => void
    onQrClick: () => void
    shortUrl: string
}

const SuccessModal = ({ isOpen, onClose, onQrClick, shortUrl }: Props) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 px-4">
            <div className="bg-card rounded-3xl p-8 max-w-md w-full relative shadow-xl">
                <button onClick={onClose} className="absolute top-6 right-6 text-foreground hover:text-foreground/70">
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground">
                        Link is ready!<span className="ml-1">🎉</span>
                    </h2>

                    <p className="mt-4 text-foreground/80">Copy your shortened URL and share</p>

                    <div className="mt-4 px-6 py-4 bg-muted rounded-xl border-2 border-foreground/20">
                        <span className="text-foreground font-medium break-all">{shortUrl || 'Generating...'}</span>
                    </div>

                    <div className="mt-4 flex justify-center gap-4">
                        <button
                            onClick={onQrClick}
                            disabled={!shortUrl}
                            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl border-2 border-foreground/80 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <QrCode className="w-5 h-5" />
                            QR
                        </button>
                        <button
                            onClick={handleCopy}
                            disabled={!shortUrl}
                            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl border-2 border-foreground/80 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>

                    <ShareButtons />
                </div>
            </div>
        </div>
    )
}

export { SuccessModal }