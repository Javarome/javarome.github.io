// Animated WebGL gradient behind the page — Jérôme's long-standing signature,
// softened (low alpha) so foreground cards stay readable.
export function initBackground(canvas) {
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
  if (!gl) return

  const vs = "attribute vec3 position;void main(){gl_Position=vec4(position,1.0);}"
  const fs = "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform float time;uniform vec2 resolution;void main(void){vec2 p=-1.0+2.0*gl_FragCoord.xy/resolution.xy;float r=abs(sin(p.x*p.y+time/2.0));float g=abs(sin(p.x*p.y+time/3.0));float b=abs(sin(p.x*p.y+time/4.0));gl_FragColor=vec4(r,g,b,0.42);}"

  const compile = (src, type) => {
    const s = gl.createShader(type)
    gl.shaderSource(s, src)
    gl.compileShader(s)
    return s
  }
  const prog = gl.createProgram()
  gl.attachShader(prog, compile(vs, gl.VERTEX_SHADER))
  gl.attachShader(prog, compile(fs, gl.FRAGMENT_SHADER))
  gl.linkProgram(prog)

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), gl.STATIC_DRAW)

  const timeLoc = gl.getUniformLocation(prog, "time")
  const resLoc = gl.getUniformLocation(prog, "resolution")
  const posLoc = gl.getAttribLocation(prog, "position")
  const start = Date.now()

  const resize = () => {
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
  }

  const loop = () => {
    resize()
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(prog)
    gl.uniform1f(timeLoc, (Date.now() - start) / 1000)
    gl.uniform2f(resLoc, canvas.width, canvas.height)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(posLoc)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
    requestAnimationFrame(loop)
  }
  loop()
}
