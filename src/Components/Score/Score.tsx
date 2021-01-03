import React from 'react'

const padInt = (x: number, length: number): string => {
    let leadingZeroes = ''
    for (let i = 0; i < length; i++) leadingZeroes += '0'
    return `${leadingZeroes}${x}`.slice(-length)
}

interface ScoreProps {
    score: number
    highScore: number
}

export const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { score, highScore } = props
    return (
        <div className="absolute right-0">
            <span>HIGH SCORE: {padInt(Math.max(score, highScore), 5)}</span>
            <span className="mx-10">SCORE: {padInt(score, 5)}</span>
        </div>
    )
}