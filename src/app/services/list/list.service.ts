import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { LocalStorageService} from '../local-storage.service';
import { List} from '../../domain/entities';
import { LISTS} from '../local-storage.namespace';

type SpecialListUUID = 'today' | 'todo';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private current: List;
  private lists: List[] = [];
  public currentUuid: SpecialListUUID | string = 'today';
  public currentUuid$ = new Subject<string>();
  public current$ = new Subject<List>();
  public lists$ = new Subject<List[]>();
  constructor(
    private store: LocalStorageService
  ) { }
  // 广播事件,向下传递list current 和 currentUuid
  private broadCast(): void {
    this.lists$.next(this.lists);
    this.current$.next(this.current);
    this.currentUuid$.next(this.currentUuid);
  }
  // 存储list
  private persist(): void {
    this.store.set(LISTS, this.lists);
  }
  // 获取list
  private getByUuid(uuid: string): List {
    return this.lists.find(l => l._id === uuid);
  }
  // 更新list并广播
  private update(list: List): void {
    const index = this.lists.findIndex(l => l._id === list._id);
    if (index === -1) {
      this.lists.splice(index, 1, list);
      this.persist();
      this.broadCast();
    }
  }
  getCurrentListUuid(): SpecialListUUID | string {
    return this.currentUuid;
  }
  // 获取全部的list并广播
  getAll(): void {
    this.lists = this.store.getList(LISTS);
    this.broadCast();
  }
  // 设置当前的Uuid并广播出去
  setCurrentUuid(uuid: string): void {
    this.currentUuid = uuid;
    this.current = this.lists.find(l => l._id === uuid);
    this.broadCast();
  }
  // 存储新的list并广播和保存
  add(title: string): void {
    const newList = new List(title);
    this.lists.push(newList);
    this.currentUuid = newList._id;
    this.current = newList;

    this.broadCast();
    this.persist();
  }
  // 重命名list
  rename(listUuid: string, title: string) {
    const list = this.getByUuid(listUuid);
    if (list) {
      list.title = title;
      this.update(list);
    }
  }
  // 删除某个list并广播
  delete(uuid: string): void {
    const i = this.lists.findIndex(l => l._id === uuid);
    if (i !== -1) {
      this.lists.splice(i, 1);
      this.currentUuid = this.lists.length
        ? this.lists[ this.lists.length - 1 ]._id
        : this.currentUuid === 'today'
          ? 'today'
          : 'todo';
      this.broadCast();
      this.persist();
    }
  }
}
