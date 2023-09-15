import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-remove',
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('1s', style({ opacity: 0 }))
    ])
  ]),
  trigger('myOtherInsertRemoveTrigger', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s', style({ transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      animate('0.5s', style({ transform: 'translateX(100%)' }))
    ])
  ]),
]
})
export class InsertRemoveComponent {
  isShown = true

  toggle() {
    this.isShown = !this.isShown
  }
}
