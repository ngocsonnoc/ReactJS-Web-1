const IMAGE = require.context('../assets')
export function getImageFromPath(path){
    return IMAGE(path)
}