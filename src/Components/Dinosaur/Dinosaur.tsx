import React, { useEffect, useState } from 'react'

const JUMP_HEIGHT = 32
const JUMP_DURATION = 1000

enum JumpState {
    INITIAL = 'INITIAL',
    START = 'START',
    UP = 'UP',
    DOWN = 'DOWN',
    LANDED = 'LANDED'
}

export const Dinosaur: React.FC = () => {
    const [jumpState, setJumpState] = useState<JumpState>(JumpState.INITIAL)

    useEffect(() => {
        const handleKeyDown = (e: { key: string }) => {
            if (e.key === ' ') jump()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        console.log(jumpState)
        switch (jumpState) {
            case JumpState.INITIAL:
                break
            case JumpState.START:
                setTimeout(() => setJumpState(JumpState.DOWN), JUMP_DURATION)
                break
            case JumpState.DOWN:
                setTimeout(() => setJumpState(JumpState.LANDED), JUMP_DURATION)
                break
            case JumpState.LANDED:
                setTimeout(() => setJumpState(JumpState.INITIAL), JUMP_DURATION)
                break
        }
    }, [jumpState])

    const jump = () => {
        if (jumpState !== JumpState.INITIAL) return
        console.log("STATE: " + jumpState + " JUMP!!!")
        setJumpState(JumpState.START)
    }

    let className = ''
    switch (jumpState) {
        case JumpState.INITIAL:
            className = 'translate-y-0'
            break
        case JumpState.LANDED:
            className = 'translate-y-0'
            break
        case JumpState.START:
            className = `ease-out -translate-y-${JUMP_HEIGHT}`
            break
        case JumpState.DOWN:
            className = 'ease-in translate-y-0'
            break
    }

    return (
        <div className={`transition duration-${JUMP_DURATION} transform ${className} border border-black h-12 w-12 mt-auto`}>
            <img src="/dinosaur.png" className="fill" />
        </div>
    )
}