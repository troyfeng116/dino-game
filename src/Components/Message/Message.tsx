import React from 'react'

import { GameState } from '../Stage/Stage'

interface MessageProps {
    gameState: GameState
}

export const Message: React.FC<MessageProps> = (props: MessageProps) => {
    const { gameState } = props

    if (gameState === GameState.InProgress) return null

    let messageText = ''
    let messageSubtext
    if (gameState === GameState.NotStarted) {
        messageText = 'Hit space or ↑ to start'
        messageSubtext = 'Jump using space or ↑ and avoid the obstacles'
    } else if (gameState === GameState.Dead) {
        messageText = 'Game Over'
        messageSubtext = 'Hit space or ↑ to restart'
    }

    return (
        <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase flex-col items-center">
            <h2 className="text-center text-2xl">{messageText}</h2>
            <p className="text-center text-sm">{messageSubtext}</p>
        </div>
    )
}
