export default interface Post {
  id: number;
  img: string;
  belongsTo: number;
  likes: number[];
  comments: Object;
  caption: string;
}
