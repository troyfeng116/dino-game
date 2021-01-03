import React, { useEffect, useState } from 'react'
import Dinosaur from '../Dinosaur'
import Ground from '../Ground'
import Message from '../Message'
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
        const handleKeyDown = (e: KeyboardEvent) => {
            console.log(e.key)
            if (e.key === ' ' || e.key === 'ArrowUp') {
                if (gameState !== GameState.InProgress) {
                    setGameState(GameState.InProgress)
                    if (gameState === GameState.Dead) {
                        setScore(0)
                        setObstacles([])
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [gameState])

    useEffect(() => {
        if (gameState === GameState.InProgress) {
            setTimeout(() => setScore(score + 1), 100)
        }
    }, [score, gameState])

    useEffect(() => {
        if (gameState === GameState.InProgress) {
            setTimeout(() => {
                const newObstacles = [...obstacles]
                newObstacles.push(<Obstacle key={newObstacles.length} />)
                setObstacles(newObstacles)
            }, Math.random() * 5000 + 5000)
        }
    }, [obstacles, gameState])

    let messageText = ''
    if (gameState === GameState.NotStarted) messageText = 'Hit space or ↑ to start'
    else if (gameState === GameState.Dead) messageText = 'Game Over'

    return (
        <div className="relative flex h-60 stage-width mx-auto my-4 overflow-hidden">
            <Message gameState={gameState} messageText={messageText} />
            <div className="cursor-pointer text-blue-500 hover:text-red-500 h-10 border border-black" onClick={() => setGameState(GameState.Dead)}>Dead</div>
            <Score score={score} />
            {obstacles}
            <Dinosaur gameState={gameState} />
            <Ground gameState={gameState} />
        </div>
    )
}
