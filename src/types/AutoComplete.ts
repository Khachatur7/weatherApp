export interface ICityInfo {
  name: string;
  country: string;
  region: string;
}

export interface IAutoComplete{
    cities_list: ICityInfo[],
    onClick: (value: string | undefined) => {}
}