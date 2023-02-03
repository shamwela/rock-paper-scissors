'use client'
import { getRandomPick } from 'app/utilities/getRandomPick'
import { getResult } from 'app/utilities/getResult'
import Link from 'next/link'
import { Error } from 'app/components/Error'

export default function Result({ params }: { params: any }) {
  const { userPick } = params
  if (userPick !== 'rock' && userPick !== 'paper' && userPick !== 'scissors') {
    return <Error message='Invalid user pick.' />
  }
  const computerPick = getRandomPick()
  const result = getResult(userPick, computerPick)

  return (
    <div className='flex flex-col gap-y-8'>
      <span>You picked {userPick}.</span>
      <span>Computer picked {computerPick}.</span>
      <h1>You {result}.</h1>
      <Link href='/'>Play again</Link>
    </div>
  )
}
