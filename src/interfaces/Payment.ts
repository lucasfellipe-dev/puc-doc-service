import { Servico, Valores } from "../types/nfse";

export interface IPayment {
  id: string;
  companyId: string;
  pagador: string;
  servico: Servico;
  valores: Valores;
}
