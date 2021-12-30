export interface Category {
    id: number,
    name: String
}

export interface Page {
    id: number,
    text: String
    pageNumber: number
}

export interface Book {
    id: number,
    author: String,
    releaseDate: String,
    title: String,
    description: String,
    cover: String,
    categories: Category[]
    pages: Page[]

}