type TxMsgInfo = {
  title?: string;
  message: string;
  type: "success" | "warning" | "info" | "error";
};

export const useMessages = () => useState<TxMsgInfo[]>("msgs", () => ref([]));
