import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';
import { filter, from, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey: environment.API_KEY
  })
  readonly openai = new OpenAIApi(this.configuration)

  // async getDataFromOpenAPI(text: string){
  //   const completion = await this.openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {role:"system", content:"You are a helpful assistant."},
  //       {role:"user", content:"Tell me about the birds and the bees. What does that expression mean?"}
  //     ]
  //   })
  // }
  
  getDataFromOpenAI(messages: ChatCompletionRequestMessage[]): string {
    let output = ""
    from(this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: messages
    })).pipe(filter(resp => !!resp && !!resp.data),map(resp => resp.data)).subscribe(data => {
        console.log(data)
        console.log(data.model)
        data.choices.forEach(choice => console.log(choice.message))
        output = data.choices[0].message?.content.toString() || ""
        // data.forEach(obj => console.log(obj));
    });
    return output
  }

  // getDataFromOpenAI() {
  //   from(this.openai.listModels()).pipe(filter(resp => !!resp && !!resp.data),map(resp => resp.data.data)).subscribe(data => {
  //       console.log(data)
  //       // data.forEach(obj => console.log(obj));
  //       console.log("fuck-0")
  //   });
  // }

  // getDataFromOpenAI() {
  //   from(this.openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {role:"system", content:"You are a helpful assistant."},
  //       {role:"user", content:"Say this is a test."}
  //     ],
  //     max_tokens: 15
  //   })).pipe(
  //     filter(resp => !!resp && !!resp.data),
  //     map(resp => resp.data),
  //     filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
  //     map(data => data.choices[0].text)
  //   ).subscribe(data => {
  //       console.log(data);
  //       console.log("fuck-0")
  //   });
  // }

}
