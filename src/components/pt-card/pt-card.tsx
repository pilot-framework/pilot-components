import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-card',
  styleUrl: 'pt-card.scss',
  shadow: true
})
export class PtCard {
  @Prop() imageSrc: any;

  get BEM(): string {
      const classArray = ['card'];

      return classArray.join(' ');
  }

  render() {
    return (
      <div class={this.BEM}>
        <div class="card__cover">
          <img src={this.imageSrc} />
        </div>
        <div class="card__content">
          <slot />
        </div>
      </div>
    );
  }
}
