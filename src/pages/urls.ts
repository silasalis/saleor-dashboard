import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

import { BulkAction, Dialog, Pagination, Sort } from "../types";

export const pagesSection = "/pages/";

export const pageListPath = pagesSection;
export type PageListUrlDialog = "publish" | "unpublish" | "remove";
export enum PageListUrlSortField {
  title = "title",
  slug = "slug",
  visible = "visible"
}
export type PageListUrlSort = Sort<PageListUrlSortField>;
export type PageListUrlQueryParams = BulkAction &
  Dialog<PageListUrlDialog> &
  PageListUrlSort &
  Pagination;
export const pageListUrl = (params?: PageListUrlQueryParams) =>
  pageListPath + "?" + stringifyQs(params);

export const pagePath = (id: string) => urlJoin(pagesSection, id);
export type PageUrlDialog = "remove";
export type PageUrlQueryParams = Dialog<PageUrlDialog>;
export const pageUrl = (id: string, params?: PageUrlQueryParams) =>
  pagePath(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const pageCreatePath = urlJoin(pagesSection, "add");
export const pageCreateUrl = pageCreatePath;
