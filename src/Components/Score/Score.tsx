import React from 'react'

const padInt = (x: number, length: number): string => {
    let leadingZeroes = ''
    for (let i = 0; i < length; i++) leadingZeroes += '0'
    return `${leadingZeroes}${x}`.slice(-length)
}

interface ScoreProps {
    score: number
}

export const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { score } = props
    return (
        <div className="absolute right-0">SCORE: {padInt(score, 5)}</div>
    )
}