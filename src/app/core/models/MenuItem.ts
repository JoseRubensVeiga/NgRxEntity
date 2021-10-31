export interface IMenuItem {
  label: string;
  url: string;
}

export class MenuItem {
  label: string;
  url: string;

  constructor(data: IMenuItem) {
    this.label = data.label;
    this.url = data.url;
  }
}
