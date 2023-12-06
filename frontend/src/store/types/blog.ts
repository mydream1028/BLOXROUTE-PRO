export interface BlogItem {
  postId: number;
  title: string;
  content: string;
  keyword: Array<string>;
  createdAt: number;
  author: {
    username: string;
    email: string;
    id: number;
  };
}

export interface IBlogPayload {
  perPage: number;
  pageNum: number;
  sort: string;
  keyword: string;
}

export interface IBlogSuccessPayload {
  blog: Array<BlogItem>;
  len: number;
}

export interface ICreateBlogPaylod {
  authorId: number;
  title: string;
  content: string;
  keyword: Array<string>;
}

export interface ICreateBlogSuccessPayload {
  blog: Array<BlogItem>;
  len: number;
}
