import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    {
      img: './assets/img/skill-icons/angular.png',
      title: 'Angular',
    },
    {
      img: './assets/img/skill-icons/typescript.png',
      title: 'Typescript',
    },
    {
      img: './assets/img/skill-icons/javascript.png',
      title: 'JavaScript',
    },
    {
      img: './assets/img/skill-icons/html.png',
      title: 'HTML',
    },
    {
      img: './assets/img/skill-icons/firebase.png',
      title: 'Firebase',
    },
    {
      img: './assets/img/skill-icons/git.png',
      title: 'Git',
    },
    {
      img: './assets/img/skill-icons/css.png',
      title: 'CSS',
    },
    {
      img: './assets/img/skill-icons/rest-api.png',
      title: 'Rest API',
    },
    {
      img: './assets/img/skill-icons/scrum.png',
      title: 'Scrum',
    },
    {
      img: './assets/img/skill-icons/material-design.png',
      title: 'Material Design',
    },
  ];
}
