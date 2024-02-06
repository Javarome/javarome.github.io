/**
 * Provides requestAnimationFrame in a cross browser way.
 * paulirish.com/2011/requestanimationframe-for-smart-animating/
 */
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  (function () {
    return (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback, _element) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })()
let canvas,
  gl,
  buffer,
  vertex_shader,
  fragment_shader,
  currentProgram,
  vertex_position,
  timeLocation,
  resolutionLocation,
  parameters = {
    start_time: new Date().getTime(),
    time: 0,
    screenWidth: 0,
    screenHeight: 0
  }
init()
animate()

function init() {
  vertex_shader = document.getElementById("vs").textContent
  fragment_shader = document.getElementById("fs").textContent
  canvas = document.querySelector("canvas")
  const contextId = "experimental-webgl"
  try {
    gl = canvas.getContext(contextId)
  } catch (error) {
    console.error(`Could not get ${contextId} context`)
  }
  if (!gl) {
    throw new Error("Could not get WebGL context")
  }
  // Create Vertex buffer (2 triangles)
  buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0]),
    gl.STATIC_DRAW
  )
  currentProgram = createProgram(vertex_shader, fragment_shader)
  timeLocation = gl.getUniformLocation(currentProgram, "time")
  resolutionLocation = gl.getUniformLocation(currentProgram, "resolution")
}

function createProgram(vertex, fragment) {
  var program = gl.createProgram()
  var vs = createShader(vertex, gl.VERTEX_SHADER)
  var fs = createShader(
    "#ifdef GL_ES\nprecision highp float;\n#endif\n\n" + fragment,
    gl.FRAGMENT_SHADER
  )
  if (vs == null || fs == null) return null
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.deleteShader(vs)
  gl.deleteShader(fs)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    alert(`ERROR:
VALIDATE_STATUS: ${gl.getProgramParameter(program, gl.VALIDATE_STATUS)}
ERROR: ${gl.getError()}

- Vertex Shader -
${vertex}

- Fragment Shader -
${fragment}`)
    return null
  }
  return program
}

function createShader(src, type) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert((type === gl.VERTEX_SHADER ? "VERTEX" : "FRAGMENT") + " SHADER:\n" + gl.getShaderInfoLog(shader))
    return null
  }
  return shader
}

function resizeCanvas(_event) {
  if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    parameters.screenWidth = canvas.width
    parameters.screenHeight = canvas.height
    gl.viewport(0, 0, canvas.width, canvas.height)
  }
}

function animate() {
  resizeCanvas()
  render()
  requestAnimationFrame(animate)
}

function render() {
  if (!currentProgram) {
    return
  }
  parameters.time = new Date().getTime() - parameters.start_time
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  // Load program into GPU
  gl.useProgram(currentProgram)
  // Set values to program variables
  gl.uniform1f(timeLocation, parameters.time / 1000)
  gl.uniform2f(resolutionLocation, parameters.screenWidth, parameters.screenHeight)
  // Render geometry
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.vertexAttribPointer(vertex_position, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(vertex_position)
  gl.drawArrays(gl.TRIANGLES, 0, 6)
  gl.disableVertexAttribArray(vertex_position)
}

