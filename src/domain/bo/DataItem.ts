class DataItem {
  id: number;
  title: number;
  content: string;
  createTime: string;

  constructor(id: number, title: number, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createTime = this.dateFormat();
  }

  // dateFormat(timeStr: string): string {
  dateFormat(): string {
    const date = new Date();
    const prefix = `${date.getFullYear()}/${date.getMonth() +
      1}/${date.getDay()}`;
    const suffix = `${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    return prefix + suffix;
  }
}
export default DataItem;
