export interface Paginated<T> {
    data: T;
    path: string;
    perPage: number;
    nextPageUrl: string;
    prevPageUrl: string;
}