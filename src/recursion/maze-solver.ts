type Point = {
  x: number;
  y: number;
};

const dirs: Point[] = [
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
];

const walk = (
  maze: string[][],
  wall: string,
  currentPoint: Point,
  goal: Point,
  paths: Point[],
  seen: boolean[][]
) => {
  // edge of the maze
  if (
    currentPoint.x < 0 ||
    currentPoint.y < 0 ||
    currentPoint.x >= maze[0].length ||
    currentPoint.y >= maze[0].length
  ) {
    return false;
  }

  // wall
  if (maze[currentPoint.y][currentPoint.x] === wall) {
    return false;
  }

  // already seen
  if (seen[currentPoint.y][currentPoint.x]) {
    return false;
  }

  // the goal
  if (currentPoint.x === goal.x && currentPoint.y === goal.y) {
    paths.push(currentPoint);
    return true;
  }

  paths.push(currentPoint);
  seen[currentPoint.y][currentPoint.x] = true;

  for (const dir of dirs) {
    const nextPoint = {
      x: currentPoint.x + dir.x,
      y: currentPoint.y + dir.y,
    };
    if (walk(maze, wall, nextPoint, goal, paths, seen)) {
      return true;
    }
  }

  paths.pop();
};

export const mazeSolver = (
  maze: string[][],
  wall: string,
  startPoint: Point,
  endPoint: Point
): Point[] => {
  const solvePath: Point[] = [];
  const seen = Array.from({ length: maze[0].length }, () =>
    Array.from({ length: maze[0].length }, () => false)
  );

  walk(maze, wall, startPoint, endPoint, solvePath, seen);

  return solvePath;
};
