export default interface IDatabase {
  instance: any
  hasConection(): Promise<void>
}