import { axiosWithAuth } from "@/shared/api/interceptor";
import { API_VERSION } from "@/shared/config";

class SectionService {
  private url = `/course/${API_VERSION}`;
  async getSections() {
    const res = await axiosWithAuth.get<SectionListResponse>(
      `${this.url}/sections`
    );
    return res.data;
  }
}

export const sectionService = new SectionService();
