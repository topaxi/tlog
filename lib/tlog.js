/*!
 * tlog.js
 * Copyright(c) 2014 Damian Senn <damian.senn@gmail.com>
 * MIT Licensed
 */
var format = require('util').format

var levelStrings = [ 'CRITICAL', 'ERROR',    'WARNING',  'NOTICE',   'INFO',     'OK',       'DEBUG'    ]
var levelColors  = [ '\033[91m', '\033[91m', '\033[93m', '\033[93m', '\033[92m', '\033[92m', '\033[94m' ]
var colorEnd     = '\033[0m'

var Log = module.exports = function Log(level, stream) {
  if (typeof level == 'string') level = exports[level.toUpperCase()]

  if (level !== undefined) this.level = level

  this.stream = stream || process.stdout
}

levelStrings.forEach(function(str, lvl) {
  Log[str] = lvl

  Log.prototype[str.toLowerCase()] = function() {
    this.log(lvl, arguments)
  }
})

Log.prototype.color = true
Log.prototype.level = levelStrings.length - 1

Log.prototype.log = function(level, args) {
  if (level > this.level) return

  if (args[0] && args[0].stack) args[0] = args[0].stack

  var msg = format.apply(null, args)

  this.stream.write(this.format(level, msg))
}

Log.prototype.date = function() {
  return (new Date).toJSON()
}

Log.prototype.format = function(level, msg) {
  msg = format('[%s] %s: %s\n', this.date(), levelStrings[level], msg)

  if (this.color) msg = format('%s%s%s', levelColors[level], msg, colorEnd)

  return msg
}
