
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).map((r: Response) => r.json());
  }

  getTodos() {
    return this.http.get('...').map((r: Response) => r.json());
  }

  delete(id) {
    return this.http.delete('...').map((r: Response) => r.json());
  }
}