import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
   
    //for static color change
    //constructor(private el: ElementRef) { }
    //onMouseEnter() { this._highlight("yellow"); }
    //onMouseLeave() { this._highlight(null); this.el.nativeElement.style.color = '#888';}
    //private _highlight(color: string) {
    //    this.el.nativeElement.style.backgroundColor = color;
    //    this.el.nativeElement.style.color = 'red';
    //}
   

    //set cassigned color
    @Input('myHighlight') highlightColor: string;

    private _defaultColor = 'blue';
    @Input() set defaultColor(colorName: string) {
        this._defaultColor = colorName || this._defaultColor;
    }
    constructor(private el: ElementRef) { }
    onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this._highlight(null); }
    private _highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
