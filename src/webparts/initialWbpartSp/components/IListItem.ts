export interface IListItem {
    Title?: string;
    Id: number;
}

export class ListItemSp implements IListItem {
    Title?: string;
    Id: number;

    constructor(t: string, i: number){
        this.Title = t;
        this.Id = i;
    }

}