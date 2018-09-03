import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'pt-icon',
    styleUrl: 'icon.scss',
    shadow: true
  })
  export class Icon {
    @Prop() variant: string;

    get BEM(): string {
      const classArray = ['icon'];

      return classArray.join(' ');
    }

    render() {
      return (
        <svg className={this.BEM}>
          <use xlinkHref={this.variant} />
        </svg>
      )
    }
  }