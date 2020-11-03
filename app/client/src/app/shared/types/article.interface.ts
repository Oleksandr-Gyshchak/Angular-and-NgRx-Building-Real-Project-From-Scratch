import { ProfileInterface } from 'src/app/shared/types/profile.interface';

export interface ArticleInterface {
  author: ProfileInterface;
  title: string;
  body: string;
  description: string;
  favorited: boolean;
  favorotesCount: number;
  slug: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
}
