import Story from "./Story";

export default class Highlight {
  hid: number;
  title: string;
  hl: Story[];
  belongsTo: number;

  constructor(id:number,userId: number, hlTitle: string, stories: Story[]) {
    this.hid =id;
    this.belongsTo = userId;
    this.title = hlTitle;
    this.hl = stories;

  }
}
