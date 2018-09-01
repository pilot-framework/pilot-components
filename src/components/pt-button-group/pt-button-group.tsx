import { Component } from '@stencil/core';

@Component({
  tag: 'pt-button-group',
  styleUrl: 'pt-button-group.scss',
  shadow: false
})
export class PtButtonGroup {

  get BEM(): string {
      const classArray = ['button-group'];

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
