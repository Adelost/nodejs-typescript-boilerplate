import { getEnv } from '../utils/env-utils'

const env = getEnv()

export default {
  CONFIG_TEST: 'CONFIG_TEST',
  ENV_TEST: env.ENV_TEST,
}
