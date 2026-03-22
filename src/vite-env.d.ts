/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  type SplitTarget =
    | string
    | Element
    | Element[]
    | ReadonlyArray<Element | string>
    | null;

  export class SplitText {
    chars: Element[];
    lines: Element[];
    words: Element[];
    constructor(target: SplitTarget | SplitTarget[], vars?: Record<string, unknown>);
    revert(): void;
  }
}
