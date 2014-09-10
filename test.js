var Log = require('./')

var log = new Log(Log.DEBUG)

log.critical('oops! %j', { 'obj': 'property' })
log.error('oops! %j', { 'obj': 'property' })
log.warning('uh oh! %j', { 'obj': 'property' })
log.notice('uh oh! %j', { 'obj': 'property' })
log.info('something %j', { 'obj': 'property' })
log.ok('everything good! %j', { 'obj': 'property' })
log.debug('debug info %j', { 'obj': 'property' })
