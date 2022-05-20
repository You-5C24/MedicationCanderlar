interface IWokbenchApi {
  getPatientList: () => Promise<any>;
  getConferenceCardList: () => Promise<any>;
  getChat: (params: { id: number }) => Promise<any>;
  getVisitList: () => Promise<any>;
  getHaveVisitList: () => Promise<any>;
  getPatientBaseInfo: (params: { id: number }) => Promise<any>;
  getPatientRecords: (params: { id: number }) => Promise<any>;
}

export type { IWokbenchApi };
