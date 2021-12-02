import { Reducer } from "redux";

enum requestType {
  GET = 0,
  POST = 1,
  UPDATE = 2,
  DELETE = 3,
}
interface comment {
  msgID: String;
  msg: String;
}
interface post {
  likes: Number | null;
  comments: comment[] | [];
  timestamp: Date | null;
}
interface info {
  posts: Number;
}
interface action {
  type: number;
  payload: {};
}
const State: info = { posts: 1 };
export const infoReducer: Reducer<info | undefined, action> = (
  state = State,
  action: action
) => {
  switch (action.type) {
    case requestType.GET:
      return state;
    case requestType.POST:
      return state;
    case requestType.UPDATE:
      return state;
    case requestType.DELETE:
      return state;
    default:
      return state;
  }
};
