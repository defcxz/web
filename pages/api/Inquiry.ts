import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function create(req, res) {
   try{
      await prisma.messages.create({
         data: {
            msg: req.body.msg,
            created_at: new Date(),
         }
      })
      res.status(200).json({ message: 'ok' })
   }
   catch(e){
      res.status(500).json({ message: 'error' })
   }

}
