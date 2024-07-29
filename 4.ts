import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() user :any;
}
Лістинг коду : user.component.htm
<div class="card">
    <h3> User name </h3>
    <img src="" alt="photo">
</div>
Лістинг коду : app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListUserComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'la4';
}

Лістинг коду:list- user.component.ts
import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  constructor(private http: HttpClient){

  }
  ngOnInit() {
    this.http.get("https://reqres.in/api/users").subscribe(users=>console.log(users))
}
}
Лістинг коду:list- user.component.ts update
import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {
  users:any;
  constructor(private http: HttpClient){
  }
  ngOnInit() {
    this.http.get("https://reqres.in/api/users").subscribe((users: any) => {
      this.users = users.data;
    });
  }
}

Лістинг коду: Редагування файлу user-list.component.html
<div class="list-container">
    <ng-container *ngFor = "let user of users">
        <app-user [user]="user"></app-user>
    </ng-container>
</div>
Лістинг коду: json
    "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },
Лістинг коду: Редагування файлу user.component.ts
import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
@Input() user :any;
ngOnInit() {
  console.log(this.user);
}
}

Лістинг коду: зміни у файл user.component.html
<div class="list-container">
  <div class="card" *ngFor="let user of users">
    <img src="{{ user.avatar }}" alt="{{ user.first_name }} {{ user.last_name }}" class="img-thumbnail user-avatar">
    <div class="card-body">
      <h5 class="card-title">{{ user.first_name }} {{ user.last_name }}</h5>
      <p class="card-text">Email: {{ user.email }}</p>
    </div>
  </div>
</div>
</div>
Лістинг коду: list-user.component.css:
.list-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1;
  }
  
 
  .img-thumbnail {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
  }
  
  .user-avatar {
    width: 100px;
    height: 100px;
    object-fit: cover; 
  }

