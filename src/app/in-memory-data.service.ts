import { InMemoryDbService } from 'angular-in-memory-web-api';

const notes = [
  { id: '1', name: 'Node' },
  { id: '2', name: 'Typescript' },
  { id: '3', name: 'Angular' },
];

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { notes };
  }
}
