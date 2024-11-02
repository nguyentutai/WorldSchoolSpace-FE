import { Post } from "./post";

export interface Category {
  id: string; // ID của danh mục
  user_id: string; // ID của người dùng
  name: string; // Tên danh mục
  slug: string; // Slug của danh mục
  description: string; // Mô tả danh mục
  parent_id?: string | null; // ID của danh mục cha (tùy chọn)
  is_active: boolean; // Trạng thái hoạt động
  children?: Category[]; // Danh mục con (tùy chọn)
  posts?: Post[]; // Add this line
  // Thêm thuộc tính parent để lưu thông tin về danh mục cha
  parent?: {
    id: string; // ID của danh mục cha
    name: string; // Tên của danh mục cha
    slug: string; // Slug của danh mục cha
  } | null; // Có thể là null nếu không có danh mục cha
}
