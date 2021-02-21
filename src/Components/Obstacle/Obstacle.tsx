import React, { useEffect, useMemo, useState } from 'react'
import { RiCactusFill } from 'react-icons/ri'

import { GameState } from '../Stage/Stage'

interface ObstacleProps {
    gameState: GameState
    gameLevel: number
    obstacleRef: React.RefObject<HTMLDivElement>
    numObstacles: number
}

export const Obstacle: React.FC<ObstacleProps> = (props: ObstacleProps) => {
    const { gameState, gameLevel, obstacleRef, numObstacles } = props
    const [lifetime, setLifetime] = useState<boolean>(true)
    const [dx, setDx] = useState<number>(700)

    useEffect(() => {
        const timeout = setTimeout(() => setLifetime(false), (30 - gameLevel * 3) * (75 + 10))
        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        if (!lifetime || !gameState) return
        const timeout = setTimeout(() => {
            setDx(dx - 10)
        }, 30 - gameLevel * 3)
        return () => clearTimeout(timeout)
    }, [dx, lifetime, gameState, gameLevel])

    return useMemo(() => {
        if (!lifetime || gameState !== GameState.InProgress) return null
        return (
            <div
                ref={obstacleRef}
                className={`${gameState !== GameState.InProgress ? 'hidden' : ''} absolute bottom-2 z-10 h-12 mt-auto flex flex-row`}
                style={{ left: dx, transition: `${30 - gameLevel * 3} left linear` }}
            >
                {new Array(numObstacles).fill(undefined).map((x, idx) => (
                    <RiCactusFill key={idx} className="text-gray-600 w-12 h-12" />
                ))}
            </div>
        )
    }, [lifetime, dx, gameState])
}
