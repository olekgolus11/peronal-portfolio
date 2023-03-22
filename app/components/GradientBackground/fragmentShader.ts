const fragmentShader = `

varying float v_displacement;


void main() {

  vec3 colorBottom = vec3(0.031, 0.125, 0.243);
  vec3 colorTop = vec3(0.333, 0.486, 0.576);


  vec3 color = mix(colorBottom, colorTop, v_displacement + 0.8);

  gl_FragColor = vec4(color,1.0);
}
`;

export default fragmentShader;
