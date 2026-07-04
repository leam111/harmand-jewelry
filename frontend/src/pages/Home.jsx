import Slideshow from '../components/slideshow'
import ProductCard, { CollectionHeader } from '../components/ProductCard'

export default function Home() {

  const products = [
    {
      id: 1,
      name: "Eternal Diamond Ring",
      price: 4200,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800"
    },
    {
      id: 2,
      name: "Royal Sapphire Necklace",
      price: 6800,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"
    },
    {
      id: 3,
      name: "Veloura Gold Bracelet",
      price: 3100,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"
    },
    {
      id: 4,
      name: "Luxe Diamond Earrings",
      price: 2500,
      image: "https://images.unsplash.com/photo-1588444650733-dbd2d2c9b2b4?w=800"
    },
  ]

  return (
    <>
      <Slideshow />

<div className="px-6 md:px-12 lg:px-20 py-12" style={{ backgroundColor: '#0a0a0a' }}>
        
        <CollectionHeader title="Diamond Collection" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

      </div>
    </>
  )
}