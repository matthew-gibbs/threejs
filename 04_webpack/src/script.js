import './style.css'
import * as THREE from 'three'

// Create Scene and get canvas
const scene = new THREE.Scene()
const sizes = { width: 800,
                height: 600
}
const canvas = document.querySelector('.webgl')

// Create Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1

// Create shape, from geometry and material
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)

// Add the cube and camera to the scene
scene.add(cube)
scene.add(camera)

// Create the renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)



