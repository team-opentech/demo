import { component$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { SpeakLocale } from "qwik-speak";
import {
  useSpeakLocale,
  useSpeakConfig,
  useDisplayName,
  translatePath,
  inlineTranslate,
} from "qwik-speak";
// import LangIcon from "../../assets/svg/lang-icon.svg?jsx";
import { LangIcon } from "../icons/lang-icon";

export const LanguageSelector = component$((props: any) => {
  const pathname = useLocation().url.pathname;
  const t = inlineTranslate();
  const dn = useDisplayName();
  const openedMenu = props.openedMenu;
  const getPath = translatePath();

  const loc = useLocation();
  const locale = useSpeakLocale();
  const config = useSpeakConfig();
  const state = useStore({ isToggled: false, selectedLanguage: locale.lang });

  return (
    // <select name="language" id="language-selector">
    //   {config.supportedLocales.map((value) => (
    //     <option key={value.lang} value={value.lang}>
    //       {dn(value.lang, { type: "language" })}
    //     </option>
    //   ))}
    //   <option value="en">EN</option>
    //   <option value="es">ES</option>
    // </select>
    <div class="relative inline-block text-left z-40">
      <div>
        {/* <LangIcon /> */}
        <button
          type="button"
          class={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${
            openedMenu
              ? "bg-black text-white ring-0 ring-inset ring-gray-900 hover:bg-black delay-[0.2s] lg:delay-[0.4s]"
              : "bg-white text-gray-900 ring-0 ring-inset ring-gray-300 hover:bg-gray-50 delay-[0.9s] lg:delay-[0.9s]"
          }`}
          id="language-selector"
          aria-expanded="true"
          aria-haspopup="true"
          onClick$={() => {
            state.isToggled = !state.isToggled;
          }}
        >
          <LangIcon opened={openedMenu} />

          {state.selectedLanguage.split("-")[0].toUpperCase()}
          <svg
            class="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      {state.isToggled && (
        <div
          class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div class="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            {config.supportedLocales.map((value, index) => (
              <a
                key={value.lang}
                id={`lang-item-${index}`}
                role="langitem"
                class={"text-gray-700 block px-4 py-2 text-sm capitalize"}
                href={getPath(pathname, value.lang)}
              >
                {dn(value.lang, { type: "language" })}
              </a>
            ))}

            {/* <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              EN
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              ES
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
});
