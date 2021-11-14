export default function stripTo(s: string, l: number): string {
  if (s.length > l) {
    return `${s.substring(0, l)}...`;
  }
  return s;
}
