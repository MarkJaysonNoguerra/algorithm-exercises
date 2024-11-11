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
  visited: Array<Array<boolean>>,
  maze: Array<Array<string>>,
  wall: string,
  currentPosition: Point,
  goal: Point,
  solvePaths: Point[]
): boolean => {
  // edge of maze
  if (
    currentPosition.x < 0 ||
    currentPosition.y < 0 ||
    currentPosition.x >= maze[0].length ||
    currentPosition.y >= maze[0].length
  ) {
    return false;
  }

  // is a wall
  if (maze[currentPosition.y][currentPosition.x] === wall) {
    return false;
  }

  //  is position visited
  if (visited[currentPosition.x][currentPosition.y]) {
    return false;
  }

  // is goal
  if (currentPosition.x === goal.x && currentPosition.y === goal.y) {
    solvePaths.push(currentPosition);
    return true;
  }

  visited[currentPosition.x][currentPosition.y] = true;
  solvePaths.push(currentPosition);

  for (const dir of dirs) {
    const next = { x: currentPosition.x + dir.x, y: currentPosition.y + dir.y };

    if (walk(visited, maze, wall, next, goal, solvePaths)) {
      return true;
    }
  }

  solvePaths.pop();

  return false;
};

export const mazeSolver = (
  maze: Array<Array<string>>,
  wall: string,
  startPoint: Point,
  endPoint: Point
): Point[] => {
  const visited = Array.from({ length: maze[0].length }, () =>
    Array.from({ length: maze[0].length }, () => false)
  );
  const solvePaths: Point[] = [];

  walk(visited, maze, wall, startPoint, endPoint, solvePaths);

  return solvePaths;
};
