import { IListItem, ListItemSp } from './IListItem';  
export interface ISpfxReactCrudState {  
  status: string;  
  items: IListItem[];
  listado: Array<ListItemSp>
}