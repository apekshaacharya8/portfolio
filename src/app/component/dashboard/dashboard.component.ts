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
}
