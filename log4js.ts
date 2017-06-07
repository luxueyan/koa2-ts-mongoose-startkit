export default {
  'appenders': [{
    'type': 'console',
    'category': 'console'
  }, {
    'category': 'info',
    'type': 'file',
    'filename': './logs/info.log',
    'maxLogSize': 104857500,
    'backups': 100
  }, {
    'category': 'trace',
    'type': 'datefile',
    'filename': './logs/trace/trace',
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd-hh.log'
  }, {
    'category': 'warn',
    'type': 'datefile',
    'filename': './logs/warn/warn',
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd-hh.log'
  }, {
    'category': 'error',
    'type': 'datefile',
    'filename': './logs/error/error',
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd-hh.log'

  }, {
    'category': 'fatal',
    'type': 'datefile',
    'filename': './logs/fatal/fatal',
    'alwaysIncludePattern': true,
    'pattern': '-yyyy-MM-dd-hh.log'
  }],
  'replaceConsole': true,
  'levels': {
    'info': 'ALL',
    'trace': 'ALL',
    'warn': 'ALL',
    'error': 'ALL',
    'fatal': 'ALL'
  }
}
// ALL TRACE DEBUG INFO WARN ERROR FATAL OFF
