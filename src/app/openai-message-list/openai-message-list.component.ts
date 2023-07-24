import { Component, Input } from '@angular/core';
import { ChatCompletionRequestMessage } from 'openai';

@Component({
  selector: 'app-openai-message-list',
  templateUrl: './openai-message-list.component.html',
  styleUrls: ['./openai-message-list.component.css']
})
export class OpenaiMessageListComponent {
  @Input() message?: ChatCompletionRequestMessage
}
