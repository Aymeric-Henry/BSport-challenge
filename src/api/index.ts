import { getQueryUrlFromObject } from "../helpers";
import { Activity, Booking, Coach, Establishment, Offer } from "../types";
import { ACCESS_TOKEN } from "./config";
import { HTTPClient } from "./HTTPClient";

class API {
  HTTPClient: HTTPClient;

  constructor () {
    this.HTTPClient = new HTTPClient(ACCESS_TOKEN);
  }

  async getOffers(params: {
    min_date?:string,
    max_date?: string,
    company: number,
  }): Promise<{
    count: number,
    results: Offer[]
  }> {
    let qs = getQueryUrlFromObject(params ?? {});
    return this.HTTPClient.getJson(`offer${qs}`);
  }

  async getOffer(id: number): Promise<Offer> {
    return this.HTTPClient.getJson(`offer/${id}/`);
  }

  async getActivity(id?: number):Promise<Activity> {
    return this.HTTPClient.getJson(`meta-activity/${id}`);
  }

  async getCoach(id?: number): Promise <Coach> {
    return this.HTTPClient.getJson(`coach/${id}`);
  }

  async getEstablishment(id?: number): Promise <Establishment> {
    return this.HTTPClient.getJson(`establishment/${id}`);
  }

  async getBooking(id?: number): Promise <Booking> {
    return this.HTTPClient.getJson(`booking/${id}`);
  }
}

const api = new API();

export default api;