import { Component, Method, State } from '@stencil/core';

@Component({
  tag: 'pt-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class Modal {
    @State() isOpen: boolean = false;

    @Method() open() {
        this.isOpen = true;
    }

    get BEM(): string {
        const classArray = ['modal'];

        if(this.isOpen) {
            classArray.push('is-open');
        }
  
        return classArray.join(' ');
    }

    close = () => {
        this.isOpen = false;
    }

    render() {
        return (
            <div class={this.BEM}>
                <div class="modal__backdrop" onClick={this.close}></div>
                <div class="modal__content">
                    <div class="modal__header">
                        <slot slot="header"></slot>
                        <pt-button class="modal__close" icon-left="/assets/sprite.svg#close" onClick={this.close}></pt-button>
                    </div>
                    <div class="modal__main">
                        <slot></slot>
                    </div>
                    <div class="modal__footer">
                        <slot slot="footer"></slot>
                    </div>
                </div>
            </div>
        )
    }
}