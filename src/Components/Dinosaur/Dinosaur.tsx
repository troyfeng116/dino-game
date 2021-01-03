import React, { useEffect, useState } from 'react'
import { GameState } from '../Stage/Stage'

const JUMP_HEIGHT = 24
const JUMP_DURATION = 300

enum JumpState {
    GROUND = 'GROUND',
    UP = 'UP',
    DOWN = 'DOWN',
}

interface DinosaurProps {
    gameState: GameState
}

export const Dinosaur: React.FC<DinosaurProps> = (props: DinosaurProps) => {
    const { gameState } = props
    const [jumpState, setJumpState] = useState<JumpState>(JumpState.GROUND)
    const [sprite, setSprite] = useState<boolean>(true)

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
    }, [jumpState])

    useEffect(() => {
        switch (jumpState) {
            case JumpState.GROUND:
                break
            case JumpState.UP:
                setTimeout(() => setJumpState(JumpState.DOWN), JUMP_DURATION)
                break
            case JumpState.DOWN:
                setTimeout(() => setJumpState(JumpState.GROUND), JUMP_DURATION)
                break
        }
    }, [jumpState])

    const jump = () => {
        if (jumpState !== JumpState.GROUND) return
        setJumpState(JumpState.UP)
    }

    let className = ''
    switch (jumpState) {
        case JumpState.GROUND:
            className = 'translate-y-0'
            break
        case JumpState.UP:
            className = `ease-out -translate-y-${JUMP_HEIGHT}`
            break
        case JumpState.DOWN:
            className = 'ease-in translate-y-0'
            break
    }

    const imageExtension = gameState === GameState.InProgress ? (sprite ? '-1' : '-2') : ''

    return (
        <div className={`absolute bottom-2 left-4 z-10 transition duration-${JUMP_DURATION} transform ${className} h-12 w-12`}>
            <img src={`/dinosaur${imageExtension}.png`} className="fill" />
        </div>
    )
}