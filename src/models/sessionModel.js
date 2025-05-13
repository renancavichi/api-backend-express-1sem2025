import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function create(userId, client){
    const result = await prisma.session.create({
        data: {user_id: userId, client},
    })
    return result
}
