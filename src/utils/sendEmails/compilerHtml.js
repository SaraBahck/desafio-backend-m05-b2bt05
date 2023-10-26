const fs = require('fs/promises')
const handlebars = require('handlebars')

const compilerHtml = async (file, context) => {
    const html = await fs.readFile(file)
    const compiler = handlebars.compile(html.toString())
    return compiler(context)
}

module.exports = compilerHtml