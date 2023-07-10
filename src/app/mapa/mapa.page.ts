import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map!: L.Map;
  colectivos: any[] = []; // Array de colectivos ficticios con ubicaciones

  ngOnInit() {

  }

  ionViewDidEnter(){
    this.colectivos = [
      { id: 1, lat: -32.75976, lng: -70.72484, destination: { lat: -32.75200, lng: -70.70 } }, // Colectivo 1 con destino 1
      { id: 2, lat: -32.74776, lng: -70.72384, destination: { lat: -32.8000, lng: -70.70 } }, // Colectivo 2 con destino 2
      // ... más colectivos
    ];
  

    this.initMap();
    this.addMarkers();
    
  }

  initMap() {
    this.map = L.map('map').setView([-32.74976, -70.72584], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     
    }).addTo(this.map);
  }
  addMarkers() {
    const duration = 500000; // Duración de la animación en milisegundos
    const steps = 2000; // Número de pasos para la animación
    const delay = duration / steps; // Retardo entre cada paso
    const customIcon = L.icon({
      iconUrl: '../../assets/colectivo.png',
      iconSize: [40, 30], // Tamaño de la imagen del auto en píxeles
      iconAnchor: [20, 40], // Punto de anclaje del icono (la posición del marcador se basa en este punto)
    });
    this.colectivos.forEach((colectivo) => {
      const initialLatLng = L.latLng(colectivo.lat, colectivo.lng);
      const targetLatLng = L.latLng(colectivo.destination.lat, colectivo.destination.lng);// Ubicación objetivo para simular movimiento
      
      const latStep = (targetLatLng.lat - initialLatLng.lat) / steps;
      const lngStep = (targetLatLng.lng - initialLatLng.lng) / steps;
  
      let currentStep = 0;
      const marker = L.marker(initialLatLng,  { icon: customIcon }).addTo(this.map);
      marker.bindPopup(`Colectivo ${colectivo.id}`);

      const moveMarker = () => {
        if (currentStep === steps) {
          marker.setLatLng(targetLatLng);
          return;
        }
  
        const newLatLng = L.latLng(
          initialLatLng.lat + latStep * currentStep,
          initialLatLng.lng + lngStep * currentStep
        );
  
        marker.setLatLng(newLatLng);
  
        currentStep++;
        setTimeout(moveMarker, delay);
      };
  
      moveMarker();
    
    });
    
  }



  



}
