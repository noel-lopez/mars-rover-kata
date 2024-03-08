const compassRight = ['N', 'E', 'S', 'W'];

export default class Rover {
  execute(command: string): string {
      return `0:0:${compassRight[command.length % compassRight.length]}`
  }
}
