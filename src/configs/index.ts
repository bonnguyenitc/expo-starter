import configDev from './dev'
import configProd from './prod'

const IS_DEV = process.env.NODE_ENV === 'development'

const config = IS_DEV ? configDev : configProd

export default config
