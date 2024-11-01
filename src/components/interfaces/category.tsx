import { Post } from "./post";

export interface Category {
  id: string; // ID của người dùng

  user_id: string; // ID của người dùng
  name: string; // Tên danh mục
  slug: string; // Slug của danh mục
  description: string; // Mô tả danh mục
  parent_id?: string | null; // ID của danh mục cha (tùy chọn)
  is_active: boolean; // Trạng thái hoạt động
  children?: Category[]; // Danh mục con (tùy chọn)
}
