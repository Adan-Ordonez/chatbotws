const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')

const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const ServerAPI = require('./http')
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterProvider = createProvider(BaileysProvider)

    
    const httpserver = new ServerAPI(adapterProvider, adapterDB)



    createBot({
        provider: adapterProvider,
        database: adapterDB,
    })

    httpserver.start()

}

main()
