export default /*glsl*/ `

varying float v_displacement;
uniform vec2 u_resolution;
uniform float u_time;


void main() {

  vec3 colorBottom = vec3(0.969,0.918,0.376);
  vec3 colorMid = vec3(0.235,0.949,0.871);
  vec3 colorTop = vec3(0.969,0.455,0.733);

  

  vec3 color = mix(colorBottom, colorMid, v_displacement * 3.0 + 0.5);
  color = mix(color, colorTop, v_displacement * 2.0 - 0.5);



  gl_FragColor = vec4(color,1.0);
}
`;
