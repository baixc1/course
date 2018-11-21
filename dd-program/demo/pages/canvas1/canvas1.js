Page({
  onReady(){
    let ctx = dd.createCanvasContext('canvas')
    ctx.drawImage('https://img.alicdn.com/tfs/TB1GvVMj2BNTKJjy0FdXXcPpVXa-520-280.jpg', 0, 0, 250, 80)

    dd.downloadFile({
      url: 'http://www.runoob.com/try/demo_source/img_the_scream.jpg',
      success({ apFilePath }){
        ctx.drawImage(apFilePath,0,100)
        ctx.setFontSize(20)
        ctx.setTextBaseline('top')
        ctx.fillText('xx',0,100)
        
        ctx.draw()

        setTimeout(()=>{
          ctx.toTempFilePath({
            x:0,
            y:0,
            width: 200,
            height: 200,
            destWidth: 200,
            destHeight: 200,
            success(res){
              dd.previewImage({
                urls: [res.apFilePath],
                complete(res){
                  console.log(res)
                }
              })
            },
            complete(res){
              console.log(res)
            }
          })
        },1000)
      }
    })
    
  }
})