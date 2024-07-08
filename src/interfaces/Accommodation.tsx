import HostInterface from "./HostInterface.tsx";

export interface Accommodation {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: HostInterface;
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}