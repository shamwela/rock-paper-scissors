import Image from 'next/image'
import Rock from 'public/rock.svg'
import Paper from 'public/paper.svg'
import Scissors from 'public/scissors.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex gap-x-8'>
      <Link href='/result/Rock'>
        <Image alt='Rock' src={Rock} className='cursor-pointer' />
      </Link>
      <Link href='/result/Paper'>
        <Image alt='Paper' src={Paper} className='cursor-pointer' />
      </Link>
      <Link href='/result/Scissors'>
        <Image alt='Scissors' src={Scissors} className='cursor-pointer' />
      </Link>
    </div>
  )
}
