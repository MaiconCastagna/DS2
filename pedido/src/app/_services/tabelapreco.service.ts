import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaprecoService {

  constructor(private http: HttpClient) { }

  public find(): Observable<TabelaprecoEntity[]> {
    return this.http.get<TabelaprecoEntity[]>(environment.urlSaaS + '/tabelaprecos');
  }

  public save(tabelapreco: TabelaprecoEntity) {
    if (tabelapreco.id) {
      return this.update(tabelapreco);
    } else {
      return this.create(tabelapreco);
    }
  }

  public delete(id: number): Observable<TabelaprecoEntity> {
    return this.http.delete<TabelaprecoEntity>(environment.urlSaaS + '/tabelaprecos/' + id);
  }

  private create(tabelapreco: TabelaprecoEntity): Observable<TabelaprecoEntity> {
    return this.http.post<TabelaprecoEntity>(environment.urlSaaS + '/tabelaprecos', tabelapreco);
  }

  private update(tabelapreco: TabelaprecoEntity): Observable<TabelaprecoEntity> {
    return this.http.put<TabelaprecoEntity>(environment.urlSaaS + '/tabelaprecos/' + tabelapreco.id, tabelapreco);
  }
}

export class TabelaprecoEntity {
  id: number;
  codigo: string;
  nome: string;
  fator: number;
}
