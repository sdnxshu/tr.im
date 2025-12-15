import React from 'react'

const DefaultBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Horizontal lines */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-foreground/10" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/10" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-foreground/10" />

            {/* Vertical lines */}
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground/10" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10" />
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-foreground/10" />

            {/* Circles */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-foreground/10" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-foreground/10" />
            <div className="absolute top-1/3 -left-16 w-64 h-64 rounded-full border border-foreground/10" />
            <div className="absolute bottom-1/4 -right-16 w-72 h-72 rounded-full border border-foreground/10" />

            {/* Corner dots */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-foreground" />
            <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-foreground" />
        </div>
    )
}

export { DefaultBackground }