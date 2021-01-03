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
    const [highScore, setHighScore] = useState<number>(0)

    useEffect(() => {
        if (gameState === GameState.Dead) {
            setHighScore(Math.max(highScore, score))
            setObstacles([])
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === ' ' || e.key === 'ArrowUp') {
                if (gameState !== GameState.InProgress) {
                    setScore(0)
                    setGameState(GameState.InProgress)
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [gameState])

    useEffect(() => {
        if (gameState === GameState.InProgress) {
            const timeout = setTimeout(() => setScore(score + 1), 100)
            return () => clearTimeout(timeout)
        }
    }, [score, gameState])

    useEffect(() => {
        if (gameState === GameState.InProgress) {
            const timeout = setTimeout(() => {
                const newObstacles = [...obstacles]
                newObstacles.push(<Obstacle key={newObstacles.length} gameState={gameState} />)
                setObstacles(newObstacles)
            }, Math.random() * 5000 + 5000)
            return () => clearTimeout(timeout)
        }
    }, [obstacles, gameState])

    let messageText = ''
    if (gameState === GameState.NotStarted) messageText = 'Hit space or ↑ to start'
    else if (gameState === GameState.Dead) messageText = 'Game Over'

    return (
        <div className="relative flex h-60 stage-width mx-auto my-4 overflow-hidden">
            <Message gameState={gameState} messageText={messageText} />
            <div className="cursor-pointer text-blue-500 hover:text-red-500 h-10 border border-black" onClick={() => setGameState(GameState.Dead)}>Dead</div>
            <Score score={score} highScore={highScore} />
            {obstacles}
            <Dinosaur gameState={gameState} />
            <Ground gameState={gameState} />
        </div>
    )
}
