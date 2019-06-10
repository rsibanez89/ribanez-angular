import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ri-gist-frame',
  template: '',
  styles: [`
    ::ng-deep .gist {
      width: 100%;
    }
  `]
})
export class GistFrameComponent implements OnInit {

  @Input() gistId: string;

  constructor(@Inject(DOCUMENT) private document, private hostElement: ElementRef) {
  }

  ngOnInit() {
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
