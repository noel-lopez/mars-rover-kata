import Rover from "../src/Rover"

describe('Mars Rover', () => {
    let rover: Rover;

    beforeEach(() => {
       rover = new Rover();
    });

    it.each([
        ['0:0:N', ''],
        ['0:0:E', 'R'],
        ['0:0:S', 'RR'],
        ['0:0:W', 'RRR'],
        ['0:0:N', 'RRRR'],
        ['0:0:E', 'RRRRR'],
        ])('should return %j when the command is %j', (expectedLandingPosition: string, commands: string) => {
        const result = rover.execute(commands)
        expect(result).toBe(expectedLandingPosition)
    })

    it.each([
      ['0:0:W', 'L'],
      ['0:0:S', 'LL'],
      ['0:0:E', 'LLL'],
      ])('should return %j when the command is %j', (expectedLandingPosition: string, commands: string) => {
      const result = rover.execute(commands)
      expect(result).toBe(expectedLandingPosition)
  })

})
