import { API_URL } from "./config";

export function url(
  strings: TemplateStringsArray,
  ...values: (string | number)[]
) {
  return String.raw(strings, ...values.map((v) => encodeURIComponent(v)));
}

export class HTTPClient {
  headers = { Authorization: "Bearer "  };

  constructor(bearer: string) {
    this.headers = { Authorization: "Bearer " +  bearer };
  }


  async get(path: string) {
    return getUrl({headers: this.headers}, path);
  }

  async getJson(path: string) {
    return this.get(path).then((resp) => resp.json());
  }

  async post(
    path: string,
    body?: string | FormData | Blob,
    headers?: Record<string, string>
  ) {
    const response = await fetch(`${API_URL}${path}`, {
      headers: { ...this.headers, ...headers },
      body: body,
      method: "POST",
    });
    if (response.ok) return response;
    else {
      const error = await response.text();
      throw new Error(`POST ${path} : ${error}`);
    }
  }

  async put(path: string, body?: string | FormData) {
    const response = await fetch(`${API_URL}${path}`, {
      headers: this.headers,
      body: body,
      method: "PUT",
    });
    if (response.ok) return response;
    else {
      const error = await response.text();
      throw new Error(`PUT ${path} : ${error}`);
    }
  }

  async delete(path: string, body?: string) {
    const response = await fetch(`${API_URL}${path}`, {
      headers: this.headers,
      method: "DELETE",
      body: body,
    });
    if (response.ok) return response;
    else {
      const error = await response.text();
      throw new Error(`DELETE ${path} : ${error}`);
    }
  }
}

export async function getUrl(config: APIConfig, urlPath: string) {
  const response = await fetch(`${API_URL}${urlPath}`, config);
  if (response.ok) return response;
  else {
    const error = await response.text();
    throw new Error(`GET ${urlPath} : ${error}`);
  }
}

export type APIConfig = { headers: Record<string, string> };