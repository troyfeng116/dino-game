import React, { useEffect, useState } from 'react'

export interface ClientRect {
    x: number
    y: number
    width: number
    height: number
}

export const usePosition = (ref: React.MutableRefObject<HTMLElement | null>): ClientRect => {
    const [rect, setRect] = useState<ClientRect>(
        ref.current === null ? { x: 0, y: 0, width: 0, height: 0 } : { x: ref.current.offsetLeft, y: ref.current.offsetTop, width: ref.current.clientWidth, height: ref.current.clientHeight },
    )

    useEffect(() => {
        if (ref.current !== null) {
            setRect({ x: ref.current.offsetLeft, y: ref.current.offsetTop, width: ref.current.offsetWidth, height: ref.current.offsetHeight })
        }
    }, [ref.current?.offsetTop, ref.current?.offsetLeft])

    return rect
}

export const usePositionArr = (refArr: React.RefObject<HTMLDivElement | null>[]): ClientRect[] => {
    const [rectArr, setRectArr] = useState<ClientRect[]>(
        refArr.map((ref) =>
            ref.current === null ? { x: 0, y: 0, width: 0, height: 0 } : { x: ref.current.offsetLeft, y: ref.current.offsetTop, width: ref.current.clientWidth, height: ref.current.clientHeight },
        ),
    )

    useEffect(() => {
        const newRectArr = refArr.map((ref) =>
            ref.current === null ? { x: 0, y: 0, width: 0, height: 0 } : { x: ref.current.offsetLeft, y: ref.current.offsetTop, width: ref.current.clientWidth, height: ref.current.clientHeight },
        )
        setRectArr(newRectArr)
    }, [refArr, refArr[0]?.current?.offsetLeft, refArr[1]?.current?.offsetLeft, refArr[2]?.current?.offsetLeft])

    return rectArr
}

export const isIntersectingWithArr = (rect: ClientRect, arr: ClientRect[]): boolean => {
    for (const rect2 of arr) {
        if (isIntersecting(rect, rect2)) return true
    }
    return false
}

const isIntersecting = (r1: ClientRect, r2: ClientRect): boolean => {
    return Math.max(r1.x, r2.x) < Math.min(r1.x + r1.width, r2.x + r2.width) && Math.max(r1.y, r2.y) < Math.min(r1.y + r1.height, r2.y + r2.height)
}
