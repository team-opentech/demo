import { component$, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { Alignment, Fit, Layout, Rive } from '@rive-app/canvas';

interface RivSource {
  src: string;
}

export const RiveComponent = component$(({ src }: RivSource) => {

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${src}: ${response.statusText}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const canvas = document.getElementById('riveCanvas') as HTMLCanvasElement;
      if (!canvas) {
        throw new Error('Canvas element not found');
      }

      const rive = new Rive({
        buffer: arrayBuffer,
        canvas: canvas,
        autoplay: true,
        layout: new Layout({
          fit: Fit.Cover,
          alignment: Alignment.Center,
        }),
        onLoad: () => {
          // Prevent a blurry canvas by using the device pixel ratio
          rive.resizeDrawingSurfaceToCanvas();
        }
      });
    } catch (error) {
      console.error('Error loading Rive file:', error);
    }
  });

  return <canvas id="riveCanvas" width="1920" height="832"></canvas>;
});
