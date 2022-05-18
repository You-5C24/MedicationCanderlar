interface ISingleMessage {
  userId: number;
  name: string;
  type: string;
  info: string;
}

interface IChats {
  time: string;
  messages: ISingleMessage[];
}

interface IChatsData {
  personNum: string;
  chatName: string;
  chats: IChats[];
}

export type { IChatsData };
