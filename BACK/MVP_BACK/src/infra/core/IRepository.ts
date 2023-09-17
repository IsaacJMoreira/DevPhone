export default interface IRepository { 

    create(payload:any): Promise<any>
    update(): Promise<any>
    delete(): Promise<any>
    findone(): Promise<any>
    findeAll(): Promise<any>
    existsById(): Promise<boolean>

}