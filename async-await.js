async function wait()
{

let val = await function(){
sleep(5000);
  return true;
};
  console.log(val);

}

wait();

console.log('hello world');
