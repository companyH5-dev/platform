export default (parentName,name) => () => import(`.${parentName}/${name}/index.vue`)
