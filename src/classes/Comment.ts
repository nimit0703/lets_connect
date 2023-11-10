import Story from "./Story";

export default class Comment {
  text: String;
  belongTo: number;
  likes: [number];
  threads: [Comment] | null = null;

  constructor(
    text: string,
    belongTo: number,
    likedBy: [number],
    threads: [Comment]
  ) {
    this.text = text;
    this.belongTo = belongTo;
    this.likes = likedBy;
    this.threads = threads;
  }
}
