import Story from "./Story";

export default class Highlight {
  static hid: number = 0;
  createdDate: Date;
  hl: Story[];
  belongsTo: number;

  constructor(userId: number, stories: Story[]) {
    this.belongsTo = userId;
    this.hl = stories;
    Highlight.hid++;
    this.createdDate = new Date();
  }
}
