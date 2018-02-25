import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ConvertToSpaces'
})
export class ConvertToSpacesPipe
            implements PipeTransform {
    transform(value: string, character: string): string {
        if (value) {
            return value.replace(character, ' ');
        } else {
            return '';
        }
    }
}
