import React, { useEffect, useState } from 'react'

export const Obstacle: React.FC = () => {
    const [lifetime, setLifetime] = useState<boolean>(true)
    const [className, setClassName] = useState<string>('left-full')

    useEffect(() => {
        setTimeout(() => setClassName('-left-16'), 100)
        setTimeout(() => setLifetime(false), 1000)
    }, [])

    if (!lifetime) return null
    return (
        <div className={`absolute bottom-4 z-10 transition-all ease-linear duration-1000 ${className} border border-black h-12 w-12 mt-auto`}>
            <img src="/dinosaur.png" className="fill" />
        </div>
    )
}