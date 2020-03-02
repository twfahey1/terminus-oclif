import {expect, test} from '@oclif/test'

describe('auth:whoami', () => {
  test
  .stdout()
  .command(['auth:whoami'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['auth:whoami', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
