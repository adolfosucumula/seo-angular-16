
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class HttpEndpointSetting {

  private readonly url = 'http://localhost:3000/';
  private readonly springURL = 'http://localhost:8090/';

  /**
   *
   * @param urlNumber Select the number of the endpoint URL. By default use 1 = 'http://localhost:3000/'
   *  2 = 'http://localhost:8090/'
   * @returns
   */
  endPointURL(urlNumber: number = 1) {

    if(urlNumber === 1){

      return this.url;

    }else if(urlNumber === 2){

      return this.springURL;

    }else{
      return null
    }

  }


  myHttpOption(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

}
