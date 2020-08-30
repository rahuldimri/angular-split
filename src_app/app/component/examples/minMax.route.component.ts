import { Component, ChangeDetectionStrategy } from '@angular/core'

import { AComponent } from './AComponent'

@Component({
  selector: 'sp-ex-min-max',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'split-example-page',
  },
  styles: [
    `
      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .txt-min,
      .txt-max,
      .txt-minmax {
        pointer-events: none;
        position: absolute;
        opacity: 0;
        transition: opacity 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .txt-min > p,
      .txt-max > p,
      .txt-minmax > p {
        font-size: 30px;
        font-weight: bold;
        color: #cccccc;
        text-align: center;
      }

      as-split-area {
        background: lightblue;
        transition: background 0.2s;
        position: relative;
        overflow: hidden !important;
      }

      as-split-area > p {
        position: absolute;
        font-size: 12px;
        font-weight: bold;
        padding: 5px;
        line-height: 12px;
      }

      as-split-area.as-min {
        background: green;
      }
      as-split-area.as-min .txt-min {
        opacity: 1;
      }
      as-split-area.as-max {
        background: red;
      }
      as-split-area.as-max .txt-max {
        opacity: 1;
      }
      as-split-area.as-min.as-max {
        background: #ff77e7;
      }
      as-split-area.as-min.as-max .txt-minmax {
        opacity: 1;
      }
    `,
  ],
  template: `
    {{ testChangeDetectorRun() }}
    <div class="container">
      <sp-example-title [type]="exampleEnum.MINMAX"></sp-example-title>
      <h5>Multiple splits</h5>
      <div style="height: 500px;">
        <as-split direction="horizontal" unit="pixel">
          <as-split-area [size]="200" [minSize]="100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [size]="200" [minSize]="100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [size]="200" [minSize]="100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [size]="200" [minSize]="100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </as-split-area>
          <as-split-area [size]="200" [minSize]="100">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </as-split-area>
          <as-split-area [size]="200" [minSize]="100">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
              illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </as-split-area>
        </as-split>
      </div>
      <h5>Percent mode:</h5>
      <div class="split-example ex-percent">
        <as-split unit="percent" [restrictMove]="restrictMove" gutterSize="30" (dragEnd)="log($event)">
          <as-split-area size="30" minSize="20" maxSize="30">
            <p>size="30"<br />minSize="20"<br />maxSize="30"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </as-split-area>
          <as-split-area size="40" minSize="30" maxSize="50">
            <p>size="40"<br />minSize="30"<br />maxSize="50"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </as-split-area>
          <as-split-area size="30" minSize="20" maxSize="50">
            <p>size="30"<br />minSize="20"<br />maxSize="50"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </as-split-area>
        </as-split>
      </div>
      <h5>Pixel mode:</h5>
      <div class="split-example ex-pixel">
        <as-split unit="pixel" [restrictMove]="restrictMove" gutterSize="30" (dragEnd)="log($event)">
          <as-split-area size="200" minSize="100" maxSize="200">
            <p>size="200"<br />minSize="100"<br />maxSize="200"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </as-split-area>
          <as-split-area size="*">
            <p>size="*"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </as-split-area>
          <as-split-area size="150" lockSize="true">
            <p>size="150"<br />lockSize="true"<br /><br />Same as<br />minSize="150"<br />maxSize="150"</p>
            <div class="txt-minmax">
              <p>MIN<br />&<br />MAX</p>
            </div>
          </as-split-area>
          <as-split-area size="250" minSize="250" maxSize="400">
            <p>size="250"<br />minSize="250"<br />maxSize="400"</p>
            <div class="txt-min"><p>MIN</p></div>
            <div class="txt-max"><p>MAX</p></div>
          </as-split-area>
        </as-split>
      </div>
      <br />
      <div class="btns">
        <button class="btn btn-warning" (click)="restrictMove = restrictMove ? false : true">
          {{ 'Restrict move: "' + restrictMove + '"' }}
        </button>
      </div>
    </div>
  `,
})
export class MinMaxComponent extends AComponent {
  restrictMove: boolean = false

  //
  log(x) {
    console.log(
      'dragEnd ',
      x.sizes,
      ' total > ',
      x.sizes.reduce((t, s) => t + s, 0),
    )
  }
}
