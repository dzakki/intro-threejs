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

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  // begin draw
  const geometry = new THREE.CircleGeometry( 1, 15);

  function makeInstance (geometry, color, x) {
      const material = new THREE.MeshPhongMaterial({ color }) // support with light 'DirectionalLight', and not support if DirectionalLight havent created
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube)
      cube.position.x = x

      return cube
  }

  const cubes = [
    makeInstance(geometry, new THREE.Color("rgb(255, 0, 0)"),  0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844,  2),
  ];


  function render (time) {
    time *= 0.001

    cubes.forEach((cube, i) => {
      const speed = 1 + i * .1;
      const rot = time * speed
      cube.rotation.x = time
      cube.rotation.y = time 
    });
    // cube.rotation.z = time
    renderer.render(scene, camera);

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}