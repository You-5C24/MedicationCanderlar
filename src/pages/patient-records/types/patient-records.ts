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

interface IRecordDetails {
  time: string;
  describe: string;
  caseHistory: {
    adr: string;
    allergic: string;
    family: string;
    past: string;
    surgery: string;
    lastUpdate: string;
  };
  doctors: { id: number; name: string }[];
  diagnose: {
    info: string;
    lastUpdate: string;
  };
  mainSuit: {
    info: string;
    lastUpdate: string;
  };
  medication: {
    currentMedication: string;
    lastUpdate: string;
    suggest: string;
  };
  problem: {
    info: string;
    lastUpdate: string;
  };
  summary: {
    info: string;
    lastUpdate: string;
  };
}

export type { IBaseInfo, IPatientRecords, IRecordDetails };
