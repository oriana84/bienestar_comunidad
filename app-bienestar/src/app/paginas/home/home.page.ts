import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonText, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from '../../servicios/publicacion.service';
import { DatePipe } from '@angular/common';
import { ConfirmarModalComponent } from 'src/app/componentes/confirmar-modal/confirmar-modal.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [DatePipe,CommonModule, IonLabel, IonAvatar, IonItem, IonList, IonText,
    IonContent, IonHeader, IonButton, IonButtons, IonIcon, IonToolbar, IonTitle, RouterModule],
})
export class HomePage implements OnInit{
  
  publicaciones: Publicacion[] = [];
  fechaActual = new Date().toISOString();

  constructor(private publicacionService: PublicacionService,
    private modalCtrl: ModalController)
    {
      addIcons({ addCircleOutline})
    }
  async ngOnInit() {
    await this.cargarPublicaciones();
  }
  async ionViewWillEnter() {
    await this.cargarPublicaciones();
  }
  async cargarPublicaciones() {
    this.publicaciones = await this.publicacionService.getPublicacion();
  }
  async eliminarPublicacion(publicacion: Publicacion) {
    const modal = await this.modalCtrl.create({
      component: ConfirmarModalComponent,
      componentProps: {
        mensaje: `¿Deseas eliminar el aviso "${publicacion.titulo}"?`
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data?.confirmado) {
      await this.publicacionService.eliminarPublicacion(publicacion.id);
      await this.cargarPublicaciones();
    }
  }
}
