import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fruits distribution';
  type = 'ComboChart';
  data = [
    ["Apples", 3, 2, 2.5],
    ["Oranges", 2, 3, 2.5],
    ["Peras", 1, 5, 3],
    ["Bananas", 3, 9, 6],
    ["Plums", 4, 2, 3]
  ];
  columnNames = ['Fruits', 'Jane', 'Jone', 'Average'];
  options = {
    hAxis: {
      title: 'Person'
    },
    vAxis: {
      title: 'Fruits'
    },
    seriesType: 'bars',
    series: {2: {type: 'line'}}
  };
  width = 550;
  height = 400;
}
