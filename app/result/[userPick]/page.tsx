import type { Pick } from 'app/types/Pick'
import { getRandomPick } from 'app/utilities/getRandomPick'
import { getResult } from 'app/utilities/getResult'
import Link from 'next/link'

type Params = { userPick: Pick }

export default function Result({ params }: { params: Params }) {
  const { userPick } = params
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
