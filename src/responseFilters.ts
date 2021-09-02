import { Message } from "./types";

export const filters = {
  initMsg: (message: Message) => message.msg === 'INIT',
  infoMsg: (message: Message) => message.msg === 'INFO',
  authMsg: (message: Message) => message.msg === 'AUTH',
  accessRightsMsg: (message: Message) => message.msg === 'ACCESS_RIGHTS',
  insertCardMsg: (message: Message) => message.msg === 'INSERT_CARD',
  // TODO What about TAN?
  enterPinMsg: (message: Message) => message.msg === 'ENTER_PIN',
  apiLvlMsg: (message: Message) => message.msg === 'API_LEVEL',
};


