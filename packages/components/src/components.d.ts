/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WebComponentsDemoLoading {
        /**
          * The SVG stroke color
         */
        "color": string;
    }
}
declare global {
    interface HTMLWebComponentsDemoLoadingElement extends Components.WebComponentsDemoLoading, HTMLStencilElement {
    }
    var HTMLWebComponentsDemoLoadingElement: {
        prototype: HTMLWebComponentsDemoLoadingElement;
        new (): HTMLWebComponentsDemoLoadingElement;
    };
    interface HTMLElementTagNameMap {
        "web-components-demo-loading": HTMLWebComponentsDemoLoadingElement;
    }
}
declare namespace LocalJSX {
    interface WebComponentsDemoLoading {
        /**
          * The SVG stroke color
         */
        "color"?: string;
    }
    interface IntrinsicElements {
        "web-components-demo-loading": WebComponentsDemoLoading;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "web-components-demo-loading": LocalJSX.WebComponentsDemoLoading & JSXBase.HTMLAttributes<HTMLWebComponentsDemoLoadingElement>;
        }
    }
}
