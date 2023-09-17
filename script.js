const { randomInt } = require("crypto");

const data = {
  companyId: "2",
  paymentId: "2",
  identificacao: {
    numero: "12254",
    codigoverificacao: "ri0tvmljg",
    dataemissao: "2023-09-01t13:16:22",
    naturezaoperacao: "1",
    regimeespecialtributacao: "0",
    optantesimplesnacional: "1",
    incetivadorcultural: "2",
    competencia: "2023-08-31",
  },
  servico: {
    valores: {
      valorservicos: "9000.00",
      issretido: "2",
      valoriss: "0.00",
      basecalculo: "9000.00",
      aliquota: "0.0201",
      valorliquidonfse: "9000.00",
      valorissretido: "0",
    },
    itemlistaservico: "106",
    codigotributacaomunicipio: "620400001",
    discriminacao:
      "lucas fellippe alves pereira consultoria em tecnologia da informacao ltda nome banco: banco bs2 s.a. número: 218 agência: 1 conta: 1024108-6 agosto/2023",
    municipioprestacaoservico: "3118601",
  },
  prestador: {
    identificacaoprestador: {
      cnpj: "44550489000140",
      inscricaomunicipal: "72151740",
    },
    razaosocial:
      "lucas fellippe alves pereira consultoria em tecnologia da informacao ltda",
    endereco: {
      endereco: "rua das industrias",
      numero: "689",
      bairro: "novo eldorado",
      cidade: "3118601",
      estado: "mg",
      cep: "32341490",
    },
    contato: {
      telefone: "4196869828",
      email: "meucnpj@contabilizei.com.br",
    },
  },
  tomador: {
    identificacaotomador: {
      cpfcnpj: {
        cnpj: "18160979000120",
      },
      inscricaomunicipal: "4882010010",
    },
    razaosocial: "seidor veritas sistemas ltda",
    endereco: {
      endereco: "rua ulhoa cintra",
      numero: "50",
      complemento: "sala 601 parte d",
      bairro: "santa efigênia",
      cidade: "3106200",
      estado: "mg",
      cep: "30150230",
    },
    contato: {
      email: null,
    },
  },
};

for (let i = 1; i <= 10; i++) {
  const x = { ...data, companyId: "2" };
  x.identificacao.numero = randomInt(10000);
  const body = JSON.stringify({ ...data, companyId: "2" });

  const headers = new Headers();
  headers.set("content-type", "application/json");
  fetch("http://localhost:3000/api/nfses", {
    method: "post",
    body,
    headers,
  }).catch((e) => console.log(e));
}
