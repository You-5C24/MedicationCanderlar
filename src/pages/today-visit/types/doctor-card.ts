interface IVisit {
  name: string;
  department: string;
  workId: number;
  tel: number;
  isVisit: boolean;
}

interface IHaveVist {
  name: string;
  department: string;
  tel: number;
  date: string;
  time: string;
}

export type { IVisit, IHaveVist };
