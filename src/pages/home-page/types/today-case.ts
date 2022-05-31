interface ISchedule {
  startTime: string;
  endTime: string;
  patientName: string;
  message: string;
  left?: number;
  top?: number;
  height?: number;
  borderColor?: string;
  background?: string;
  timeColor?: string;
}

interface IData {
  time: string;
  scheduling: ISchedule[];
}

export type { ISchedule, IData };
