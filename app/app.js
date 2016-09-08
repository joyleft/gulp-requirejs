var app = require('koa')(),
	koa = require('koa-router')(),
	logger = require('koa-logger'),
	json = require('koa-json'),
	views = require('koa-views'),
	onerror = require('koa-onerror');
	
var index = require('./routes/index');