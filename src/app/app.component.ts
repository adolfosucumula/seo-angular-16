import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

const metaTags = [{ name: 'iled:site', content:'Iled Multi dimenssional'  }];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seo-angular';

  constructor(
    private titleService: Title,
    private metaService: Meta
  )
  {
      this.setSEOData("SEO Angular", "SEO with Angular")
  }

    setSEOData(title: string, description: string) {
      this.titleService.setTitle(title);
      //this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.addTags( metaTags , true);
    }

    setCanonicalURL(){

    }
}

