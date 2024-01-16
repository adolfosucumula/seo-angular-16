import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

const metaTags = [
  { name: 'iled:site',
  content:"Iled Multi dimenssional; Iled md is a company of software developmen; Iled means something like I have light or I'm iluminated;"
  + "Iled is a software company; Startup iled; Startup iledmd."
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Iled Corporation';
  description = "Iled Multi dimenssional; Iled md is a company of software developmen; Iled means something like I have light or I'm iluminated;"
  + "Iled is a software company; Startup iled; Startup iledmd.";

  constructor(
    private titleService: Title,
    private metaService: Meta
  )
  {
      this.setSEOData(this.title, this.description)
  }

    setSEOData(title: string, description: string) {
      this.titleService.setTitle(title);
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.addTags( metaTags , true);
    }

    setCanonicalURL(){

    }
}

