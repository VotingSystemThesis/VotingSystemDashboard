export class CandidatoCount {
  id?: string;
  name?: string;
  count?: number;
  constructor(id: string, name: string, count: number) {
    this.name = name;
    this.id = id;
    this.count = count;
  }
}
