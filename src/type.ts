export interface Task {
  name: string | undefined;
  description: string | undefined;
  date: Date | undefined;
}

export interface Column {
  name: string;
  tasks: Array<Task>;
}

export interface State {
  trello: {
    columnList: Array<Column>;
  };
}

export interface Edit {
  idxTask: number;
  idxList: number;
  newName: string;
  newDescription: string;
  newDate: Date;
}
