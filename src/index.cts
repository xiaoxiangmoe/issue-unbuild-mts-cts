import plugin = require ('./plugin.js')

const originalSomePlugin = plugin.somePlugin
function somePlugin(...args: Parameters<typeof originalSomePlugin>) {
    return originalSomePlugin(...args)
}
somePlugin.somePlugin = originalSomePlugin

export = somePlugin
