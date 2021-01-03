import React, { useEffect, useState } from 'react'
import Dinosaur from '../Dinosaur'
import Ground from '../Ground'
import Obstacle from '../Obstacle'
import Score from '../Score'

export enum GameState {
    NotStarted = 'NotStarted',
    InProgress = 'InProgress',
    Dead = 'Dead',
}

export const Stage: React.FC = () => {
    const [obstacles, setObstacles] = useState<React.ReactElement[]>([])
    const [gameState, setGameState] = useState<GameState>(GameState.NotStarted)
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        const handleKeyDown = (e: { key: string }) => {
            if (e.key === ' ' || e.key === 'KeyUp') {
                setGameState(GameState.InProgress)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        if (gameState === GameState.InProgress) {
            setTimeout(() => setScore(score + 1), 100)
        }
    }, [score, gameState])

    useEffect(() => {
        setTimeout(() => {
            const newObstacles = [...obstacles]
            newObstacles.push(<Obstacle key={newObstacles.length} />)
            setObstacles(newObstacles)
        }, Math.random() * 5000 + 5000)
    }, [obstacles])

    return (
        <div className="relative flex h-60 stage-width mx-auto my-4 overflow-hidden">
            <Score score={score} />
            {obstacles}
            <Dinosaur />
            <Ground />
        </div>
    )
}
