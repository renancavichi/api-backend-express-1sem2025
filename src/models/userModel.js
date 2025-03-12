import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function create(user){
    const result = await prisma.user.create({
        data: user
    })
    return result
}