import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'fechaFormateada'
})
export class FechaPipe implements PipeTransform {
  transform(value: string | Date): string {
    const fecha = new Date(value);
    return fecha.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
}