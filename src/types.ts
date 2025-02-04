import type { GluegunToolbox } from 'gluegun'
import type { SetupArgs } from './toolbox/setup/types'
import type { BuildArgs } from './toolbox/build/index'

export type Device =
  | 'darwin'
  | 'linux'
  | 'windows_nt'
  | 'esp'
  | 'esp8266'
  | 'esp32'
  | 'wasm'
  | 'pico'

export interface XSDevToolbox extends GluegunToolbox {
  setup: Record<
    Device,
    (() => Promise<void>) | ((args: SetupArgs) => Promise<void>)
  >
  update: Record<
    Device,
    (() => Promise<void>) | ((args: SetupArgs) => Promise<void>)
  >
  build: (args: BuildArgs) => Promise<void>
}
