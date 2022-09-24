/* eslint no-extend-native: ["error", { "exceptions": ["CanvasRenderingContext2D"] }] */

CanvasRenderingContext2D.prototype.strokeCircle = function (x, y, radius) {
  this.beginPath()
  this.arc(x, y, radius, 0, 2 * Math.PI)
  this.stroke()
}

CanvasRenderingContext2D.prototype.fillCircle = function (x, y, radius) {
  this.beginPath()
  this.arc(x, y, radius, 0, 2 * Math.PI)
  this.fill()
}

CanvasRenderingContext2D.prototype.fillPoint = function (x, y, size=2) {
  this.fillRect(x - size/2, y-size/2, size, size)
}

CanvasRenderingContext2D.prototype.strokeLine = function (x1, y1, x2, y2) {
  this.beginPath()
  this.moveTo(x1, y1)
  this.lineTo(x2, y2)
  this.stroke()
}

CanvasRenderingContext2D.prototype.fillLabelledPoint = function (x, y, label, size=2) {
  this.fillPoint(x, y, size)

  this.save()

  this.textAlign = 'center'
  this.textBaseline = 'bottom'
  this.fillText(label, x, y-size/2-3)

  this.restore()
}

CanvasRenderingContext2D.prototype.strokeLabelledLine = function (x1, y1, x2, y2, label) {
  const xmin = Math.min(x1, x2)
  const ymin = Math.min(y1, y2)
  const xmax = Math.max(x1, x2)
  const ymax = Math.max(y1, y2)

  this.save()

  this.strokeLine(x1, y1, x2, y2)
  this.textAlign = 'center'
  this.textBaseline = 'bottom'
  this.measureText(label)
  this.translate(xmin + (xmax - xmin)/2, ymin + (ymax - ymin)/2)
  this.rotate(Math.atan((ymax - ymin) / (xmax - xmin)))
  this.fillText(label, 0, -3*ctx.lineWidth)

  this.restore()
}

CanvasRenderingContext2D.prototype.strokeLabelledCircle = function (x, y, radius, label) {
  this.strokeCircle(x, y, radius)

  this.save()

  this.textAlign = 'center'
  this.textBaseline = 'middle'
  this.fillText(label, x, y)

  this.restore()
}

CanvasRenderingContext2D.prototype.strokeLabelledRect = function (x, y, width, height, label) {
  this.strokeRect(x, y, width, height)

  this.save()

  this.textAlign = 'center'
  this.textBaseline = 'middle'
  this.fillText(label, x + width/2, y + height/2)

  this.restore()
}
