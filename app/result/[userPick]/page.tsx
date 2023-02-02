import type { Pick } from 'app/types/Pick'
import { getRandomPick } from 'app/utilities/getRandomPick'
import { getResult } from 'app/utilities/getResult'

type Params = { userPick: Pick }

export default function Result({ params }: { params: Params }) {
  const { userPick } = params
  const computerPick = getRandomPick()
  const result = getResult(userPick, computerPick)

  return (
    <div className='flex gap-x-8'>
      <span>You picked {userPick}.</span>
      <span>Computer picked {computerPick}.</span>
      <h1>You {result}.</h1>
    </div>
  )
}
