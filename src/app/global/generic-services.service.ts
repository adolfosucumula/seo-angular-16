import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEndpointSetting } from './httpEndpointSetting';

@Injectable({
  providedIn: 'root'
})
export class GenericServices {

  constructor(
    private endPoint: HttpEndpointSetting,
    private http: HttpClient
    ){}

  /**
   *
   * @param table
   * @param objToCreate
   * @returns
   */
  create<T>(table: T | any, objToCreate: T | any): Observable <T | T []> {
    return this.http.post <T | T[]>(`${this.endPoint.endPointURL() + table}`, objToCreate );
  }

  /**
   *
   * @param table
   * @returns
   */
  read<T>(table: T | any): Observable <T | T[]> {
    return this.http.get <T | T[]>(`${ this.endPoint.endPointURL(2) + table }`
    );
  }

  /**
   *
   * @param table
   * @param objToFind
   * @returns
   */
  find<T>(table: T | any, objToFind: T | any): Observable <T | T[]> {
    return this.http.get <T | T[]>(`${ this.endPoint.endPointURL(1) + table }/${ objToFind }`
    );
  }

   /**
   *
   * @param params
   * @returns
   */
   findObjts<T>(tableName: string, params: T | any): Observable <T | T[]> {
    return this.http.get <T | T[]>(`${ this.endPoint.endPointURL() + tableName + '?' + params }`
    );
  }

  /**
   *
   * @param table
   * @param objToUpdate
   * @returns
   */
  update<T>(table: T | any, objToUpdate: T | any): Observable <T | T[]> {
    return this.http.put <T | T[]> (`${ this.endPoint.endPointURL() + table }/${ objToUpdate }`, table
    );
  }

  updateByParam<T>(table: T | any, objToUpdate: T | any): Observable <T | T[]> {
    return this.http.put <T | T[]> (`${ this.endPoint.endPointURL() + table }/${ objToUpdate }`, table
    );
  }


  /**
   *
   * @param table
   * @param objToUpdate
   * @returns
   */
  updateByPatch<T>(table: T | any, objToUpdate: T | any): Observable <T | T[]> {
    return this.http.patch <T | T[]> (`${this.endPoint.endPointURL() + table.tableName}/${objToUpdate}`, table
    );
  }

  /**
   *
   * @param table
   * @param objToDelete
   * @returns
   */
  delete<T>(table: T | any, objToDelete: T): Observable <T | T[]> {
    return this.http.delete <T | T[]> (`${this.endPoint.endPointURL() + table.tableName}/${objToDelete}`
    )
  }

}
