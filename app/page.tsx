import Image from 'next/image'
import Rock from 'public/rock.svg'
import Paper from 'public/paper.svg'
import Scissors from 'public/scissors.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col gap-y-8'>
      <h1>Rock, Paper, Scissors</h1>
      <h2>Pick one.</h2>
      <div className='flex gap-x-8'>
        <Link href='/result/rock'>
          <Image alt='rock' src={Rock} className='cursor-pointer' />
        </Link>
        <Link href='/result/paper'>
          <Image alt='paper' src={Paper} className='cursor-pointer' />
        </Link>
        <Link href='/result/scissors'>
          <Image alt='scissors' src={Scissors} className='cursor-pointer' />
        </Link>
      </div>
    </div>
  )
}
