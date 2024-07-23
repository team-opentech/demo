import { createContextId } from "@builder.io/qwik";

export interface HeaderState {
    bgheader: string,
    menuIconColor: string,
    logocolor: string,
}

export const HeaderContext =
  createContextId<HeaderState>("header-context");
