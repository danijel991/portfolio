import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    {
      img: 'assets/img/iconSkills/javascript.png',
      title: 'JavaScript',
    },
    {
      img: 'assets/img/iconSkills/angular.png',
      title: 'Angular',
    },
    {
      img: 'assets/img/iconSkills/html.png', 
      title: 'HTML',
    },
    {
      img: 'assets/img/iconSkills/css.png',
      title: 'CSS',
    },
    {
      img: 'assets/img/iconSkills/scrum.png',
      title: 'Scrum',
    },
    {
      img: 'assets/img/iconSkills/git.png',
      title: 'Git',
    },
    {
      img: 'assets/img/iconSkills/material _design.png',
      title: 'Material Design',
    },
    {
      img: 'assets/img/iconSkills/rest-api.png',
      title: 'Rest API',
    },
    {
      img: 'assets/img/iconSkills/firebase.png',
      title: 'Firebase',
    },
  ];
}