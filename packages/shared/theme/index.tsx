import stableHash from "stable-hash"
import { useMemo } from "react"

export function ThemeProvider({children}: {children: React.ReactNode})  {
  const _ = useMemo(() => stableHash("test"),[])

  return <>{children}</>
}
