Page({
  data: {
    w: 300,
    mx: 5,
    r: 10,
    maxW: 0
  },
  onReady(){
    let d = this.data
    let w = d.w
    let mx = d.mx

    d.maxW = w - d.r
    this.point = {
      x: Math.random() * d.maxW,
      y: Math.random() * d.maxW,
      dx: Math.random() * mx,
      dy: Math.random() * mx,
    }
    this.calColor(this.point)
    setInterval(()=>{this.draw(), 17})
  },
  draw(){
    let d = this.data
    let p = this.point
    let r = d.r
    let maxW = d.maxW
    let ctx = dd.createCanvasContext('canvas')

    ctx.setFillStyle('#fff')
    ctx.fillRect(0,0,300,300)

    ctx.beginPath()
    ctx.arc(p.x,p.y,r,0,2*Math.PI)
    ctx.setFillStyle("rgb("+p.r+","+p.g+","+p.b+")")
    ctx.fill()
    ctx.draw()

    p.x += p.dx
    p.y += p.dy

    if(p.x <= r || p.x >= maxW){
      p.dx *= -1
      this.calColor(p)
      if(p.x < r){
        p.x = r
      }else if(p.x > maxW){
        p.x = maxW
      }
    }

    if(p.y <= r || p.y >= maxW){
      p.dy *= -1
      this.calColor(p)
      if(p.y <  r){
        p.y = r
      }else if(p.y > maxW){
        p.y = maxW
      }
    }
  },
  calColor(obj){
    const calColorHex = this.calColorHex
    obj.r = calColorHex()
    obj.g = calColorHex()
    obj.b = calColorHex()
  },
  calColorHex(){
    return Math.random() * 255 | 0
  }
})