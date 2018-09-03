import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'pt-icon',
    styleUrl: 'icon.scss',
    shadow: true
  })
  export class Icon {
    @Prop() variant: string;
    @Prop() size: 'lg' | 'default' = 'default';

    get BEM(): string {
      const classArray = ['icon'];

      classArray.push(`${classArray[0]}--${this.size}`);

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