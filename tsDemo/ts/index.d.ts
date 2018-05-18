export * from 'ts/export1/export2'
export * from 'ts/export3/export2'
export * from 'ts/export5/export2'
export * from 'ts/export_inner'

declare namespace D3 {
  export interface Selectors {
      select: {
          (selector: string): Selection;
          (element: EventTarget): Selection;
      };
  }

  export interface Event {
      x: number;
      y: number;
  }

  export interface Base extends Selectors {
      event: Event;
  }
}

declare var d3: D3.Base;

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
 }