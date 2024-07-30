import { createContextId } from "@builder.io/qwik";

export interface HeaderState {
    bgheader: string,
    menuIconColor: string,
    logocolor: string,
    isMenuOpen: boolean,
    isScrolled: boolean,
    headerIndex: number,
    previousHeaderIndex: number,
}

export const HeaderContext =
  createContextId<HeaderState>("header-context");
