const sharp = require('sharp')

async function process (filename) {
  const img = await sharp(filename)
  await img.metadata()
  await img.greyscale().resize(32, 32, { fit: 'fill' }).raw().toBuffer()
}

async function main () {
  await process('images/longhorn.gif')
  await process('images/photo1.jpg')
  await process('images/photo2.jpg')
  await process('images/wolfrock.gif')
  await process('images/wolf1.jpg')
  await process('images/wolf2.jpg')
}

main().then(() => {
  console.log('success!')
}).catch((err) => {
  console.error('fail!', err)
})
