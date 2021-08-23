const levelToReadableLevel = (level?: number) => {
  if (!level) return "";
  return LEVEL_TRANSLATOR[level] ?? ""
}

const LEVEL_TRANSLATOR: Record<number, string> = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
  4: "Very Hard",
  5: "Hardcore",
}

export default levelToReadableLevel;