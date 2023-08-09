import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
export interface PostDetails {
    id: number;
    title: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Post extends Model <PostDetails> implements PostDetails {
    public id!: number
    public title!: string
    public description!: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt!: Date
}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: true,
    sequelize: sequelize ,
    paranoid: true 
})