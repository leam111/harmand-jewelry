import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'

const router = express.Router()

// ADMIN LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const admin = await prisma.admin.findUnique({ where: { email } })
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const validPassword = await bcrypt.compare(password, admin.password)
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router