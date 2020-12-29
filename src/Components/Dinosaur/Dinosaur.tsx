import React, { useEffect, useState } from 'react'

const JUMP_HEIGHT = 24
const JUMP_DURATION = 300

enum JumpState {
    GROUND = 'GROUND',
    UP = 'UP',
    DOWN = 'DOWN',
}

export const Dinosaur: React.FC = () => {
    const [jumpState, setJumpState] = useState<JumpState>(JumpState.GROUND)
    const [sprite, setSprite] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setSprite(!sprite), 150)
    }, [sprite])

    useEffect(() => {
        const handleKeyDown = (e: { key: string }) => {
            if (e.key === ' ') jump()
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

    return (
        <div className={`absolute bottom-4 z-10 transition duration-${JUMP_DURATION} transform ${className} border border-black h-12 w-12 mt-auto`}>
            <img src={`/dinosaur-${sprite ? '1' : '2'}.png`} className="fill" />
        </div>
    )
}