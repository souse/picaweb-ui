import 'packages/theme-style/index.scss'

import Button from 'packages/button'
import ButtonGroup from 'packages/button-group'

const components = [
	Button,
	ButtonGroup
]

const install = function(Vue) {
	// if (install.installed) return
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}


export default {
	version: '1.0.0',
	install,

	Button,
	ButtonGroup
}

/**
module.exports = {
	version: '1.0.0',
	install,

	Button,
	ButtonGroup
}

module.exports.default = module.exports;
**/