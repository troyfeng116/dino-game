import React from 'react'

interface ScoreProps {
    score: number
}

export const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { score } = props
    return (
        <div>Score: {score}</div>
    )
}