function main() {
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas)

    if (!gl) {
        console.log("failed to get the rednering context for Webgl");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}