/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface PtAccordionContent {
      'isOpen': boolean;
    }
  }

  interface HTMLPtAccordionContentElement extends StencilComponents.PtAccordionContent, HTMLStencilElement {}

  var HTMLPtAccordionContentElement: {
    prototype: HTMLPtAccordionContentElement;
    new (): HTMLPtAccordionContentElement;
  };
  interface HTMLElementTagNameMap {
    'pt-accordion-content': HTMLPtAccordionContentElement;
  }
  interface ElementTagNameMap {
    'pt-accordion-content': HTMLPtAccordionContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-accordion-content': JSXElements.PtAccordionContentAttributes;
    }
  }
  namespace JSXElements {
    export interface PtAccordionContentAttributes extends HTMLAttributes {
      'isOpen'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PtAccordionHeader {
      'isOpen': boolean;
      'title': string;
    }
  }

  interface HTMLPtAccordionHeaderElement extends StencilComponents.PtAccordionHeader, HTMLStencilElement {}

  var HTMLPtAccordionHeaderElement: {
    prototype: HTMLPtAccordionHeaderElement;
    new (): HTMLPtAccordionHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'pt-accordion-header': HTMLPtAccordionHeaderElement;
  }
  interface ElementTagNameMap {
    'pt-accordion-header': HTMLPtAccordionHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-accordion-header': JSXElements.PtAccordionHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface PtAccordionHeaderAttributes extends HTMLAttributes {
      'isOpen'?: boolean;
      'title'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PtAccordionItem {
      'isOpen': boolean;
      'title': string;
    }
  }

  interface HTMLPtAccordionItemElement extends StencilComponents.PtAccordionItem, HTMLStencilElement {}

  var HTMLPtAccordionItemElement: {
    prototype: HTMLPtAccordionItemElement;
    new (): HTMLPtAccordionItemElement;
  };
  interface HTMLElementTagNameMap {
    'pt-accordion-item': HTMLPtAccordionItemElement;
  }
  interface ElementTagNameMap {
    'pt-accordion-item': HTMLPtAccordionItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-accordion-item': JSXElements.PtAccordionItemAttributes;
    }
  }
  namespace JSXElements {
    export interface PtAccordionItemAttributes extends HTMLAttributes {
      'isOpen'?: boolean;
      'title'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PtAccordion {

    }
  }

  interface HTMLPtAccordionElement extends StencilComponents.PtAccordion, HTMLStencilElement {}

  var HTMLPtAccordionElement: {
    prototype: HTMLPtAccordionElement;
    new (): HTMLPtAccordionElement;
  };
  interface HTMLElementTagNameMap {
    'pt-accordion': HTMLPtAccordionElement;
  }
  interface ElementTagNameMap {
    'pt-accordion': HTMLPtAccordionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-accordion': JSXElements.PtAccordionAttributes;
    }
  }
  namespace JSXElements {
    export interface PtAccordionAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PtAlert {
      'icon': string;
      'type': 'submit' | 'alert';
      'variant': 'info' | 'success' | 'warning' | 'danger';
    }
  }

  interface HTMLPtAlertElement extends StencilComponents.PtAlert, HTMLStencilElement {}

  var HTMLPtAlertElement: {
    prototype: HTMLPtAlertElement;
    new (): HTMLPtAlertElement;
  };
  interface HTMLElementTagNameMap {
    'pt-alert': HTMLPtAlertElement;
  }
  interface ElementTagNameMap {
    'pt-alert': HTMLPtAlertElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-alert': JSXElements.PtAlertAttributes;
    }
  }
  namespace JSXElements {
    export interface PtAlertAttributes extends HTMLAttributes {
      'icon'?: string;
      'type'?: 'submit' | 'alert';
      'variant'?: 'info' | 'success' | 'warning' | 'danger';
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PtButton {
      'disabled': boolean;
      'iconLeft': string;
      'iconRight': string;
      'size': 'default' | 'sm' | 'lg';
      'text': string;
      'type': 'submit' | 'button';
      'variant': 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'link';
    }
  }

  interface HTMLPtButtonElement extends StencilComponents.PtButton, HTMLStencilElement {}

  var HTMLPtButtonElement: {
    prototype: HTMLPtButtonElement;
    new (): HTMLPtButtonElement;
  };
  interface HTMLElementTagNameMap {
    'pt-button': HTMLPtButtonElement;
  }
  interface ElementTagNameMap {
    'pt-button': HTMLPtButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-button': JSXElements.PtButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface PtButtonAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'iconLeft'?: string;
      'iconRight'?: string;
      'onOnClick'?: (event: CustomEvent) => void;
      'size'?: 'default' | 'sm' | 'lg';
      'text'?: string;
      'type'?: 'submit' | 'button';
      'variant'?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'link';
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PtCard {
      'imageSrc': any;
    }
  }

  interface HTMLPtCardElement extends StencilComponents.PtCard, HTMLStencilElement {}

  var HTMLPtCardElement: {
    prototype: HTMLPtCardElement;
    new (): HTMLPtCardElement;
  };
  interface HTMLElementTagNameMap {
    'pt-card': HTMLPtCardElement;
  }
  interface ElementTagNameMap {
    'pt-card': HTMLPtCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-card': JSXElements.PtCardAttributes;
    }
  }
  namespace JSXElements {
    export interface PtCardAttributes extends HTMLAttributes {
      'imageSrc'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PtIcon {
      'size': 'lg' | 'default';
      'variant': string;
    }
  }

  interface HTMLPtIconElement extends StencilComponents.PtIcon, HTMLStencilElement {}

  var HTMLPtIconElement: {
    prototype: HTMLPtIconElement;
    new (): HTMLPtIconElement;
  };
  interface HTMLElementTagNameMap {
    'pt-icon': HTMLPtIconElement;
  }
  interface ElementTagNameMap {
    'pt-icon': HTMLPtIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'pt-icon': JSXElements.PtIconAttributes;
    }
  }
  namespace JSXElements {
    export interface PtIconAttributes extends HTMLAttributes {
      'size'?: 'lg' | 'default';
      'variant'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;