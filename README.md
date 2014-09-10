# tlog - topaxi's minimalistic node.js logger

## Example

By default, a log's stream is `stdout`, and its log level defaults is `DEBUG`. The log stream can be any writable stream.

```javascript
var Log = require('tlog')
  , log = new Log()

log.debug('starting application')
log.ok('everything good')
log.info('application started')
log.notice('something is wrong')
log.warning('something bad might happen')
log.error('application error')
log.critical('application crashed')
```

Set different log level:
```javascript
var log = new Log(Log.WARNING)

log.notice('foobar') // This won't be logged
```

All logging methods use [`util.format`](http://nodejs.org/api/util.html#util_util_format_format):

```javascript
log.debug('some object %j', { 'property': 'value' })
```

Write log to a file:

```javascript
var fileLog = new Log(Log.DEBUG, fs.createWriteStream('/tmp/debug.log'))

log.info('Output log to a file!')
```

## Log Levels

  - `0` `CRITICAL`    condition critical
  - `1` `ERROR`       condition error
  - `2` `WARNING`     condition warning
  - `3` `NOTICE`      condition normal, but significant
  - `4` `INFO`        a purely informational message
  - `5` `OK`          a purely informational message for an expected result
  - `6` `DEBUG`       debugging information

## License

(The MIT License)

Copyright (c) 2014 Damian Senn &lt;damian.senn@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
