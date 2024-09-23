import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  // BehaviorSubject will store the latest message and emit it to new subscribers
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  // Expose the observable for components to subscribe to
  message$ = this.messageSubject.asObservable();

  // Send a message and automatically clear it after 3 seconds
  sendMessage(message: string) {
    this.messageSubject.next(message); // Emit the new message

    // Clear the message after 3 seconds
    setTimeout(() => {
      this.clearMessage();
    }, 3000);
  }

  // Clear the message by emitting an empty string
  clearMessage() {
    this.messageSubject.next('');
  }

  constructor() {}
}
