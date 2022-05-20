import type { ReactElement, ReactNode } from "react";

export type ComponentProps<T = unknown> = {
  className?: string;
  children?: ReactNode;
} & T;

export type Component<T = unknown> = (
  props: ComponentProps<T>
) => ReactElement | null;

export type Page<T = unknown> = {
  (props: T): ReactElement;
  config?: {
    providers: any[];
  };
};
