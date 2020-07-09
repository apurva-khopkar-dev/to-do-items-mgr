import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ToDoItem } from '../../to-do-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ToDoListOperationsService {

  constructor(private http: HttpClient) { }

  public addItem(item: ToDoItem): Observable<ToDoItem[]>  {
    return this.http.post<any>(`http://localhost:3000/api/todo/add`, item).pipe(
     map(resp => resp.items)
   );
 }

  public updateItem(item: ToDoItem): Observable<ToDoItem[]> {
   return this.http.put<any>(`http://localhost:3000/api/todo/${item.id}`, item).pipe(
      map(resp => resp.items)
    );
  }

  public deleteItem(itemId: number): Observable<ToDoItem[]>  {
     return this.http.delete<any>(`http://localhost:3000/api/todo/${itemId}`).pipe(
      map(resp => resp.items)
    );
  }
}
