import { FastifyReply, FastifyRequest } from "fastify";
import repositories from "../../repositories";

import { CreateNfsePayload } from "../../interfaces/createNfsePayload";

/**
 * @swagger
 * /api/nfses:
 *   post:
 *     tags: [Recipient]
 *     description: Create a new `Recipient`
 *     requestBody:
 *       required: true
 *       description: The `CreateUpdateRecipientPayload` data.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateNfsePayload'
 *     responses:
 *       201:
 *         description: deletion success.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NFSe'
 *       400:
 *         description: invalid json body.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Internal Error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalServerError'
 */
const create = async (
  req: FastifyRequest<{ Body: CreateNfsePayload }>,
  reply: FastifyReply
): Promise<void> => {
  //   const company = await CompanyAPI.getById(req.body.companyId);

  //   if (company) {
  //     const doc: INfse = {
  //       identificacao: {
  //         incetivadorCultural: company.incetivadorCultural
  //           ? SimNao.Sim
  //           : SimNao.Nao,
  //         regimeEspecialTributacao: company.regimeEspecialTributacao,
  //         optanteSimplesNacional: company.optanteSimplesNacional
  //           ? SimNao.Sim
  //           : SimNao.Nao,
  //         naturezaOperacao:
  //           NaturezaOperacao[req.body.identificacao.naturezaOperacao!],
  //         competencia: req.body.identificacao.competencia,
  //       },
  //       prestador: {
  //         contato: company.contato,
  //         endereco: company.address,
  //         identificacao: {
  //           cpfcnpj: { cnpj: company.cnpj },
  //           inscricaomunicipal: company.municipalRegistry,
  //         },
  //         razaosocial: company.companyName,
  //       },
  //       tomador: {
  //         contato: company.contato,
  //         endereco: company.address,
  //         identificacao: {
  //           cpfcnpj: { cpf: company.cnpj, cnpj: company.cnpj },
  //           inscricaomunicipal: company.municipalRegistry,
  //         },
  //         razaosocial: company.companyName,
  //       },
  //       servico: req.body.servico,
  //       id: "",
  //       status: NfseStatus.SENT,
  //       info: {
  //         paymentId: "",
  //         companyId: company.id,
  //       },
  //     };
  //}
  const nfse = await repositories.create(req.body as any);

  return reply.send(nfse);
};

export { create };
