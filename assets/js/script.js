import * as THREE from 'https://cdn.skypack.dev/three@0.135.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.135.0/examples/jsm/loaders/GLTFLoader.js';

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
            document.querySelectorAll('.en').forEach(el.style.display = 'block');
        }
        localStorage.setItem('preferredLanguage', lang);
    };

    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    } else {
        switchLanguage('pt');
    }

    // Configuração do Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 500);
    document.getElementById('3d-container').appendChild(renderer.domElement);

    // Adicionar iluminação
    const light = new THREE.AmbientLight(0xffffff); // luz branca
    scene.add(light);

    // Carregar o modelo 3D
    const loader = new GLTFLoader();
    loader.load('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/FlightHelmet/glTF/FlightHelmet.gltf', function (gltf) {
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
});
