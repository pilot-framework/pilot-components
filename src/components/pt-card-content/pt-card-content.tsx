import { Component } from '@stencil/core';

@Component({
  tag: 'pt-card-content',
  styleUrl: 'pt-card-content.scss',
  shadow: true
})
export class PtCardContent {

  get BEM(): string {
      const classArray = ['card-content'];

      return classArray.join(' ');
  }

  render() {
    return (
      <div class={this.BEM}>
        <slot />
      </div>
    );
  }
}
