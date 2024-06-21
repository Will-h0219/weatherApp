import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'degree',
  standalone: true
})
export class DegreePipe implements PipeTransform {
  transform(value: any) {
    if (!value) { return null; }
    return `${value}°`;
  }
}
