export default /*glsl*/ `

varying float v_displacement;
uniform vec2 u_resolution;
uniform float u_time;


void main() {

  vec3 colorBottom = vec3(0.05, 0.05, 0.05);
  vec3 colorTop = vec3(0.12, 0.14, 0.15);


  vec3 color = mix(colorBottom, colorTop, v_displacement * 1.0);

  gl_FragColor = vec4(color,1.0);
}
`;
