const compassRight = ['N', 'E', 'S', 'W'];
const compassLeft = ['N','W','S','E'];
export default class Rover {
  execute(commands: string): string {
    if(commands.includes('L')){  
      return `0:0:${compassLeft[commands.length % compassLeft.length]}`;      
    }
    return `0:0:${compassRight[commands.length % compassRight.length]}`;
  }
}

