import { axiosWithAuth } from "@/shared/api/interceptor";
import { API_VERSION } from "@/shared/config";

class UnitService {
  private url = `/course/${API_VERSION}`;
  async list(id?: string) {
    const res = await axiosWithAuth.get<UnitListResponse>(
      `${this.url}/units${id ? "/" + id : ""}`
    );
    return res.data;
  }
}
export const unitService = new UnitService();
