import { ITag } from "../tag/tag.model";
export interface IProduct{
    id: number;
    title: string;
    description: string;
    price: number;
    tags: ITag[];
}