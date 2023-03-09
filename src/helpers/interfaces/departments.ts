export interface IDepartments {
  data: IDepartInfo[] | [];
  errorCodes: Array<unknown> | [];
  errors: Array<unknown> | [];
  info: { totalCount: number };
  infoCodes: Array<unknown> | [];
  messageCodes: Array<unknown> | [];
  success: boolean;
  warningCodes: Array<unknown> | [];
  warnings: Array<unknown> | [];
}

export interface IDepartInfo {
  BicycleParking: string;
  CanGetMoneyTransfer: string;
  CategoryOfWarehouse: string;
  CityDescription: string;
  CityDescriptionRu: string;
  CityRef: string;
  Delivery: ISchedule;
  DenyToSelect: string;
  Description: string;
  DescriptionRu: string;
  Direct: string;
  DistrictCode: string;
  GeneratorEnabled: string;
  InternationalShipping: string;
  Latitude: string;
  Longitude: string;
  MaxDeclaredCost: string;
  Number: string;
  OnlyReceivingParcel: string;
  POSTerminal: string;
  PaymentAccess: string;
  Phone: string;
  PlaceMaxWeightAllowed: string;
  PostFinance: string;
  PostMachineType: string;
  PostalCodeUA: string;
  ReceivingLimitationsOnDimensions: ISize;
  Reception: ISchedule;
  Ref: string;
  RegionCity: string;
  Schedule: ISchedule;
  SelfServiceWorkplacesCount: string;
  SendingLimitationsOnDimensions: ISize;
  SettlementAreaDescription: string;
  SettlementDescription: string;
  SettlementRef: string;
  SettlementRegionsDescription: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  ShortAddress: string;
  ShortAddressRu: string;
  SiteKey: string;
  TotalMaxWeightAllowed: string;
  TypeOfWarehouse: string;
  WarehouseForAgent: string;
  WarehouseIndex: string;
  WarehouseStatus: string;
  WarehouseStatusDate: string;
  WorkInMobileAwis: string;
}

interface ISchedule {
  Friday: string;
  Monday: string;
  Saturday: string;
  Sunday: string;
  Thursday: string;
  Tuesday: string;
  Wednesday: string;
}

interface ISize {
  Width: number;
  Height: number;
  Length: number;
}
