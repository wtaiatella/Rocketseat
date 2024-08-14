export interface AuthorType {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface ContentType {
  type: string;
  content: string;
}

export interface PostType {
  id: number;
  author: AuthorType;
  content: ContentType[];
  publishedAt: Date;
}

export interface CommentType {
  id: number;
  postId: number;
  author: AuthorType;
  type: string;
  content: string;
  publishedAt: Date;
  likes: number;
}
