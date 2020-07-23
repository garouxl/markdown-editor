'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')

// on windows, install and use `cross-spawn`:
// const { spawn } = require('cross-spawn')
// gulp 4 quebra no node 12, ver o que fazer no futuro

gulp.task('lint', (cb) => {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
  cmd.on('close', () => cb())
})

gulp.task('default', ['lint'], () => {
  // gulp.watch(join(__dirname, 'src', '**', '*.js'), ['lint'])
  gulp.watch('src/**/*.js', ['lint'])
})
