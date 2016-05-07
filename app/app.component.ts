import {Component,Input} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';
import {ComponendemoDirective} from './componentdemo.directive';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HighlightDirective, ComponendemoDirective]
})
export class AppComponent {
    showDiv: boolean = false;
    isDisable: boolean = true;
    parentList = ['Data1', 'Data2', 'Data3','Data4'];
    childList = this.parentList[0];
    
  
    groups: Array <any> = [
        {
            title: 'Title-1',
            content: 'Content-1'
        },
        {
            title: 'Title-2',
            content: 'Content-2'
        },
    ];

    public people: peoples =
    {
        id: 1,
        name: 'User Name1',
        address: 'Address-1'
    };
    
    toggleDiv($event) {
        $event.stopPropagation();
        this.showDiv = !this.showDiv;
    }
    setStyles() {
        let styles = {
            // CSS property names
            'font-style': 'italic', 
            'font-weight':'bold' , 
            'font-size': '24px',
            'color':'#CC2121'
        }
        return styles;
    }
}
