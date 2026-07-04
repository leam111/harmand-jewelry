import bcrypt from 'bcrypt'
import prisma from './prismaClient.js'

const email = 'admin@harmand.com'
const password = 'harmand123'

const hashedPassword = await bcrypt.hash(password, 10)

await prisma.admin.create({
  data: { email, password: hashedPassword }
})

console.log('Admin created successfully!')
console.log('Email:', email)
console.log('Password:', password)

await prisma.$disconnect()