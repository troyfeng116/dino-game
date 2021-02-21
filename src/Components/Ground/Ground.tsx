import React, { useEffect, useMemo, useState } from 'react'

import { GameState } from '../Stage'

interface GroundProps {
    gameState: GameState
}

export const Ground: React.FC<GroundProps> = (props: GroundProps) => {
    const { gameState } = props
    const [dx, setDx] = useState<number>(0)

    useEffect(() => {
        if (gameState !== GameState.InProgress) {
            setDx(0)
            return
        }
        const timeout = setTimeout(() => {
            if (dx >= 680) {
                setDx(0)
            } else {
                setDx(dx + 10)
            }
        }, 30)
        return () => clearTimeout(timeout)
    }, [dx, gameState])

    return useMemo(
        () => (
            <div className="relative w-full h-10 mt-auto overflow-hidden whitespace-nowrap">
                <div className={'absolute bottom-0 left-0 flex'} style={{ left: -dx, transition: '30ms left linear' }}>
                    <img className="h-10 object-cover m-0" src="/ground.png" width={680} />
                    <img className="h-10 object-cover m-0" src="/ground.png" width={680} />
                </div>
            </div>
        ),
        [dx, gameState],
    )
}
