let result = Array();

onmessage = function (e) {
  let object = e.data;
  for (let i = 0; i < object.length; i++) {
    let w = new Worker("readfile.js")
    w.postMessage(object[i])
    w.onmessage = function (e) {
      result.push(e.data)
      if (result.length >= object.length) {
        postMessage(result)
      }
    }
  }
}