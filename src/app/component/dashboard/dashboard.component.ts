import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent {
  title = 'Portfolio';
  imageList = [{
    name : "Angular",
    path : "assets/images/angular.webp"
  },{
    name: "HTML",
    path: "assets/images/html.png"
  },
  {
    name : "CSS",
    path : "assets/images/css.png"
  },
  {
    name : "Bootstrap" ,
    path : "assets/images/boostrap.png"
  },
  {
    name : "JavaScript" ,
    path : "assets/images/js.png"
  },
  {
    name : "TypeScript" ,
    path : "assets/images/ts.png"
  },
  {
    name : "Git" ,
    path : "assets/images/git.png"
  },
  {
    name : "JIRA" ,
    path : "assets/images/jira.png"
  }
]
ngOnInit(): void {
  // Optionally, adjust scroll position here
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page when the home component is loaded
}
contact(){
  window.open('https://www.linkedin.com/in/apeksha-acharya-994047165/')
}
}
