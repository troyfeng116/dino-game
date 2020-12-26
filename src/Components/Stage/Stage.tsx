import React from 'react'
import Dinosaur from '../Dinosaur'

export const Stage: React.FC = () => {
    return (
        <div className="flex h-60 w-96 mx-auto my-auto border border-black">
            <Dinosaur />
        </div>
    )
}
