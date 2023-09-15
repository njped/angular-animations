import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { transAnimation } from '../animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ])
    ]),

    // Using animation from animations.ts file
    // trigger('openClose', [
    //   transition('* => *', [
    //     useAnimation(transAnimation, {
    //       params: {
    //         height: 0,
    //         opacity: 1,
    //         backgroundColor: 'red',
    //         time: '1s'
    //       }
    //     })
    //   ])
    // ])
  ]
})
export class OpenCloseComponent {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
}
