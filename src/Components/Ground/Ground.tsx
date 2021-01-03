import React from 'react'
import { GameState } from '../Stage/Stage'

interface GroundProps {
    gameState: GameState
}

export const Ground: React.FC<GroundProps> = (props: GroundProps) => {
    const { gameState } = props
    return (
        <div className="absolute bottom-0 overflow-hidden whitespace-nowrap">
            <div className={`flex ${gameState === GameState.InProgress ? 'animate-ground1' : ''}`}>
                <img className="h-10 object-cover m-0" src="/ground.png" />
                <img className="h-10 object-cover m-0" src="/ground.png" />
            </div>
        </div>
    )
}