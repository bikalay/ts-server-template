export interface IModel {
  oid:string;
  save:(err:any)=>undefined;
  remove:(err:any)=>undefined;
}
