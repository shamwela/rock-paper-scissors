import type { Pick } from 'app/types/Pick'

export function getResult(userPick: Pick, computerPick: Pick) {
  if (userPick === 'rock') {
    switch (computerPick) {
      case 'rock':
        return 'drew'
      case 'paper':
        return 'lost'
      case 'scissors':
        return 'won'
    }
  }
  if (userPick === 'paper') {
    switch (computerPick) {
      case 'rock':
        return 'won'
      case 'paper':
        return 'drew'
      case 'scissors':
        return 'lost'
    }
  }
  if (userPick === 'scissors') {
    switch (computerPick) {
      case 'rock':
        return 'lost'
      case 'paper':
        return 'won'
      case 'scissors':
        return 'drew'
    }
  }
  throw new Error('The userPick should be Rock, Paper, or Scissors.')
}
