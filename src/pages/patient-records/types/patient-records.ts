interface IBaseInfo {
  doctor?: string;
  doctorDept?: string;
  firstName?: string;
  id?: number;
  name?: string;
  tel?: number;
}

interface ICheckout {
  id: number;
  time: string;
  title: string;
}

interface IDetectionIndex {
  id: number;
  time: string;
  year: string;
}

interface IFollowupRecord {
  id: number;
  time: string;
  doctor: string;
  info: string;
  doctorDept: string;
}

interface IMedicalRecord {
  id: number;
  info: string;
  time: string;
  type: string;
}

interface IPatientRecords {
  checkout: ICheckout[];
  detectionIndex: IDetectionIndex[];
  followupRecord: IFollowupRecord[];
  medicalRecord: IMedicalRecord[];
}

export type { IBaseInfo, IPatientRecords };
