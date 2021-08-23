import { useHistory } from "react-router-dom";
import { getQueryUrlFromObject } from "../helpers";
import { TabsName } from "../types";

const useOpenTab = () => {
  const history = useHistory();

  return (tabName: TabsName, id: number, params?: Object) => {
    const qs = getQueryUrlFromObject({
      tab: tabName,
      id: id,
      ...params
    });
    history.push(history.location.pathname + qs)
  }
}

export default useOpenTab;