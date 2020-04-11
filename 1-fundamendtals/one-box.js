import * as THREE from 'three';

main()
function main () {
  const canvas = document.querySelector('#c')
  const renderer = new THREE.WebGLRenderer({ canvas })

  const fav = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;

  const camera = new THREE.PerspectiveCamera(fav, aspect, near, far)

  camera.position.z = 2; // decrease will be zoom.
  // camera.position.x = -0.01;
  // camera.position.y = -0.1;

  const scene = new THREE.Scene();

  // begin draw
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }) // just design of the box. ex: add color
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 }) // support with light 'DirectionalLight', and not support if DirectionalLight havent created

  const cube = new THREE.Mesh(geometry, material);
  // end draw

  // put draw in scene
  scene.add(cube);


  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // render

  function render (time) {
    time *= 0.001
    cube.rotation.x = time
    cube.rotation.y = time 
    // cube.rotation.z = time
    renderer.render(scene, camera);

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}