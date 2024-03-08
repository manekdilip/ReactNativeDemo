//you can define all possible props here , like custom styles and many more
export interface ListItemProps {
  photo: string;
  name: string;
  location: string;
  phone: string;
  gender: string;
  onFav?: () => void;
  isFav: boolean;
}

export interface name {
  first: string;
  last: string;
}

export interface picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface registered {
  age: number;
  date: string;
}

export interface location {
  city: string;
}

export interface RandomUser {
  name: name;
  gender: string;
  phone: string;
  picture: picture;
  registered: registered;
  location: location;
}
