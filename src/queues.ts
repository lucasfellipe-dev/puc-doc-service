import * as amqp from "amqplib";
import { generate_nfse_job } from "./services/nfse";
import { server } from "./app";

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const NFSE_QUEUE = process.env.NFSE_QUEUE;

export let channel: amqp.Channel;
async function startQueues() {
  const connection = await amqp.connect(RABBITMQ_URL!);
  channel = await connection.createChannel();
  const { queue } = await channel.assertQueue(NFSE_QUEUE!, { durable: true });

  server.log.info(`Aguardando mensagens na fila ${queue}`);

  channel.consume(queue, generate_nfse_job);
}

export { startQueues };
