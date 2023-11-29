import { ITag } from "./tag.model";
export interface IProduct{
    id: number;
    title: string;
    description: string;
    price: number;
    tags: ITag[];
}