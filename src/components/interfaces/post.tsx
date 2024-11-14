export interface Post {
  id: number | string;
  user_id: number;
  category_id: number;
  title: string; // Ensure 'title' is defined
  image: string;
  slug: string;
  excerpt: string;
  content: string;
  views: number;
  is_active: number;
  status: string;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}

export interface ResponseData {
  current_page: number;
  data: Post[];
}
