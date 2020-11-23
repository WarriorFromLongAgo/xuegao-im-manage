// 操作数据
import DataItem from "@/domain/bo/DataItem";

// 用localstprage操作数据，你应该怎么封装
// 操作 这个 dataItem

// [
//     {
//         title: '',
//         date: '',
//         cate: '',
//         content: ''
//     }
// ]
class DataAction {
  dataKey: string;
  memoList: Array<DataItem>;

  constructor(dataKey = "item") {
    this.dataKey = dataKey;
    this.memoList = this.readData();
  }

  readData() {
    const strData: string | null = localStorage.getItem(this.dataKey);
    let arrData: any[] = [];
    if (strData != null) {
      arrData = JSON.parse(strData);
    }
    return arrData;
  }

  // 添加数据，返回数据的弟弟
  addData(newData: DataItem): number {
    let dataArray = this.memoList;
    if (dataArray == null) {
      dataArray = [];
    }
    const newId =
      dataArray.length == 0 ? 1 : dataArray[dataArray.length - 1].id + 1;
    newData.id = newId;
    dataArray.push(newData);
    // 保存到localstorage
    this.saveData(dataArray);
    return newId;
  }

  saveData(arrData: Array<DataItem>): void {
    const str: string = JSON.stringify(arrData);
    localStorage.setItem(this.dataKey, str);
  }
}

export default DataAction;
