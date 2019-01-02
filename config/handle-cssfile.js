const fs = require('fs')
const path = require('path')

let Components = require('../components.json')
const themes = ['theme-style']
const basepath = path.resolve(__dirname, '../packages/')

Components = Object.keys(Components)

const fileExists = filePath => {
	try {
		return fs.statSync(filePath).isFile()
	} catch (err) {
		return false;
	}
}

themes.forEach(theme => {
	const isSCSS = theme !== 'theme-default'
	let indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n'

	Components.forEach(key => {
		const fileName = key + (isSCSS ? '.scss' : '.css')
		const filePath = path.resolve(basepath, theme, fileName)
		
		indexContent += '@import "./' + fileName + '";\n'
		if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8')
      console.log(theme, ' create no exists ', fileName, ' file')
    }
	})
	
	fs.writeFileSync(path.resolve(basepath, theme, isSCSS ? 'index.scss' : 'index.css'), indexContent)
})