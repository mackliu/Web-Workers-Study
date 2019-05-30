onmessage = function (e) {
  let file = e.data
  let fileReader = new FileReader();
  fileReader.onload = function (e) {
    
    let blob=new Blob([new DataView(e.target.result)],{type:"audio/mpeg"})
    
    postMessage(blob)
    close();

  }
  
  fileReader.readAsArrayBuffer(file)
}