import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() darkMode : EventEmitter<boolean> = new EventEmitter();
  constructor(public login:LoginService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
