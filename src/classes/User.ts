export default class User {
  uid: number;
  name: string;
  theme: string;
  email: string;
  password: string;
  profile_img: string;
  followers: number[];
  following: number[];
  userName :string ;
  constructor(
    uid: number,
    name: string,
    theme: string,
    email: string,
    password: string,
    profile_img: string,
    followers: number[],
    following: number[]
  ) {
    this.uid = uid;
    this.name = name;
    this.theme = theme;
    this.email = email;
    this.password = password;
    this.profile_img = profile_img;
    this.followers = followers;
    this.following = following;
    this.userName = this.name.replace(" ","_");
  }
}
