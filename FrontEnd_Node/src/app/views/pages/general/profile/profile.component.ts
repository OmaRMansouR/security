import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isAdmin: any;
  constructor() { }

  ngOnInit(): void {
    
    if(localStorage.getItem('isAdmin') == 'false'){
      this.isAdmin = false;
 
    } else {
      this.isAdmin = true;       
    }
  }

}
