import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, //None,Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement") element: { name: string; type: string; content: string };
  @Input() name;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    console.log("Contructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log("Text content: " + this.header.nativeElement.textContent);
    console.log(
      "Text content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log(
      "Text content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log("Text content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
