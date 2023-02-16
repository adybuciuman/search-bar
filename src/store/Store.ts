import { makeAutoObservable } from 'mobx';
import emiel from '../assets/pngs/emiel.png';
import emily from '../assets/pngs/emily.png';
import emielio from '../assets/pngs/emielio.png';
import ricciardo from '../assets/pngs/ricciardo.png';
import helen from '../assets/pngs/helen.png';

export interface IAttendee {
  firstName: string;
  lastName: string;
  email: string;
  photoUrl: string;
}

class Store {
  attendees: IAttendee[] = [
    { firstName: 'Emiel', lastName: 'Janson', email: 'emiel@gmail.com', photoUrl: emiel },
    { firstName: 'Emily', lastName: 'Gevalli', email: 'emily.g@gmail.com', photoUrl: emily },
    {
      firstName: 'Emielio',
      lastName: 'Castillo',
      email: 'ecastillo@yahoo.com',
      photoUrl: emielio,
    },
    {
      firstName: 'Ricciardo',
      lastName: 'Something',
      email: 'ricciardo@gmail.com',
      photoUrl: ricciardo,
    },
    { firstName: 'Helen', lastName: 'Grant', email: 'helen@yahoo.com', photoUrl: helen },
  ];

  selectedAttendee: IAttendee[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addAttendee(attendee: IAttendee) {
    this.attendees.push(attendee);
  }

  removeSelectedAttendee(attendee: IAttendee) {
    const index = this.selectedAttendee.findIndex((a) => a.email === attendee.email);
    this.selectedAttendee.splice(index, 1);
  }

  addSelectedAttendee(attendee: IAttendee) {
    this.selectedAttendee.push(attendee);
  }
}

export const store = new Store();
