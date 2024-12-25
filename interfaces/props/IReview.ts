export interface IReview {
  name: string;
  review: string;
  rating: number;
  profession: string;
  image: string;
}

export interface IReviewCardProps {
  review: IReview;
}
