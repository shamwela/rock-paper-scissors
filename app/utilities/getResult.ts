import type { Pick } from 'app/types/Pick'

export function getResult(userPick: Pick, computerPick: Pick) {
  if (userPick === 'Rock') {
    switch (computerPick) {
      case 'Rock':
        return 'Drew'
      case 'Paper':
        return 'Lost'
      case 'Scissors':
        return 'Won'
    }
  }
  if (userPick === 'Paper') {
    switch (computerPick) {
      case 'Rock':
        return 'Won'
      case 'Paper':
        return 'Drew'
      case 'Scissors':
        return 'Lost'
    }
  }
  if (userPick === 'Scissors') {
    switch (computerPick) {
      case 'Rock':
        return 'Lost'
      case 'Paper':
        return 'Won'
      case 'Scissors':
        return 'Drew'
    }
  }
  throw new Error('The userPick should be Rock, Paper, or Scissors.')
}
