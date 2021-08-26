import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  activateEmitter = new Subject<boolean>();
}
