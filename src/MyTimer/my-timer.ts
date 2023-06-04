import {LitElement, html, css, CSSResult} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {play, pause, replay} from './icon.js';

@customElement("my-timer")
export default class MyTimer extends LitElement {
  static override styles: CSSResult = css`

    :host {
      display: inline-block;
      min-width: 4em;
      text-align: center;
      padding: 0.2em;
      margin: 0.2em 0.1em;
    }
    footer {
      user-select: none;
      font-size: 0.6em;
    }
    `;

  @property() duration = 60;
  @state() private end: number | null = null;
  @state() private remaining: number = 0;

  override render() {
    const {remaining, running} = this;
    const min = Math.floor(remaining / 60000);
    const sec = pad(min, Math.floor(remaining / 1000 % 60));
    const hun = pad(true, Math.floor(remaining % 1000 / 10));
    return html`
      ${min ? `${min}:${sec}` : `${sec}.${hun}`}
      <footer>
        ${remaining === 0 ? '' : running ?
          html`<span @click=${this.pause}>${pause}</span>` :
          html`<span @click=${this.start}>${play}</span>`}
        <span @click=${this.reset}>${replay}</span>
      </footer>
    `;
  }

  start() {
    this.end = Date.now() + this.remaining;
    this.tick();
  }

  pause() {
    this.end = null;
  }

  reset() {
    const running = this.running;
    this.remaining = this.duration * 1000;
    this.end = running ? Date.now() + this.remaining : null;
  }

  tick() {
    if (this.running) {
      this.remaining = Math.max(0, this.end! - Date.now());
      requestAnimationFrame(() => this.tick());
    }
  }

  get running() {
    return this.end && this.remaining;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.reset();
  }

}

function pad(pad: unknown, val: number): string | number {
  return pad ? String(val).padStart(2, '0') : val;
}
