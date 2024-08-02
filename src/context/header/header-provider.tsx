import {
    Slot,
    component$,
    useContextProvider,
    useStore,
  } from "@builder.io/qwik";

  import { HeaderContext, HeaderState } from "~/context";
  
  export const HeaderProvider = component$(() => {
  
    const headerState = useStore<HeaderState>({
      bgheader: "transparent",
      menuIconColor: "black",
      logocolor: "black",
      isMenuOpen: false,
      isScrolled: false,
      headerIndex: 1,
      previousHeaderIndex: 0,
    });

    useContextProvider(HeaderContext, headerState);
  
    return <Slot />;
  });
  