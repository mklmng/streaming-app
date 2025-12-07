export interface User {
    _id?: string;
    email: string;
    password: string,
    name: string;
    subscription?: 'basic' | 'standard' | 'premium';
    watchlist?: string[];
    createdAt?: Date;
}

export interface Film {
    _id?: string;
    title: string;
    description: string;
    genre: string[];
    runningTime: number; // in minutes
    rating: number; // 1-10
    imageUrl: string;
    trailer?: string;
    videoUrl?: string;
    category: 'film' | 'series';
    featured?: boolean;
    trending?: boolean;
    createdAt?: Date;
    releaseYear: number;
    decade?: number;
}

export interface Episode {
    _id?: string;
    title: string;
    description: string;
    season: number;
    episode: number;
    runningTime: number; // in minutes
    currentTime?: number; // for continue viewing of episodes you have started
    watched?: boolean;
    videoUrl?: string;
    imageUrl: string;
}

export interface Series extends Omit<Film, 'runningTime' | 'category'> {
    seasons: number;
    episodes?: Episode[];
    category: 'series';
}

export interface AuthUser {
    id: string;
    email: string;
    name: string;
    subscription?: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}