import { Component, OnInit, Input } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

const metaTags = [{ name: 'iled:site', content:'Iled Multi dimenssional'  }];

import { navbarMenu } from './components/navbar/css-utils/menu';
import Typed  from 'typed.js'
import { Router } from '@angular/router';
import { autoWriteSettings } from './animation-settings';
import { myCssSelectors } from './css-selectors';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

  selectors = [
    'title', 'details'
  ];

  cssSelectors = myCssSelectors;

  urlPaths = {
    databaseIcon: "../../assets/img/database_process.ico",
    serverIcon: "../../assets/img/server-02.svg",
    webIcon: "../../assets/img/web-icon-02.svg",
    cloudIcon: "../../assets/img/cloud-icon-01.svg",
  }

  courses = [
      {
      name: "Web developer",
      icon: "fa-brands fa-html5 fa-2x",
      details: "Learn how to create website & web applications, with HTML5 and CSS3",
      selectorId: "web-application",
      selectors: this.selectors
    },
    {
      name: "Python start",
      icon: "fa-brands fa-python fa-2x",
      details: "Learn Python from thye begining; Learn how to create applications; Learn how to create games; Learn how to use Django Framework",
      selectorId: "python-start",
      selectors: this.selectors
    }
  ]

  isCourse: string = 'python-start';

  constructor(private router: Router,
    private titleService: Title,
    private metaService: Meta
    ){
      this.setSEOData("Iled", "SEO with Angular")
    }

  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    //this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.addTags( metaTags , true);
  }


  ngOnInit(): void {

    this.automatedCode01();
    this.automatedCode02();


  }

  showCourse(item: any){
    this.isCourse = item.selectorId;
  }

  automatedCode01(){
    autoWriteSettings('#code', [
      '<i>var</i> you = "Smart people"; <i>var</i> company = 10; '
    ])

  }

  automatedCode02(){

    const typed = new Typed('#code-02', {
      strings:
      [
        "<div> {{ user.username }} </div>",
      ],
      typeSpeed: 100,
      smartBackspace: false,

      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      contentType: 'null',
    });

  }

  spliteText(text: string){
    return text.split(";");
  }


  openPortfolio(){
    this.router.navigate(['']);
  }



}
