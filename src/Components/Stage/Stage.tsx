import React from 'react'
import Dinosaur from '../Dinosaur'
import Ground from '../Ground'

export const Stage: React.FC = () => {
    return (
        <div className="relative flex h-60 w-96 mx-auto my-auto border border-black">
            <Dinosaur />
            <Ground />
        </div>
    )
}
