import { Pipe, PipeTransform } from '@angular/core';
import { Remarkable } from 'remarkable';

@Pipe({ name: 'markdownToHtml' })
export class MarkdownToHtmlPipe {
    constructor() { }

    transform(style) {
        var md = new Remarkable();
        return md.render(style);
    }
}