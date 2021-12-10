import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkMode:any
  ngOnInit(): void {
    
    this.isDarkMode =  localStorage.getItem('dark-mode')==='dark'
    
  }
  title = 'onefin';
  

  toggleMode(darkmode:any){
    this.isDarkMode=darkmode;
    if(this.isDarkMode)
    localStorage.setItem('dark-mode','dark');
    else
    localStorage.setItem('dark-mode','light')
  }
  checkMode(){
    if(this.isDarkMode)
      return 'dark-theme-mode'
    return ""
  }
}
