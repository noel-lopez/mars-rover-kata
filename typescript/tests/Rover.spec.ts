class Rover {
  execute(command: string): string {
    return '0:0:N'
  }
}


describe('Mars Rover', () => {
  it('should return 0:0:N when no command is given', () => {
    const rover = new Rover()
    const result = rover.execute('')
    expect(result).toBe('0:0:N')
  })
})
