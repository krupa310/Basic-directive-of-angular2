import {Directive, ElementRef, Input} from 'angular2/core';
import {Variables} from './variables';

@Directive({
    selector: '[componentDemo]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class ComponendemoDirective {
    //set cassigned color
isMaintain=true;
    //set cassigned color
    @Input('componentDemo') highlightColor: string;

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
