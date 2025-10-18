export interface LikeResponse {
  liked?: boolean;
  likeCount: number;
  likedBy?: any[];
  articleId?: number;
  commentId?: number;
}

export interface LikeRequest {
  articleId: number;
  commentId: number | null;
}
