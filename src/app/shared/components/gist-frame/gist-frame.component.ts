import { Component, ElementRef, Input, OnInit } from '@angular/core';
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

  constructor(private hostElement: ElementRef, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<GistView>(`https://ya13n2nov3.execute-api.us-east-2.amazonaws.com/Prod/?gistId=${this.gistId}&gistAccount=${this.gistAccount}`)
      .subscribe(gistView => {
        this.hostElement.nativeElement.innerHTML = gistView.gistCss + gistView.gistContent;
      });
  }
}
