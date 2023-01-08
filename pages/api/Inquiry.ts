import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function main() {
   await prisma.messages.create({
      data: {
         msg: 'Hola wawi te quiero mucho mucho muUUUUCHISIIIIMSISISISISIMO :D',
         created_at: new Date()
      }
   })

   const post = await prisma.messages.update({
      where : { id : 1 },
      data : { msg : 'Actualizado directamente desde la API! :D' }
   })
   console.log(post)

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })