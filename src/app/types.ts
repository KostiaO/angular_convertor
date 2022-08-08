export interface ConvertorResponseType {
  motd: {
    msg: string,
    url: string
  },
  success: boolean,
  query:{from: string, to: string, amount: number},
  info:{rate: number},
  historical: false,
  date: string,
  result: number
}

export interface Course {
  [UahToUsd: string]: number,
  UahToEur: number,
  EurToUah: number,
  UsdToUah: number,
  EurToUsd: number,
  UsdToEur: number,
}
