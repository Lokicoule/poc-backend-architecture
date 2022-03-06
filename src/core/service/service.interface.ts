import { Observable } from 'rxjs';
import { NestedPartial } from '../types/nested-partial.types';

export interface IService<T> {
  findOne(filter: Partial<T>): Observable<T>;
  findAll(): Observable<T[]>;
  create(payload: NestedPartial<T>): Observable<T>;
  update(id: any, payload: Partial<T>): Observable<T>;
  removeById(id: string): Observable<T>;
  removeByIds(ids: string[]): Observable<boolean>;
}
