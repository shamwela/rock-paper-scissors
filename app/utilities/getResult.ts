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
  } else if (userPick === 'paper') {
    switch (computerPick) {
      case 'rock':
        return 'won'
      case 'paper':
        return 'drew'
      case 'scissors':
        return 'lost'
    }
  } else {
    // User pick is scissors
    switch (computerPick) {
      case 'rock':
        return 'lost'
      case 'paper':
        return 'won'
      case 'scissors':
        return 'drew'
    }
  }
}
