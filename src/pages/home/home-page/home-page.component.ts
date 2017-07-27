import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  students:Array<any> = [
    {"id":1,
    "name":"小明",
    "school":"South China Normal University",
    "yuanxi":"Computer",
    "ksid":"005",
    "date":"2016/10/01",
    "scroe":60},
    {"id":2,
    "name":"小红",
    "school":"South China Normal University",
    "yuanxi":"Math",
    "ksid":"004",
    "date":"2016/10/01",
    "scroe":70},
    {"id":3,
    "name":"小兰",
    "school":"South China Normal University",
    "yuanxi":"Forign Language",
    "ksid":"003",
    "date":"2016/10/01",
    "scroe":80},
    {"id":4,
    "name":"小王",
    "school":"South China Normal University",
    "yuanxi":"History",
    "ksid":"002",
    "date":"2016/10/01",
    "scroe":90},
    {"id":5,
    "name":"小刘",
    "school":"South China Normal University",
    "yuanxi":"Musical",
    "ksid":"001",
    "date":"2016/10/01",
    "scroe":59},
  ]
deleteLast(){
  this.students.pop()
}
saveNewUser(){
  this.students.push({
    "id":7,
    "name":"小黄",
    "school":"South China Normal University",
    "yuanxi":"Musical",
    "ksid":"007",
    "date":"2016/10/01",
    "scroe":99
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.students.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
      return 0;
    });
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.students.sort(function (a, b) {
      if (a.id < b.id) {
          return 1;
      }
        return 0;
      });
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.students.sort(function (a,b)
    {
      if (Math.random() > 0.5)
       {
         return 1;
       }
       if (Math.random() < 0.5) {
         return -1;
       }
       return 0;
    })
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
