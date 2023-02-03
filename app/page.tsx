'use client'
import Image from 'next/image'
import Rock from 'public/rock.svg'
import Paper from 'public/paper.svg'
import Scissors from 'public/scissors.svg'
import { getRandomPick } from './utilities/getRandomPick'
import { getResult } from './utilities/getResult'
import type { Pick } from './types/Pick'
import { useState } from 'react'
import type { Result } from './types/Result'

export default function Home() {
  const [userPick, setUserPick] = useState<Pick>()
  const [computerPick, setComputerPick] = useState<Pick>()
  const [result, setResult] = useState<Result>()

  function handlePick(userPick: Pick) {
    setUserPick(userPick)
    const computerPick = getRandomPick()
    setComputerPick(computerPick)
    const result = getResult(userPick, computerPick)
    setResult(result)
  }

  return (
    <div className='flex flex-col gap-y-8'>
      <h1>Rock, Paper, Scissors</h1>
      <h2>Pick one.</h2>
      <div className='flex gap-x-8'>
        <Image
          alt='rock'
          src={Rock}
          onClick={() => handlePick('rock')}
          className='cursor-pointer'
        />
        <Image
          alt='paper'
          src={Paper}
          onClick={() => handlePick('paper')}
          className='cursor-pointer'
        />
        <Image
          alt='scissors'
          src={Scissors}
          onClick={() => handlePick('scissors')}
          className='cursor-pointer'
        />
      </div>
      {userPick && computerPick && result && (
        <>
          <span>You picked {userPick}.</span>
          <span>Computer picked {computerPick}.</span>
          <h2>You {result}.</h2>
        </>
      )}
    </div>
  )
}
