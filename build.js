const path = require('path')
const fs = require('fs').promises
const {mdToPdf} = require('md-to-pdf')

const getFileName = (ext) => path
    .resolve(__dirname, `Vladimir_Ivakhnenko.${ext}`)

const build = async () => {
    const content = await fs.readFile(getFileName('md'), 'utf-8')

    try {
        const pdf = await mdToPdf({content})
        await fs.writeFile(getFileName('pdf'), pdf.content)
    } catch (e) {
        console.log(e)
    }
}

build()
