function Random(){
  let num = Math.random()*110;
  return <p>Random number is {Math.round(num)}</p>
}
export default Random;