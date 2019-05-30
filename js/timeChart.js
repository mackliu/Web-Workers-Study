/*
chart:
{
  start:start,
  end:end,
  wmstart:wmstart,
  wmend:wmend,
  sw:{
    0:{
      start:start,
      end:end
    }
    1:{
      start:start,
      end:end
    },
    2:...........etc,
    length:n
  }
}
*/

//繪製多執行緒時間線

function timeChart(chart){
  let top=30;
  let left=50;
  let gap=40;
  let cv=document.createElement("canvas");
      cv.setAttribute("width",800)
      cv.setAttribute("height",500)
  let result=document.querySelector("#result")
      result.appendChild(cv)
      cv=cv.getContext('2d')
      cv.beginPath();
      cv.moveTo(left-0.5,top-0.5)
      cv.lineTo(left-0.5,top+Math.ceil((chart.end-chart.start)/2)-0.5)
      cv.closePath();
      cv.stroke();
      cv.font="14px Arial"
      cv.fillText("main",left-0.5-15,top+Math.ceil((chart.end-chart.start)/2)+20)

      cv.beginPath();
      wmx=chart.wmstart-chart.start;
      cv.moveTo(left-0.5,top+wmx-0.5)
      cv.lineTo(gap+left-0.5,top+wmx-0.5)
      cv.moveTo(gap+left-0.5,top+wmx-0.5)
      cv.lineTo(gap+left-0.5,Math.ceil((chart.wmend-chart.wmstart)/2)+wmx+top)
      cv.closePath();
      cv.stroke();
      cv.fillText("work",gap+left-0.5-15,Math.ceil((chart.wmend-chart.wmstart)/2)+wmx+top+20)
  for(let i=0;i<chart.sw.length;i++)    {
    cv.beginPath();
    let x=gap+left+i*gap-0.5
    let y=chart.sw[i].start-chart.start;
    let h=Math.ceil((chart.sw[i].end-chart.sw[i].start)/2)
    cv.moveTo(x,top+y-0.5)
    cv.lineTo(gap+x,top+y-0.5)
    cv.moveTo(gap+x,top+y-0.5)
    cv.lineTo(gap+x,top+y+h-0.5)
    cv.closePath();
    cv.stroke();
    cv.fillText("sub"+(i+1),gap+x-15,top+y+h+20)
  }
}