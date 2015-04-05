var VSHADER_SOURCE = ['attribute vec4 a_Position;',
        'void main() {',
        'gl_Position = a_Position;',
        '}'
    ].join('\n'),

    FSHADER_SOURCE = ['void main() {',
        'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
        '}'
    ].join('\n');


function main() {
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas);

    if (!gl) {
        console.log("failed to get context");
        return;
    }

    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("failed to init shaders");
        return;
    }

    var n = initVertexBuffers(gl)

    if (n < 0) {
        console.log('Failed to init vertex buffer');
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    var verticies = new Float32Array([
            0.0, 0.5, -0.5, -0.5, 0.5, -0.5
        ]),
        n = 3,
        vertexBuffer = gl.createBuffer();

    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, verticies, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

    if (a_Position < 0) {
        console.log('Failed to get location of a_Position');
        return -1;
    }

    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    return n;
}