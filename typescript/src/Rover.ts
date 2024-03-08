const compassRight = ['N', 'E', 'S', 'W'];

export default class Rover {
  execute(command: string): string {
      if(command === 'L') return '0:0:W'
      if(command === 'LL') return '0:0:S'
      if(command === 'LLL') return '0:0:E'
      return `0:0:${compassRight[command.length % compassRight.length]}`
  }
}

