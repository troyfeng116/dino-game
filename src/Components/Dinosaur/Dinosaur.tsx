import React, { useCallback, useEffect, useState } from 'react'

import { GameState } from '../Stage/Stage'

interface DinosaurProps {
    gameState: GameState
    dinoRef: React.MutableRefObject<HTMLDivElement | null>
}

const getHeight = (time: number): number => {
    return 12 + 0.7 * time - 0.0014 * time * time
}

export const Dinosaur: React.FC<DinosaurProps> = (props: DinosaurProps) => {
    const { gameState, dinoRef } = props
    const [sprite, setSprite] = useState<boolean>(true)
    const [jumpTime, setJumpTime] = useState<number>(-1)

    useEffect(() => {
        if (jumpTime >= 500) {
            setJumpTime(-1)
            return
        }
        if (jumpTime < 0) return
        const timeout = setTimeout(() => setJumpTime(jumpTime + 25), 25)
        return () => clearTimeout(timeout)
    }, [jumpTime])

    useEffect(() => {
        const timeout = setTimeout(() => setSprite(!sprite), 150)
        return () => clearTimeout(timeout)
    }, [sprite])

    useEffect(() => {
        const handleKeyDown = (e: { key: string }) => {
            if (e.key === ' ' || e.key === 'ArrowUp') jump()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [jumpTime])

    const jump = useCallback(() => {
        if (jumpTime > 0) return
        setJumpTime(0)
    }, [jumpTime])

    const imageExtension = gameState === GameState.InProgress ? (sprite ? '-1' : '-2') : ''

    return (
        <div ref={dinoRef} className="absolute left-4 z-10 transform h-12 w-12" style={{ bottom: jumpTime < 0 ? 12 : getHeight(jumpTime) }}>
            <img src={`/dinosaur${imageExtension}.png`} className="fill" />
        </div>
    )
}
