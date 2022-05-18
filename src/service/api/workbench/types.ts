interface IWokbenchApi {
  getPatientList: () => Promise<any>;
  getConferenceCardList: () => Promise<any>;
  getChat: (params: { id: number }) => Promise<any>;
}

export type { IWokbenchApi };
