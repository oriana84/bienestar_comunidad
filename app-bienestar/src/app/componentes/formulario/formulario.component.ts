import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { IonItem, IonInput, IonButton, IonList, IonText} from "@ionic/angular/standalone";
import { ToastController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PublicacionService } from 'src/app/servicios/publicacion.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: true,
  imports: [RouterModule,IonText, IonList, IonInput, IonItem,IonButton,ReactiveFormsModule,FormsModule]
})
export class FormularioComponent  implements OnInit {
  tituloStr: string = ""
  descripcionStr: String = ""
   imagen: string = '';
   formulario: FormGroup;

  constructor(private fb: FormBuilder,private publicacionService: PublicacionService,
    private toastCtrl: ToastController ) { 

    this.formulario = this.fb.group({
      titulo     : ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      imagen: ['']  
     }); 
    }
  async ngOnInit() {
  }
  get titulo() { return this.formulario.get('titulo'); }
  get descripcion() { return this.formulario.get('descripcion'); }

async guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const nuevaPublicacion = {
      ...this.formulario.value,
      imagen:this.imagen,
      fecha: new Date().toISOString()
    };

    await this.publicacionService.agregarPublicacion(nuevaPublicacion);
    const toast = await this.toastCtrl.create({
      message: 'Publicación guardada exitosamente',
      duration: 2000,
      color: 'success'
    });
    toast.present();

    this.formulario.reset();
  }
}
