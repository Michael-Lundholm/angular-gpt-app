import { Component } from '@angular/core';
import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from 'openai';
import { OpenAiService } from '../open-ai.service';

@Component({
  selector: 'app-openai-setup',
  templateUrl: './openai-setup.component.html',
  styleUrls: ['./openai-setup.component.css']
})
export class OpenaiSetupComponent {
  tContent = ""
  tRoleIndex = 0
  tRoles = [ChatCompletionRequestMessageRoleEnum.System, ChatCompletionRequestMessageRoleEnum.User, ChatCompletionRequestMessageRoleEnum.Assistant]

  tMessages: ChatCompletionRequestMessage[] = []
  selectedMessage?: ChatCompletionRequestMessage | null

  addMessage(): void {
    this.tMessages = this.tMessages.concat([
      {
        role:this.tRoles[this.tRoleIndex],content:this.tContent
      }
    ])
    if (this.tRoleIndex < 2) {
      this.tRoleIndex++
    }
    else { this.tRoleIndex = 1 }

    this.tContent = ""
    
  }

  onSelect(message: ChatCompletionRequestMessage): void {
    this.selectedMessage = message
  }
  onDelete(message: ChatCompletionRequestMessage): void {
    this.tMessages.splice(this.tMessages.indexOf(message))
    this.selectedMessage = null
  }

  openai = new OpenAiService();
  test(): void {
   this.tContent = this.openai.getDataFromOpenAI(this.tMessages)
    
  }
}
