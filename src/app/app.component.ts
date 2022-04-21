import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';
  name="peter parker";
  thisDay=Date.now();
  word="Aspire Systems";
  money=500;
}
