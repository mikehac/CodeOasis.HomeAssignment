import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RobotService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }
  public trackRobot(moves: string[]) {
    console.log(moves);
    return this.http.post<string[]>(this.baseUrl, moves).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
