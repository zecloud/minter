import axios from 'axios';

export interface gangoghinfo {
    cid: string;
    insta: number;
    tokenid: string;
  }

export async function SetGangoghTokenId(api: string, data: any) {
    return axios.post<gangoghinfo>(`${api}/SetContractState`, data);
  }
  