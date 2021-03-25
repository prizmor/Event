export let maxlength = (max) => value => {
  if (value){
    if (value.length > max) {
      return 'Максимум ' + max + ' символов'
    }
  }
  return undefined
}

export let requiredField = value => {
  if (value) { return undefined}
  return 'Обязательно'
}