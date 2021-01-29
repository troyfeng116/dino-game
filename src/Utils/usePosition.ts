import React, { useEffect, useState } from 'react'

export interface ClientRect {
    x: number
    y: number
    width: number
    height: number
}

export const usePosition = (ref: React.MutableRefObject<HTMLElement | null>): ClientRect => {
    const [rect, setRect] = useState<ClientRect>(
        ref.current === null ? { x: 0, y: 0, width: 0, height: 0 } : { x: ref.current.clientLeft, y: ref.current.clientTop, width: ref.current.clientWidth, height: ref.current.clientHeight },
    )

    useEffect(() => {
        //console.log('useEffect fired')
        if (ref.current !== null) {
            //console.log(ref.current.getBoundingClientRect())
            setRect({ x: ref.current.offsetLeft, y: ref.current.offsetTop, width: ref.current.offsetWidth, height: ref.current.offsetHeight })
        }
    }, [ref.current?.offsetTop, ref.current?.offsetLeft])

    return rect
}
