const fragmentShader = `

varying float v_displacement;


void main() {

  vec3 colorBottom = vec3(0.131, 0.125, 0.243);
  vec3 colorTop = vec3(0.433, 0.486, 0.576);


  vec3 color = mix(colorBottom, colorTop, v_displacement + 1.5);

  gl_FragColor = vec4(color,1.0);
}
`;

export default fragmentShader;
