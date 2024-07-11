import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { GLTFLoader } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';


document.addEventListener('DOMContentLoaded', (event) => {
    const ptButton = document.getElementById('ptButton');
    const enButton = document.getElementById('enButton');

    ptButton.addEventListener('click', () => {
        switchLanguage('pt');
    });

    enButton.addEventListener('click', () => {
        switchLanguage('en');
    });

    const switchLanguage = (lang) => {
        if (lang === 'pt') {
            document.querySelectorAll('.pt').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.en').forEach(el => el.style.display = 'none');
        } else if (lang === 'en') {
            document.querySelectorAll('.pt').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.en').forEach(el => el.style.display = 'block');
        }
        localStorage.setItem('preferredLanguage', lang);
    };

    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    } else {
        switchLanguage('pt');
    }
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 500);
    document.getElementById('3d-container').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

        const loader = new GLTFLoader();
loader.load('https://raw.githubusercontent.com/AguineloP/AirFood/main/assets/model/modelo3d_drone.glb', function (gltf) {
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });
});
