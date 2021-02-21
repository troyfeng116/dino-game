import React, { useEffect, useRef, useState } from 'react'

import { STAGE_WIDTH } from '../../Constants'
import { isIntersectingWithArr, usePosition, usePositionArr } from '../../Utils/usePosition'
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
    const [obstacles, setObstacles] = useState<JSX.Element[]>([])
    const [obstacleRefArr, setObstacleRefArr] = useState<React.RefObject<HTMLDivElement>[]>([])
    const [gameState, setGameState] = useState<GameState>(GameState.NotStarted)
    const [gameLevel, setGameLevel] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [highScore, setHighScore] = useState<number>(0)
    const dinoRef = useRef<HTMLDivElement>(null)
    const dinoRect = usePosition(dinoRef)
    const obstacleRects = usePositionArr(obstacleRefArr)

    useEffect(() => {
        console.log(gameLevel)
    }, [gameLevel])

    useEffect(() => {
        if (gameState === GameState.InProgress) {
            if (isIntersectingWithArr(dinoRect, obstacleRects)) {
                setGameState(GameState.Dead)
            }
        }
    }, [dinoRect, obstacleRects, gameState])

    useEffect(() => {
        if (gameState === GameState.Dead) {
            setHighScore(Math.max(highScore, score))
            setObstacles([])
            setGameLevel(0)
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
            setGameLevel(Math.min(5, Math.floor(score / 100)))
            const timeout = setTimeout(() => setScore(score + 1), 100 - gameLevel * 10)
            return () => clearTimeout(timeout)
        }
    }, [score, gameState, gameLevel])

    useEffect(() => {
        if (gameState === GameState.InProgress) {
            const timeout = setTimeout(() => {
                const ref = React.createRef<HTMLDivElement>()
                const newObstacles = [...obstacles.slice(-2), <Obstacle key={score} obstacleRef={ref} gameState={gameState} gameLevel={gameLevel} numObstacles={Math.random() > 0.75 ? 2 : 1} />]
                setObstacles(newObstacles)
                setObstacleRefArr([...obstacleRefArr.slice(-2), ref])
            }, ((Math.random() * 5000 + 2000) * (7 - gameLevel)) / 7)
            return () => clearTimeout(timeout)
        }
    }, [obstacles, gameState])

    return (
        <div className="relative flex h-60 mx-auto my-4 overflow-hidden" style={{ width: STAGE_WIDTH }}>
            <Message gameState={gameState} />
            <Score score={score} highScore={highScore} />
            {obstacles}
            <Dinosaur dinoRef={dinoRef} gameState={gameState} />
            <Ground gameState={gameState} gameLevel={gameLevel} />
        </div>
    )
}
