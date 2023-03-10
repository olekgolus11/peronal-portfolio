const fragmentShader = `

varying float v_displacement;


void main() {

  vec3 colorBottom = vec3(0.416, 0.51, 0.98);
  vec3 colorTop = vec3(0.988, 0.36, 0.49);


  vec3 color = mix(colorBottom, colorTop, v_displacement + 0.8);

  gl_FragColor = vec4(color,1.0);
}
`;

export default fragmentShader;
