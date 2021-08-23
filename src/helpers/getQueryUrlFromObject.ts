const getQueryUrlFromObject = (params: {
  [key: string]: string[] | number[] | Object | string | boolean | undefined;
}) => {
  let query = "";
  const keys = Object.keys(params);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (
      (typeof params[key] === "object" && params[key]) ||
      typeof params[key] === "boolean" ||
      typeof params[key] === "number" ||
      (typeof params[key] === "string" && params[key] !== "") ||
      (Array.isArray(params[key]) &&
        (params[key] as number[] | string[]).length > 0)
    ) {
      query += query === "" ? "?" : "&";
      if (Array.isArray(params[key])) {
        let params_ = params[key] as (string | number)[];
        query += `${key}=${encodeURIComponent(params_.join(","))}`;
      } else if (typeof params[key] === "object") {
        query += `${key}=${encodeURIComponent(JSON.stringify(params[key]))}`;
      } else {
        let params_ = params[key] as string;
        query += `${key}=${encodeURIComponent(params_)}`;
      }
    }
  }

  return query;
};

export default getQueryUrlFromObject;
