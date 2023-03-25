export default /*glsl*/ `

varying float v_displacement;
uniform vec2 u_resolution;
uniform float u_time;


void main() {

  vec3 colorBottom = vec3(0.059,0.059,0.059);
  vec3 colorTop = vec3(0.00,0.00,0.00);


  vec3 color = mix(colorBottom, colorTop, v_displacement * 3.0);

  gl_FragColor = vec4(color,1.0);
}
`;
