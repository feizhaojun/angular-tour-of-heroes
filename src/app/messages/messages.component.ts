/*
 * @Author: Mukti
 * @Date: 2021-11-16 16:52:51
 * @LastEditTime: 2021-11-16 16:55:44
 * @LastEditors: Mukti
 */
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
