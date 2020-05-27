export interface Post {
    id: number;
    title: string;
    author: string;
    authorAvatar: string;
    score: number;
    body: string;
    comments: Comment[];
    resolved: boolean;
    project?: string;
    tags?: string[];
}

export interface Comment{
    id: number;
    author: string;
    authorAvatar: string;
    score: number;
    body: string;
}