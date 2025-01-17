import { atom } from "jotai";

export interface TeamReq {
  infyId: string;
  infyEmail: string;
  location: string;
  skills: string;
  PU: string;
  startDate: string;
  endDate: string;
  bpSponsorEmail: string;
  mission: string;
  productName: string;
  workType: string;
  workScope: string;
  allocation: string;
  contractType: string;
  rate: string;
  backupResource: string;
}

// Atom for storing team data
export const teamDataAtom = atom<TeamReq[]>([]);
