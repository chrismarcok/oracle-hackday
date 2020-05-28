export interface Post {
    _id: string;
    title: string;
    author: User;
    authorAvatar: string;
    score: number;
    body: string;
    comments: Comment[];
    resolved: boolean;
    project?: string;
    tags?: string[];
    date: number;
}

export interface Comment{
    _id?: string;
    author: User;
    score: number;
    body: string;
    date: number;
    accepted: boolean;
}

export interface User{
    _id?: string;
    name: string;
    avatar: string;
}