const path =require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

const basepath = path.resolve(__dirname, '../packages')

// sass.compiler = require('node-sass')
gulp.task('compile', () => {
	return gulp.src(`${basepath}/theme-style/*.scss`)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['ie > 9', 'last 2 versions'],
      cascade: false	
		}))	
		.pipe(cssmin())
		.pipe(gulp.dest('../lib/theme-style'))
})

gulp.task('build', gulp.parallel('compile')) // gulp.parallel for gulp 4