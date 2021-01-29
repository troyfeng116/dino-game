import React, { useEffect, useState } from 'react'
import { RiCactusFill } from 'react-icons/ri'

import { OBSTACLE_SPEED } from '../../Constants'
import { GameState } from '../Stage/Stage'

interface ObstacleProps {
    gameState: GameState
}

export const Obstacle: React.FC<ObstacleProps> = (props: ObstacleProps) => {
    const { gameState } = props
    const [lifetime, setLifetime] = useState<boolean>(true)
    const [className, setClassName] = useState<string>('obstacle-transform-start')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setClassName('obstacle-transform-end')
            setTimeout(() => setLifetime(false), OBSTACLE_SPEED)
        }, 100)
        return () => clearTimeout(timeout)
    }, [])

    if (!lifetime || gameState !== GameState.InProgress) return null
    return (
        <div className={`${gameState !== GameState.InProgress ? 'hidden' : ''} absolute bottom-2 z-10 obstacle-transition ease-linear obstacle-duration-1 ${className} h-12 w-12 mt-auto`}>
            <RiCactusFill className="text-gray-600 w-12 h-12" />
        </div>
    )
}
