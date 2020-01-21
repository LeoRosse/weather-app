export interface Image {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
  };
  location: {
    title: string;
  }
}
