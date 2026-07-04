import express from 'express'
import prisma from '../prismaClient.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

// PUBLIC — get all products
router.get('/', async (req, res) => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })
  res.json(products)
})

// PUBLIC — get products by category
router.get('/category/:category', async (req, res) => {
  const products = await prisma.product.findMany({
    where: { category: req.params.category },
    orderBy: { createdAt: 'desc' }
  })
  res.json(products)
})

// PUBLIC — get featured products (for homepage)
router.get('/featured', async (req, res) => {
  const products = await prisma.product.findMany({
    where: { featured: true },
    orderBy: { createdAt: 'desc' }
  })
  res.json(products)
})

// PUBLIC — get single product
router.get('/:id', async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(req.params.id) }
  })
  if (!product) return res.status(404).json({ message: 'Product not found' })
  res.json(product)
})

// PROTECTED — create product
router.post('/', authMiddleware, async (req, res) => {
  const { name, description, image, category, colors, featured } = req.body
  const product = await prisma.product.create({
    data: { name, description, image, category, colors, featured }
  })
  res.status(201).json(product)
})

// PROTECTED — update product
router.patch('/:id', authMiddleware, async (req, res) => {
  const product = await prisma.product.update({
    where: { id: parseInt(req.params.id) },
    data: req.body
  })
  res.json(product)
})

// PROTECTED — delete product
router.delete('/:id', authMiddleware, async (req, res) => {
  await prisma.product.delete({
    where: { id: parseInt(req.params.id) }
  })
  res.json({ message: 'Product deleted' })
})

export default router