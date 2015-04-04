var VSHADER_SOURCE = ['attribute float a_PointSize;',
        'attribute vec4 a_Position;',
        'void main() {',
        'gl_Position = a_Position;',
        'gl_PointSize = a_PointSize;',
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

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');

    if (a_Position < 0) {
        console.log('Failed to get location of a_Position');
        return;
    }

    if (a_PointSize < 0) {
        console.log('Failed to get location of a_PointSize');
        return;
    }

    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
    gl.vertexAttrib1f(a_PointSize, 20.0);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}