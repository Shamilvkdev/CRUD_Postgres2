import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
export interface UserDetails {
    id: number;
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class User extends Model <UserDetails> implements UserDetails {
    public id!: number
    public name!: string
    public email!: string
    public password!: string
    public isVerified!: boolean

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt!: Date
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false    
    }
},{
    timestamps: true,
    sequelize: sequelize ,
    paranoid: true 
})