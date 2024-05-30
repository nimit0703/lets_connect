export default class Post {
  id: number;
  img: string;
  belongsTo: number;
  likes: number[];
  comments: Comment[];
  caption: string;

  constructor(
    id: number,
    img: string,
    belongsTo: number,
    likes: number[],
    comments: Comment[],
    caption: string
  ) {
    this.id = id;
    this.img = img;
    this.belongsTo = belongsTo;
    this.likes = likes;
    this.comments = comments;
    this.caption = "This is caption cool";
  }
}
