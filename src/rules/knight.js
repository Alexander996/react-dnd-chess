export function canChangeKnightPosition(knightX, knightY, toX, toY) {
    const dx = toX - knightX;
    const dy = toY - knightY;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}