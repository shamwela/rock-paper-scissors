import type { Pick } from 'app/types/Pick'

export function getRandomPick() {
  const picks: Pick[] = ['Rock', 'Paper', 'Scissors']
  const randomIndex = Math.floor(Math.random() * picks.length)
  const randomPick = picks[randomIndex]
  return randomPick
}
