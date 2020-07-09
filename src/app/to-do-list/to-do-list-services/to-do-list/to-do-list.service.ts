import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ToDoItem } from '../../to-do-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(private http: HttpClient) { }

  public getAllToDoItems(): Observable<ToDoItem[]> {
    return this.http.get<any>('http://localhost:3000/api/todo/list').pipe(
      map(resp => resp.items)
    );
  }
}
