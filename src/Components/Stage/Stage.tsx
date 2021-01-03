import React, { useEffect, useState } from 'react'
import Dinosaur from '../Dinosaur'
import Ground from '../Ground'
import Obstacle from '../Obstacle'

export const Stage: React.FC = () => {
    const [obstacles, setObstacles] = useState<React.ReactElement[]>([])

    useEffect(() => {
        setTimeout(() => {
            const newObstacles = [...obstacles]
            newObstacles.push(<Obstacle key={newObstacles.length} />)
            setObstacles(newObstacles)
        }, Math.random() * 5000 + 5000)
    }, [obstacles])

    return (
        <div className="relative flex h-60 stage-width mx-auto my-auto overflow-none">
            {obstacles}
            <Dinosaur />
            <Ground />
        </div>
    )
}
