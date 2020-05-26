import { readFileSync } from 'fs'
import { PROJECT_DIR } from '../root'

export function getEnv(): any {
  const env = {}
  try {
    const envOverride = JSON.parse(readFileSync(PROJECT_DIR + '/.local/env.json', 'utf8'))
    return { ...env, ...envOverride }
  } catch {
    return env
  }
}
