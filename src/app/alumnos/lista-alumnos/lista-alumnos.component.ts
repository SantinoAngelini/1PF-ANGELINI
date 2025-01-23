import { Component } from '@angular/core';

import { alumno } from '../../interfaces/alumno';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-lista-alumnos',
  standalone: false,

  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['id', 'nombreCompleto', 'acciones' ];

  dataSource: alumno[] = [
    { id: generateRandomId(), nombre: 'Kevin', apellido: 'Davezac' },
    { id: generateRandomId(), nombre: 'Santutu', apellido: 'Angelini' }
  ];

  constructor(private matDialog: MatDialog) {}

  onDelete(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este alumno?')) {
      this.dataSource = this.dataSource.filter((el) => el.id !== id);
    }
  }

  onEdit(alumno: alumno): void {
    this.matDialog
      .open(DialogFormComponent, {
        data: alumno
      })
      .afterClosed()
      .subscribe({
        next: (valorFormulario) => {
          if (valorFormulario) {
            this.dataSource = this.dataSource.map((a) =>
              a.id === alumno.id ? { ...a, ...valorFormulario } : a
            );
          }
        }
      });
  }

  onCreateStudent(): void {
    this.matDialog
      .open(DialogFormComponent)
      .afterClosed()
      .subscribe({
        next: (valorFormulario) => {
          if (valorFormulario) {
            this.dataSource = [
              ...this.dataSource,
              {
                id: generateRandomId(),
                ...valorFormulario
              }
            ];
          }
        }
      });
  }
}

function generateRandomId(): number {
  return Math.floor(Math.random() * 1000000); 
}