import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader, IonToolbar,IonTitle, IonContent, IonButton } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-confirmar-modal',
  templateUrl: './confirmar-modal.component.html',
  styleUrls: ['./confirmar-modal.component.scss'],
  standalone: true,
  imports:[IonButton, IonContent, IonTitle, IonToolbar, IonHeader, CommonModule],
})
export class ConfirmarModalComponent{

 @Input() mensaje: string = '¿Estás seguro?';

  constructor(private modalCtrl: ModalController) {}

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
