import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { RiveComponent } from "./rive-component/rive-component";
import { Gallery } from "./gallery/gallery"
import { ColorPalette } from "./ColorPalette/ColorPalette";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const customComponents: RegisteredComponent[] = [
  {
    component: RiveComponent,
    name: "RiveComponent",
    inputs: [
      {
        name: "src",
        type: "string",
        required: true,
        helperText: "Source string of Riv",
      },
    ],
  },
  {
    component: Gallery,
    name: "Gallery",
    inputs: [
      {
        name: "gallery",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png"],
            defaultValue: "",
            required: true,
            helperText: "Select an image",
          },
        ],
        defaultValue: [],
        required: true,
        helperText: "Add images to the gallery",
      },
    ],
  },
  {
    component: ColorPalette,
    name: "ColorPalette",
    inputs: [
      {
        name: "colors",
        type: "list",
        subFields: [
          {
            name: "name",
            type: "string",
            defaultValue: "",
            required: true,
            helperText: "El nombre del color",
          },
          {
            name: "color",
            type: "string", // Cambia esto a string para poder usar validación personalizada
            defaultValue: "#000000",
            required: true,
            helperText: "El valor hexadecimal del color",
          },
          {
            name: "border",
            type: "boolean",
            defaultValue: false,
            helperText: "Indica si el color tiene borde",
          },
          {
            name: "text",
            type: "boolean",
            defaultValue: false,
            helperText: "Indica si el color es para texto",
          },
        ],
      },
    ],
  },
];
