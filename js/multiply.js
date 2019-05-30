onmessage=function(e){
  let n1=e.data[0]
  let n2=e.data[1]
  let ans=n1*n2
  postMessage(ans)
}