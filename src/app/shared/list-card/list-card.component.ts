import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() listData: Array<any> = [];
  @Input() title: String = "";

  ngOnInit(): void {
    console.log({ list: this.listData })
  }
}
