interface IWokbenchApi {
  getPatientList: () => Promise<any>;
  getConferenceCardList: () => Promise<any>;
  getChat: (params: { id: number }) => Promise<any>;
  getVisitList: () => Promise<any>;
  getHaveVisitList: () => Promise<any>;
}

export type { IWokbenchApi };
