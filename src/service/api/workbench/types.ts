interface IWokbenchApi {
  getPatientList: () => Promise<any>;
  getConferenceCardList: () => Promise<any>;
}

export type { IWokbenchApi };
