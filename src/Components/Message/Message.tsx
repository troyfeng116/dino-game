import React from 'react'
import { GameState } from '../Stage/Stage'

interface MessageProps {
    gameState: GameState
    messageText: string
}

export const Message: React.FC<MessageProps> = (props: MessageProps) => {
    const { gameState, messageText } = props

    if (gameState === GameState.InProgress || messageText.length === 0) return null

    return (
        <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl uppercase">
            {messageText}
        </div>
    )
}