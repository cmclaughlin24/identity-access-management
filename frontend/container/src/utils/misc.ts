export function joinClassNames(...classNames: (string | undefined)[]): string {
  if (!classNames || classNames.length === 0) {
    return "";
  }

  return classNames.filter((name) => name).join(" ");
}
