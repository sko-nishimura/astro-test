import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Info = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};
export type InfoResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Info[];
};

//APIの呼び出し
export const getInfos = async (queries?: MicroCMSQueries) => {
  return await client.get<InfoResponse>({ endpoint: "news", queries });
};
export const getInfoDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Info>({
    endpoint: "news",
    contentId,
    queries,
  });
};