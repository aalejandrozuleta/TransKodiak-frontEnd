import { Injectable } from '@angular/core';
import { userTableVehicle } from '@models/user-table-vehicle-company';
import { AdministrationUserVehicleCompanyService } from './administration-user-vehicle-company.service';

@Injectable({
  providedIn: 'root',
})
export class UserVehicleCompanyService {
  private users: userTableVehicle[] = [
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Wilton Cesar',
      email: 'wilinton07@ejemplo.com',
      date: '20/02/2024',
      id: 1,
      placa: 'AFK - 123',
      isChecked: true,
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Nicolas Mateo',
      email: 'matonico@ejemplo.com',
      date: '23/04/2024',
      id: 2,
      placa: 'AGH - 567',
      isChecked: true,
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Armando Casas',
      email: 'casasaaa@ejemplo.com',
      date: '25/08/2023',
      id: 3,
      placa: 'ERG - 890',
      isChecked: true,
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Sofia Ramirez',
      email: 'sofiaaa@ejemplo.com',
      date: '25/09/2023',
      id: 4,
      placa: 'ERG - 898',
      isChecked: true,
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Catalina Osorio',
      email: 'cata@ejemplo.com',
      date: '12/07/2023',
      id: 5,
      placa: 'ERG - 897',
      isChecked: true,
    },
  ];
  private copyUsers: userTableVehicle[] = [...this.users];

  constructor() {}

  getUsers() {
    return this.users;
  }

  setUsers(user: userTableVehicle[]) {
    this.users = user;
  }

  resetUsers() {
    this.users = [...this.copyUsers]; 
  }
}
