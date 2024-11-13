interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  image: string | null;
}

interface Tag {
  name: string;
}

interface Category {
  id: number;
  user_id: number;
  name: string;
  slug: string;
  description: string;
}

export interface IPost {
  id: number;
  user_id: number;
  category_id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  is_active: boolean;
  slug: string;
  status: string;
  views: number;
  comments: any[];
  tags: Tag[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user: User;
  category: Category;
}
export interface IPostCate {
  posts: IPost[];
}

export interface IPostComment {
  user_id: number;
  content: string;
}

export interface IGetComment {
  id: number;
  content: string;
  parent_id: null | number;
  user: User;
  created_at: number;
}
