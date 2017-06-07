import * as opn from 'opn'
import * as parser from 'minimist'

const args = parser(process.argv.slice(2))

opn(args.host)
