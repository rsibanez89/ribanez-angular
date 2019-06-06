import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  ViewEncapsulation,
  OnInit,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ri-gist-frame',
  template: ``,
})
export class GistFrameComponent implements AfterViewInit {

  //@ViewChild('iframe') iframe: ElementRef;
  @Input() gistId: string;
  @Input() file: string;

  constructor(@Inject(DOCUMENT) private document, private hostElement: ElementRef){

  }

  ngAfterViewInit() {
    // let doc = this.iframe.nativeElement.contentDocument;
    // let content = `
    //   <html>
    //     <head></head>
    //     <body>
    //       <script type="text/javascript" src="https://gist.github.com/rsibanez89/${this.gistId}.js"></script>
    //     </body>
    //   </html>
    // `;
    // doc.open();
    // doc.write(content);
    // doc.close();

    let node = this.document.createElement('script');
        node.src = `https://gist.github.com/rsibanez89/${this.gistId}.js`;
        node.async = true;
        //document.getElementsByTagName('ri-gist-frame')[0].appendChild(node);

    this.hostElement.nativeElement.appendChild(node);
  }

}
