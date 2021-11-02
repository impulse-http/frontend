export default function chunkBy<T>(arr: T[], count: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i % count === 0) {
      result.push([]);
    }
    result[Math.floor(i / count)].push(arr[i]);
  }
  return result;
}
