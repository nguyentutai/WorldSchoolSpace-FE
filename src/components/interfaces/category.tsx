import { Post } from "./post";

export interface Category {
  id: string;
  user_id: string;
  name: string;
  slug: string;
  description: string;
  parent_id?: string | null;
  is_active: boolean;
  children?: Category[];
  posts?: Post[];
  parent?: {
    id: string;
    name: string;
    slug: string;
    children: Category[];
  } | null;
  sibling?: any;
}
