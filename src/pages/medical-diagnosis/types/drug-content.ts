interface IDrug {
  name: string;
  dosage: string;
  use: string;
  takeTime: string;
  rangeTime: string[] | null;
  remark: string;
}

export type { IDrug };
