'use strict';
const cfg = global.cfg;
const gulp = require('gulp');
const revCollector = require('gulp-rev-collector');
const plumber = require('gulp-plumber');


var gulpHtml = function() {
	let distPath = cfg.dist.views + '*.html';
	let revFile = cfg.dist.rev + '**/*.json';
	if(cfg.options.isProduction) {
		return gulp.src([revFile, distPath])
			.pipe(plumber())
			.pipe(revCollector({
				replaceReved: true
			}))
			.pipe(gulp.dest(cfg.dist.views))
	}else{
		throw new Error('请输入当前开发环境,--env=production');
	}
}
module.exports = gulpHtml;