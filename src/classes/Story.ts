export default class Story {
  sid: number;
  belongTo: number;
  content: string;

  constructor(sid: number, belongTo: number, content: string) {
    this.sid = sid;
    this.belongTo = belongTo;
    this.content = content;
  }
}
