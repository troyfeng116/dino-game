import React from 'react'

export const Ground: React.FC = () => {
    return (
        <div className="absolute bottom-0 overflow-hidden whitespace-nowrap">
            <div className="flex animate-ground1">
                <img className="h-10 object-cover m-0" src="/ground.png" />
                <img className="h-10 object-cover m-0" src="/ground.png" />
            </div>
        </div>
    )
}