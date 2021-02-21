import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { heightFunction } from '../../Utils/dinoHeightFunction'
import { GameState } from '../Stage/Stage'

interface DinosaurProps {
    gameState: GameState
    dinoRef: React.MutableRefObject<HTMLDivElement | null>
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
        if (jumpTime > 0) return
        const timeout = setTimeout(() => setSprite(!sprite), 150)
        return () => clearTimeout(timeout)
    }, [sprite, jumpTime])

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

    return useMemo(
        () => (
            <div ref={dinoRef} className="absolute left-4 z-10 transform h-12 w-12" style={{ bottom: jumpTime < 0 ? 12 : heightFunction(jumpTime), transition: '25ms bottom linear' }}>
                <img src={`/dinosaur${imageExtension}.png`} className="fill" />
            </div>
        ),
        [sprite, jumpTime, gameState],
    )
}
