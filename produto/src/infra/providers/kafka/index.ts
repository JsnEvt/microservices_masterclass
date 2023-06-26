import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['more-mouse-5885-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'bW9yZS1tb3VzZS01ODg1JBQWA_xLYWbHz2lwNFj7hVi2hiERg-CpELovAq_hg4U',
    password: '5084dd8048194db5b9a1b85ae5eb31ae',
  },
  ssl: true,
})

export { kafka }
