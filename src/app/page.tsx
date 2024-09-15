import { Pictures } from '@/lib/pictures'
import Carousel from '../components/Carousel'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <main className="">
        <div className=' h-auto w-1/2 mx-auto'>
          <Carousel images={Pictures} />
        </div>
      </main>
    </div>
  )
}