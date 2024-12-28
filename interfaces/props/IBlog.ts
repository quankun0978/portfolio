export interface IBlog {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
}

export interface IBlogCardProps {
  blog: IBlog;
}
