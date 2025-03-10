import type { ITag } from "./tag";

export interface IPost {
  id: number;
  title: string;
  tags: ITag[];
  content: string;
  date_created: Date;
  views: number;
}
