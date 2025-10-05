export interface User {
    username: string;
    password: string;
}

export interface UserProfile extends User {
    height: number; // float
    weight: number; // float
    age: number; // int
    gender: string;
    goal?: string; // optional
    personality?: string; // optional
    activityLevel: string;
}