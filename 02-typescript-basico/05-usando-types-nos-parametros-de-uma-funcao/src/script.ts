function firstLetterUpperCase(name: string, lastname: string, age: number){
  let firstLetter = name.charAt(0).toUpperCase();
  return firstLetter + name.substring(1);

}