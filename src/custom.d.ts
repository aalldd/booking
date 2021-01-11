type TagList = {
  tagName: string;
  IconName: string;
}
type Record = {
  ExpenseType: string;
  labelList: string[];
  createAt: string;
  remark: string;
  amount: number;
}
type RootState = {
  tagList: TagList[];
  recordList: Record[];
  balance: number;
}
