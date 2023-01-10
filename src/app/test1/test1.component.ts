import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnChanges, OnDestroy, OnInit {
  @Input() datos!: object;
  @Input() vali!: boolean;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Chances ->', changes);
  }
  ngOnInit(): void {
    console.log('Chances ->');
  }
  ngOnDestroy(): void {
    console.log('Chances ->');
  }
}
