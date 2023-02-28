// global
import { dirs } from '~/src/global'
// libs
import { Formidable } from '~/src/libs/packages'
import { unit } from '~/src/libs/functions'

export function initialize(opts?: Parameters<typeof Formidable.create>[0]) {
  // ======================================== //
  // ================ config ================ //
  // ======================================== //
  const instance = Formidable.create({
    // ==== name ==== //
    uploadDir: dirs.upload,
    // filename: (name, ext, part, form) => '',
    keepExtensions: true,

    // ==== filters ==== //
    // filter: ({}) => null,
    allowEmptyFiles: false,

    // ==== one ==== //
    minFileSize: unit.byte(1, 'kb'),
    maxFileSize: unit.byte(10, 'mb'),

    // ==== many ==== //
    multiples: false,
    maxFiles: 20,
    maxTotalFileSize: unit.byte(100, 'mb'),

    // ==== custom ==== //
    // enabledPlugins: ['json', 'querystring', 'multipart', 'octetstream'],
    ...opts,
  })

  // ========================================= //
  // ================ plugins ================ //
  // ========================================= //
  // uploader.use((self, opts) => {});

  // ======================================== //
  // ================ events ================ //
  // ======================================== //
  // uploader.once("", () => {
  //   uploader.emit("", {});
  // });

  // uploader.on("", () => {
  //   uploader.emit("", {});
  // });

  return { instance }
}
