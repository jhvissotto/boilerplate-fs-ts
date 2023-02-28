// global
import { dirs } from '~/src/global'
// libs
import { Multer } from '~/src/libs/packages'
import { unit } from '~/src/libs/functions'

export const instance = Multer.create({
  dest: dirs.upload,
  // fileFilter: (req, file, cb) => {},
  // preservePath: false,
  // storage: Multer.diskStorage({
  //   // destination: (req, file, cb) => {},
  //   // filename: (req, file, cb) => {}
  // }),
  // limits: {
  //   fieldNameSize: unit.byte(100, 'b'), // Max field name size
  //   fieldSize: unit.byte(1, 'mb'), // Max field value size
  //   fields: Infinity, // Max number of non-file fields
  //   fileSize: Infinity, // For multipart forms, the max file size (in bytes)
  //   files: Infinity, // For multipart forms, the max number of file fields
  //   parts: Infinity, // For multipart forms, the max number of parts (fields + files)
  //   headerPairs: 2000 // For multipart forms, the max number of header key => value pairs to parse
  // }
})
