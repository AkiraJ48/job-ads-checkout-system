import { JobAdState } from "./Types";

export const getJobAds = (state: JobAdState) => state.jobAds;
export const getItemsInCart = (state: JobAdState) => state.selectedJobAds;
