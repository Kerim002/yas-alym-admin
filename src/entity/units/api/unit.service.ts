import { axiosWithAuth } from "@/shared/api/interceptor";

class UnitService {
  private url = "";
  async list(id?: string) {
    const res = await axiosWithAuth(`${this.url}/${id && id}`);
    return res.data;
  }
}
export const unitService = new UnitService();
