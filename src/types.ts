export interface Iexperience {
  name: string;
  title: string;
  date: string;
  achievements: string[];
}

export interface Iproject {
  name: string;
  description: string;
  features: string[];
  builtWith: string;
  github: string;
  image: string;
  demo?: string;
}