import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadFromContentfulService {

  constructor() { }

  private client = createClient({
    space: 'wntfq2uie8te',
    accessToken: '2-lcILdwNhtZzGkI6fytGzbKF_3beRptoHCzGMISRTA'
  })

  loadVagaDeManobradorTrofa_dez_2023(){
    this.client.getEntries().then(entries => console.log(entries));
    const promise = this.client.getEntries();
    //.then(entries => console.log(entries));
    return from(promise);
  }


}
