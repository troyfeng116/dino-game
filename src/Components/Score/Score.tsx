import React from 'react'

interface ScoreProps {
    score: number
}

const padInt = (x: number, length: number): string => {
    let leadingZeroes = ''
    for (let i = 0; i < length; i++) leadingZeroes += '0'
    return `${leadingZeroes}${x}`.slice(-length)
}

export const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { score } = props
    return (
        <div className="absolute right-0">SCORE: {padInt(score, 5)}</div>
    )
}