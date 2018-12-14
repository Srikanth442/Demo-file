import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
import 'rxjs/add/operator/map';
 
import 'rxjs/add/operator/catch';
 
//import { Observable } from 'rxjs/Observable';
 
 
@Injectable()
 
export class FileService {
 
constructor(private http: Http) { }

//comparefiles():
 
//getAllEmployees(): Observable<> {
 
//try {
 
//return this.http.post('localhost:8080/file-rest/upload') .map(this.extractdata).catch(this.handleerror);
 
//}   catch (error) { console.log(error); }  }
 
//extractData(res: Response) {
 
//const body = res.json();
 
//return body || {};   }
 
//handleError(error: any) { return Observable.throw(error); }

}
