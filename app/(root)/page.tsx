"use client"

import React, { useState } from 'react'

import { UrlShortener } from "@/app/(root)/_components/url-shortener"

import { DefaultBackground } from "@/components/background/default"

import { SuccessModal } from "@/components/modals/success"
import { QrModal } from "@/components/modals/qr"

const Page = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showQrModal, setShowQrModal] = useState(false)

    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <DefaultBackground />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                <UrlShortener onShorten={() => setShowSuccessModal(true)} />
            </div>

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                onQrClick={() => {
                    setShowSuccessModal(false)
                    setShowQrModal(true)
                }}
            />

            <QrModal isOpen={showQrModal} onClose={() => setShowQrModal(false)} />
        </main>
    )
}

export default Page