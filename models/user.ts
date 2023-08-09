export interface UserDetails {
    id: number;
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}