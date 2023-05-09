import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private API_URL = environment.apiURL + '/admin/FileUpload';

  constructor(private http: HttpClient) {
  }

  public uploadMultipleFile(files: File[]): Observable<string[]> {
    const formData = new FormData();
    files.forEach((file: File) => formData.append('files', file));
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post<string[]>(`${this.API_URL}`, formData, {headers: headers});
  }
}
