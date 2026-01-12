
export interface WidgetMeta {
  id: string
  name: string
  version: string
  configurations: Record<string, {
    type: string
    defaultValue: unknown
  }>
}

type FC<Props> = (props: Props) => unknown

export type ReactWidget<Meta extends WidgetMeta> = FC<ReactWidgetProps<Meta>>

type ReactWidgetProps<Meta extends WidgetMeta> = {
    [K in keyof Meta["configurations"]]: Meta["configurations"][K]["defaultValue"]
}