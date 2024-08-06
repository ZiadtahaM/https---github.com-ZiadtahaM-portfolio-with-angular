import { Component } from '@angular/core';
// interface.ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
