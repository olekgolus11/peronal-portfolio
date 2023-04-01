export default /*glsl*/ `

varying float v_displacement;
uniform vec2 u_resolution;
uniform float u_time;


void main() {

  vec3 colorBottom = vec3(0.45, 0.45, 0.45);
  vec3 colorMid = vec3(0.15, 0.17, 0.19);
  vec3 colorTop = vec3(0.12, 0.14, 0.15);
  float displacement = v_displacement - 0.5;

  vec3 color = mix(colorBottom, colorMid, displacement * 1.5 );
 color = mix(color, colorTop, displacement * 2.8 - 0.3);

  gl_FragColor = vec4(color,1.0);
}
`;
