/*
 * @Author: Mukti
 * @Date: 2021-11-16 16:53:22
 * @LastEditTime: 2021-11-16 16:53:33
 * @LastEditors: Mukti
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}