import axios, { AxiosInstance, AxiosResponse } from "axios";

class GnomeService {
  private axios: AxiosInstance = axios.create({
    baseURL:
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json",
  });
  searchGnomes = (query: string): Promise<AxiosResponse> => {
    return this.axios.get(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json",
      {
        params: { q: query },
      }
    );
  };
}

const gnomeService = new GnomeService();

export default gnomeService;
