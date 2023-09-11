export default interface IRepository { 

    create(payload:any): Promise<any>
    update(): Promise<void>
    delete(): Promise<void>
    findone(): Promise<void>
    findeAll(): Promise<void>
    existsById(): Promise<void>

}