import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface GistView {
  gistId: string;
  gistAccount: string;
  gistCss: string;
  gistContent: string;
}

@Component({
  selector: 'ri-gist-frame',
  template: '<div></div>',
  styles: [`
    ::ng-deep .gist {
      width: 100%;
    }
  `]
})
export class GistFrameComponent implements OnInit {

  @Input() gistId: string;
  @Input() gistAccount = 'rsibanez89';

  constructor(@Inject(DOCUMENT) private document, private hostElement: ElementRef, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<GistView>(`https://t2nvywe018.execute-api.us-east-2.amazonaws.com/Prod?gistId=${this.gistId}&gistAccount=${this.gistAccount}`)
      .subscribe(gistView => {
        this.hostElement.nativeElement.innerHTML = gistView.gistCss + gistView.gistContent;
      });
  }

  useScriptTag() {
    // Override document.write function
    var oldWrite = this.document.write;
    this.document.write = (text: string) => {
      //text = text.replace(/<link.+>/,'')
      this.hostElement.nativeElement.innerHTML += text;
      console.log(text);
    }

    var script = this.appendScriptNode();

    // Undo override document.write function
    script.onloadend = () => {
      this.document.write = oldWrite;
    }
  }

  appendScriptNode(): HTMLScriptElement {
    let node = this.document.createElement('script');
    node.type = 'text/javascript';
    node.src = `https://gist.github.com/rsibanez89/${this.gistId}.js`;
    this.hostElement.nativeElement.appendChild(node);
    return node;
  }
}
