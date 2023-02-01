import type { Pick } from 'app/types/Pick'
import { getRandomPick } from '@/app/utilities/getRandomPick'

type Params = { userPick: Pick }

export default function Result({ params }: { params: Params }) {
  const { userPick } = params
  const computerPick = getRandomPick()

  return (
    <div className='flex gap-x-8'>
      <span>You picked {userPick}.</span>
      <span>Computer picked {computerPick}.</span>
    </div>
  )
}
