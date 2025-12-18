export interface Suggestion {
    id : number,
    title : string,
    description : string,
    category : string,
    date : string | Date,
    status : string,
    nbLikes?: number,
    favorited?: boolean
}
