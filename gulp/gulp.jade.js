'use strict';
const cfg = global.cfg;
const gulp = require('gulp');
const jade = require('gulp-jade');
const plumber = require('gulp-plumber');
const changedInPlace = require('gulp-changed-in-place');

var gulpJade = function() {
	if(cfg.options.isDevelopment) {
		return gulp.src(cfg.src.views)
					.pipe(jade({
						pretty: true
					}))
					.pipe(plumber())
					.pipe(changedInPlace({
						firstPass: true
					}))
					.pipe(gulp.dest(cfg.dist.views))
	}else{
		throw new Error('请输入当前生产环境名称,--env=development');
	}
}

module.exports = gulpJade;