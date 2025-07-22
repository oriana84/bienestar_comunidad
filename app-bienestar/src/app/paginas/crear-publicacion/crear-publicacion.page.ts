import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { IonImg,IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonButton, IonIcon,IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { addIcons } from 'ionicons';
import { FormularioComponent } from 'src/app/componentes/formulario/formulario.component';
import { PublicacionService } from 'src/app/servicios/publicacion.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
  standalone: true,
  imports: [FormularioComponent,IonIcon, IonButton, ReactiveFormsModule,IonBackButton, IonButtons,IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonCol, IonGrid, IonRow]
})
export class CrearPublicacionPage {
fechaActual = new Date();
fotos: string [] = [];

  constructor(private fb: FormBuilder,private publicacionService: PublicacionService){
    addIcons({camera})
  }
async TomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    if ( image.base64String != null || image.base64String != undefined)
        this.fotos.push(image.base64String);
      return image.base64String
  }
}
