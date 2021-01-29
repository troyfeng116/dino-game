export const heightFunction = (time: number): number => {
    return 12 + 0.7 * time - 0.0014 * time * time
}
