export function getInputTextError(target: string): string {
  // case : cannot be empty
  if (target.length === 0) {
    return "Text cannot be empty";
  }
  // case : cannot include special characters
  return "";
}
