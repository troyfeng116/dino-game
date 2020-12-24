import './Canvas.css'
import React, { MutableRefObject, useEffect, useRef } from 'react'

interface CanvasProps {
    width: number
    height: number
}

export const Canvas: React.FC<CanvasProps> = (props: CanvasProps) => {
    const { width, height } = props
    const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        if (context) {
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        }
    }, [])

    return <canvas ref={canvasRef} height={height} width={width}></canvas>
}
