import Rover from "../src/Rover"

describe('Mars Rover', () => {
  it('should return 0:0:N when no command is given', () => {
    const rover = new Rover()
    const result = rover.execute('')
    expect(result).toBe('0:0:N')
  })

  it('should return 0:0:E when given R command line', () => {
    const rover = new Rover()
    const result = rover.execute('R')
    expect(result).toBe('0:0:E')
  })

  it('should return 0:0:S when given RR command line', () => {
    const rover = new Rover()
    const result = rover.execute('RR')
    expect(result).toBe('0:0:S')
  })
})
