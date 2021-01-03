import React, { useEffect, useState } from 'react'
import { RiCactusFill } from 'react-icons/ri'

export const Obstacle: React.FC = () => {
    const [lifetime, setLifetime] = useState<boolean>(true)
    const [className, setClassName] = useState<string>('obstacle-transform-start')

    useEffect(() => {
        setTimeout(() => {
            setClassName('obstacle-transform-end')
            setTimeout(() => setLifetime(false), 5500)
        }, 100)
    }, [])

    if (!lifetime) return null
    return (
        <div className={`absolute bottom-4 z-10 obstacle-transition ease-linear obstacle-duration-1 ${className} h-12 w-12 mt-auto`}>
            <RiCactusFill className="w-12 h-12" />
        </div>
    )
}