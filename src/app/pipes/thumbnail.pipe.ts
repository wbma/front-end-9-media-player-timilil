import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {

  transform(filename: string, args?: string): any {
    const size = {
      small: '-tn160.png',
      medium: '-tn320.png',
      large: '-tn640.png'
    };

    return filename.split('.')[0] + size[args];
  }

}
