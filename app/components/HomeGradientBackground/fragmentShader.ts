export default /*glsl*/ `

varying float v_displacement;
uniform vec2 u_resolution;
uniform float u_time;


void main() {

  vec3 colorBottom = vec3(0.145,0.459,0.988);
  vec3 colorTop = vec3(0.416,0.067,0.796);


  vec3 color = mix(colorBottom, colorTop, v_displacement * 3.0);

  gl_FragColor = vec4(color,1.0);
}
`;
