import React, { useState } from 'react'

export const Dinosaur: React.FC = () => {
    const [deltaH, setDeltaH] = useState<number>(0)
    return (
        <div className="border border-black h-12 w-12 mt-auto">
            <img src="/dinosaur.png" className="fill" />
        </div>
    )
}