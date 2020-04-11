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
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.position.z = 4; // decrease will be zoom.
  // camera.position.x = -0.01;
  // camera.position.y = -0.1;

  const scene = new THREE.Scene();


  

  renderer.render(scene, camera);
}