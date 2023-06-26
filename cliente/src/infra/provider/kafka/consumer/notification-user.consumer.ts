import { prismaClient } from '../../../database/prismaClient';
import { kafkaConsumer } from '../kafka.consumer';

type CustomerConsumer = {
  customerId: string,
  status: string,
}

export async function createCustomerConsumer() {
  console.log('CUSTOMER CONSUMER')
  const consumer = await kafkaConsumer("ORDER_STATUS")
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const statusConsumer = JSON.parse(messageToString) as CustomerConsumer

      console.log(`ATUALIZACAO DE STAUTS = Client: ${statusConsumer.customerId} - Status: ${statusConsumer.status}`)
    }
  })
}

createCustomerConsumer()