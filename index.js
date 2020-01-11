const generateResponsiveImages = require('responsive-images-generator/lib').generateResponsiveImages
const renameImagesToSize = require('responsive-images-generator/lib').renameImagesToSize
const fs = require('fs')

const configs = [
    { width: '20%', rename: { suffix: '@1x' } },
    { width: '40%', rename: { suffix: '@2x' } },
    { width: '60%', rename: { suffix: '@3x' } },
    { width: '80%', rename: { suffix: '@4x' } },
    { width: '100%', rename: { suffix: '@5x' } }
]
const images = fs.readdirSync('./images/')
    .filter((file) => file !== '.DS_Store')
    .map((file) => `./images/${file}`)

// Will create images with suffix in the folder images
generateResponsiveImages(images, configs)

const pattern = /(?:.*)(@[0-9]{0,10}x)$/
const files = fs.readdirSync('./images/')
    .filter((file) => file !== '.DS_Store')
    .map((file) => `./images/${file}`)

// Will rename all images present in the folder image which contains suffix `@{$number}x` by `${width}x`.
renameImagesToSize(files, pattern)
