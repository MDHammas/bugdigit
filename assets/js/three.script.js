
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.124.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("#canvas");
const originalBtn = document.querySelector(".original-btn");
const contentOne = document.querySelector(".content-1");
const contentTwo = document.querySelector(".content-2");
const contentThree = document.querySelector(".content-3");
const contentFour = document.querySelector(".content-4");
const contentFive = document.querySelector(".content-5");
const outOne = document.querySelector("#out-1");
const outTwo = document.querySelector("#out-2");
const outThree = document.querySelector("#out-3");
const outFour = document.querySelector("#out-4");
const outFive = document.querySelector("#out-5");

let scene, camera, renderer;
let rotateAroundGroup = false;
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
camera.position.set(0, 0, 5);
const light = new THREE.HemisphereLight(0xffffff, "cornflowerblue", 1);
scene.add(light);
const group = new THREE.Group();
const geometry = new THREE.PlaneBufferGeometry(1, 1, 1);
const textureLoader = new THREE.TextureLoader();

const texture11 = textureLoader.load('assets/images/star-capital.webp');
const texture12 = textureLoader.load('assets/images/star-capital.webp');
const texture13 = textureLoader.load('assets/images/star-capital.webp');
const texture14 = textureLoader.load('assets/images/star-capital.webp');
const texture15 = textureLoader.load('assets/images/star-capital.webp');
const texture16 = textureLoader.load('assets/images/star-capital.webp');
const texture17 = textureLoader.load('assets/images/star-capital.webp');
const texture18 = textureLoader.load('assets/images/star-capital.webp');
const texture19 = textureLoader.load('assets/images/star-capital.webp');
const texture20 = textureLoader.load('assets/images/star-capital.webp');
const texture21 = textureLoader.load('assets/images/star-capital.webp');
const texture22 = textureLoader.load('assets/images/star-capital.webp');
const texture23 = textureLoader.load('assets/images/star-capital.webp');
const texture24 = textureLoader.load('assets/images/star-capital.webp');
const texture25 = textureLoader.load('assets/images/star-capital.webp');
const texture26 = textureLoader.load('assets/images/star-capital.webp');
const texture27 = textureLoader.load('assets/images/star-capital.webp');
const texture28 = textureLoader.load('assets/images/star-capital.webp');
const texture29 = textureLoader.load('assets/images/star-capital.webp');
const texture30 = textureLoader.load('assets/images/star-capital.webp');
const texture31 = textureLoader.load('assets/images/star-capital.webp');
const texture32 = textureLoader.load('assets/images/star-capital.webp');
const texture33 = textureLoader.load('assets/images/star-capital.webp');
const texture34 = textureLoader.load('assets/images/star-capital.webp');
const texture35 = textureLoader.load('assets/images/star-capital.webp');
const texture36 = textureLoader.load('assets/images/star-capital.webp');
const texture37 = textureLoader.load('assets/images/star-capital.webp');
const texture38 = textureLoader.load('assets/images/star-capital.webp');
const texture39 = textureLoader.load('assets/images/star-capital.webp');
const texture40 = textureLoader.load('assets/images/star-capital.webp');
const texture1 = textureLoader.load('./assets/images/laptop.webp');
texture1.encoding = THREE.sRGBEncoding;
const texture2 = textureLoader.load('./assets/images/mobile3.webp');
texture2.encoding = THREE.sRGBEncoding;
const texture3 = textureLoader.load('./assets/images/game.webp');
texture3.encoding = THREE.sRGBEncoding;
const texture4 = textureLoader.load('./assets/images/digital.webp');
texture4.encoding = THREE.sRGBEncoding;
const texture5 = textureLoader.load('./assets/images/media.webp');
texture5.encoding = THREE.sRGBEncoding;
const texture9 = textureLoader.load('./assets/images/spider-2.webp');
const texture10 = textureLoader.load('./assets/images/web_1.webp');
texture10.encoding = THREE.sRGBEncoding;

const material1 = new THREE.MeshBasicMaterial({ map: texture1, transparent: true, alphaTest: 0.8 });
const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true, alphaTest: 0.6 });
const material3 = new THREE.MeshBasicMaterial({ map: texture3, transparent: true, alphaTest: 0.8 });
const material4 = new THREE.MeshBasicMaterial({ map: texture4, transparent: true, alphaTest: 0.5 });
const material5 = new THREE.MeshBasicMaterial({ map: texture5, transparent: true, alphaTest: 0.8 });
const material9 = new THREE.MeshBasicMaterial({ map: texture9, transparent: true, alphaTest: 0.9 });
const material10 = new THREE.MeshBasicMaterial({ map: texture10, transparent: true, alphaTest: -1 });
const material11 = new THREE.MeshBasicMaterial({ map: texture11, transparent: true, alphaTest: 0 });
const material12 = new THREE.MeshBasicMaterial({ map: texture12, transparent: true, alphaTest: 0 });
const material13 = new THREE.MeshBasicMaterial({ map: texture13, transparent: true, alphaTest: 0 });
const material14 = new THREE.MeshBasicMaterial({ map: texture14, transparent: true, alphaTest: 0 });
const material15 = new THREE.MeshBasicMaterial({ map: texture15, transparent: true, alphaTest: 0 });
const material16 = new THREE.MeshBasicMaterial({ map: texture16, transparent: true, alphaTest: 0 });
const material17 = new THREE.MeshBasicMaterial({ map: texture17, transparent: true, alphaTest: 0 });
const material18 = new THREE.MeshBasicMaterial({ map: texture18, transparent: true, alphaTest: 0 });
const material19 = new THREE.MeshBasicMaterial({ map: texture19, transparent: true, alphaTest: 0 });
const material20 = new THREE.MeshBasicMaterial({ map: texture20, transparent: true, alphaTest: 0 });
const material21 = new THREE.MeshBasicMaterial({ map: texture21, transparent: true, alphaTest: 0 });
const material22 = new THREE.MeshBasicMaterial({ map: texture22, transparent: true, alphaTest: 0 });
const material23 = new THREE.MeshBasicMaterial({ map: texture23, transparent: true, alphaTest: 0 });
const material24 = new THREE.MeshBasicMaterial({ map: texture24, transparent: true, alphaTest: 0 });
const material25 = new THREE.MeshBasicMaterial({ map: texture25, transparent: true, alphaTest: 0 });
const material26 = new THREE.MeshBasicMaterial({ map: texture26, transparent: true, alphaTest: 0 });
const material27 = new THREE.MeshBasicMaterial({ map: texture27, transparent: true, alphaTest: 0 });
const material28 = new THREE.MeshBasicMaterial({ map: texture28, transparent: true, alphaTest: 0 });
const material29 = new THREE.MeshBasicMaterial({ map: texture29, transparent: true, alphaTest: 0 });
const material30 = new THREE.MeshBasicMaterial({ map: texture30, transparent: true, alphaTest: 0 });
const material31 = new THREE.MeshBasicMaterial({ map: texture31, transparent: true, alphaTest: 0 });
const material32 = new THREE.MeshBasicMaterial({ map: texture32, transparent: true, alphaTest: 0 });
const material33 = new THREE.MeshBasicMaterial({ map: texture33, transparent: true, alphaTest: 0 });
const material34 = new THREE.MeshBasicMaterial({ map: texture34, transparent: true, alphaTest: 0 });
const material35 = new THREE.MeshBasicMaterial({ map: texture35, transparent: true, alphaTest: 0 });
const material36 = new THREE.MeshBasicMaterial({ map: texture36, transparent: true, alphaTest: 0 });
const material37 = new THREE.MeshBasicMaterial({ map: texture37, transparent: true, alphaTest: 0 });
const material38 = new THREE.MeshBasicMaterial({ map: texture38, transparent: true, alphaTest: 0 });
const material39 = new THREE.MeshBasicMaterial({ map: texture39, transparent: true, alphaTest: 0 });
const material40 = new THREE.MeshBasicMaterial({ map: texture40, transparent: true, alphaTest: 0 });

const box = new THREE.Mesh(geometry, material1);
group.add(box);
const box2 = new THREE.Mesh(geometry, material2);
group.add(box2);
const box3 = new THREE.Mesh(geometry, material3);
group.add(box3);
const box4 = new THREE.Mesh(geometry, material4);
group.add(box4);
const box5 = new THREE.Mesh(geometry, material5);
group.add(box5);
const box9 = new THREE.Mesh(geometry, material9);
group.add(box9);
const box10 = new THREE.Mesh(geometry, material10);
group.add(box10);
const box11 = new THREE.Mesh(geometry, material11);
group.add(box11);
const box12 = new THREE.Mesh(geometry, material12);
group.add(box12);
const box13 = new THREE.Mesh(geometry, material13);
group.add(box13);
const box14 = new THREE.Mesh(geometry, material14);
group.add(box14);
const box15 = new THREE.Mesh(geometry, material15);
group.add(box15);
const box16 = new THREE.Mesh(geometry, material16);
group.add(box16);
const box17 = new THREE.Mesh(geometry, material17);
group.add(box17);
const box18 = new THREE.Mesh(geometry, material18);
group.add(box18);
const box19 = new THREE.Mesh(geometry, material19);
group.add(box19);
const box20 = new THREE.Mesh(geometry, material20);
group.add(box20);
const box21 = new THREE.Mesh(geometry, material21);
group.add(box21);
const box22 = new THREE.Mesh(geometry, material22);
group.add(box22);
const box23 = new THREE.Mesh(geometry, material23);
group.add(box23);
const box24 = new THREE.Mesh(geometry, material24);
group.add(box24);
const box25 = new THREE.Mesh(geometry, material25);
group.add(box25);
const box26 = new THREE.Mesh(geometry, material26);
group.add(box26);
const box27 = new THREE.Mesh(geometry, material27);
group.add(box27);
const box28 = new THREE.Mesh(geometry, material28);
group.add(box28);
const box29 = new THREE.Mesh(geometry, material29);
group.add(box29);
const box30 = new THREE.Mesh(geometry, material30);
group.add(box30);
const box31 = new THREE.Mesh(geometry, material31);
group.add(box31);
const box32 = new THREE.Mesh(geometry, material32);
group.add(box32);
const box33 = new THREE.Mesh(geometry, material33);
group.add(box33);
const box34 = new THREE.Mesh(geometry, material34);
group.add(box34);
const box35 = new THREE.Mesh(geometry, material35);
group.add(box35);
const box36 = new THREE.Mesh(geometry, material36);
group.add(box36);
const box37 = new THREE.Mesh(geometry, material37);
group.add(box37);
const box38 = new THREE.Mesh(geometry, material38);
group.add(box38);
const box39 = new THREE.Mesh(geometry, material39);
group.add(box39);
const box40 = new THREE.Mesh(geometry, material40);
group.add(box40);

// Function to adjust box positions based on screen width
function adjustBoxPositions() {

     if (window.innerWidth <= 576) {

        box.position.set(0, -2.1, -5);
        box.scale.set(1.7, 1.7, 1.7);
        box2.position.set(1.8, -1.3, -7);
        box3.position.set(1.4, 0.8, -7);
        box4.position.set(-1.4, 0.9, -7);
        box5.position.set(-1.8, -1.3, -7);
        box9.position.set(0, 1.2, 0.8);
        box10.position.set(0.5, 0, -9);
        box10.scale.set(9, 9, 9);

    } else if (window.innerWidth <= 768) {

        box.position.set(0, -1.1, -2);
        box.scale.set(1.6, 1.6, 1.6);
        box2.position.set(-1.8, -1.1, -4);
        box3.position.set(-1.5, 1.3, -4);
        box4.position.set(1.6, 0.3, -4);
        box5.position.set(1.8, -2.2, -4);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0.5, 0, -5);
        box10.scale.set(9, 9, 9);

    } else if (window.innerWidth <= 820) {

        box.position.set(0, -1.1, -2);
        box.scale.set(1.6, 1.6, 1.6);
        box2.position.set(-1.8, -1.1, -4);
        box3.position.set(-1.5, 1.3, -4);
        box4.position.set(1.6, 0.3, -4);
        box5.position.set(1.8, -2.2, -4);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0.5, 0, -5);
        box10.scale.set(9, 9, 9);

    } else if (window.innerWidth <= 1024) {

        box.position.set(0, -1.1, -2);
        box.scale.set(1.6, 1.6, 1.6);
        box2.position.set(-1.8, -1.1, -4);
        box3.position.set(-1.5, 1.3, -4);
        box4.position.set(1.6, 0.3, -4);
        box5.position.set(1.8, -2.2, -4);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0.5, 0, -5);
        box10.scale.set(9, 9, 9);

    } else if (window.innerWidth <= 1500) {

        box.position.set(0, -0.8, -1.6);
        box.scale.set(1.5, 1.5, 1.5);
        box2.position.set(-4.1, -1.1, -4);
        box2.scale.set(0.9, 0.9, 0.9);
        box3.position.set(-3.4, 1.5, -4);
        box3.scale.set(0.9, 0.9, 0.9);
        box4.position.set(3, 1.6, -4);
        box4.scale.set(0.9, 0.9, 0.9);
        box5.position.set(3.9, -2.2, -4);
        box5.scale.set(0.9, 0.9, 0.9);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0.5, 0, -5);
        box10.scale.set(10, 10, 10);

    }else if (window.innerWidth <= 1600) {

        box.position.set(0, -0.8, -1.6);
        box.scale.set(1.5, 1.5, 1.5);
        box2.position.set(-3.8, -1.1, -4);
        box2.scale.set(0.9, 0.9, 0.9);
        box3.position.set(-3.1, 1.5, -4);
        box3.scale.set(0.9, 0.9, 0.9);
        box4.position.set(2.7, 1.6, -4);
        box4.scale.set(0.9, 0.9, 0.9);
        box5.position.set(3.5, -2.2, -4);
        box5.scale.set(0.9, 0.9, 0.9);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0.5, 0, -5);
        box10.scale.set(10, 10, 10);

    }else if (window.innerWidth <= 1920) {

        box.position.set(0, -0.8, -1.6);
        box.scale.set(1.5, 1.5, 1.5);
        box2.position.set(-3.9, -1.1, -4);
        box2.scale.set(0.9, 0.9, 0.9);
        box3.position.set(-3.3, 1.5, -4);
        box3.scale.set(0.9, 0.9, 0.9);
        box4.position.set(3.1, 1.6, -4);
        box4.scale.set(0.9, 0.9, 0.9);
        box5.position.set(3.7, -2.2, -4);
        box5.scale.set(0.9, 0.9, 0.9);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0.5, 0, -5);
        box10.scale.set(10, 10, 10);

    }else if (window.innerWidth <= 2560) {

        box.position.set(0, -0.8, -1.6);
        box.scale.set(1.5, 1.5, 1.5);
        box2.position.set(-3.9, -1.1, -4);
        box2.scale.set(0.9, 0.9, 0.9);
        box3.position.set(-3.1, 1.5, -4);
        box3.scale.set(0.9, 0.9, 0.9);
        box4.position.set(3.1, 1.6, -4);
        box4.scale.set(0.9, 0.9, 0.9);
        box5.position.set(3.8, -2.2, -4);
        box5.scale.set(0.9, 0.9, 0.9);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0.5, 0, -5);
        box10.scale.set(10, 10, 10);
    }
    if(window.innerWidth <= 2560){
        box11.position.set(-0.2, 1, -7);
        box11.scale.set(0.3, 0.3, 0.3);
        box12.position.set(-2.8, 4, -7);
        box12.scale.set(0.2, 0.2, 0.2);
        box13.position.set(-2.8, -0.6, -7);
        box13.scale.set(0.1, 0.1, 0.1);
        box14.position.set(-10.2, -1.5, -7);
        box14.scale.set(0.3, 0.3, 0.3);
        box15.position.set(-9, 4, -7);
        box15.scale.set(0.2, 0.2, 0.2);
        box16.position.set(-5.8, 3, -7);
        box16.scale.set(0.1, 0.1, 0.1);
        box17.position.set(-6.8, -1.3, -7);
        box17.scale.set(0.2, 0.2, 0.2);
        box18.position.set(-8.5, 0.8, -7);
        box18.scale.set(0.2, 0.2, 0.2);
        box19.position.set(-8, -4.4, -7);
        box19.scale.set(0.3, 0.3, 0.3);
        box20.position.set(-4, -3.1, -7);
        box20.scale.set(0.2, 0.2, 0.2);
        box21.position.set(2.6, -1, -7);
        box21.scale.set(0.3, 0.3, 0.3);
        box22.position.set(4.2, -3, -7);
        box22.scale.set(0.2, 0.2, 0.2);
        box23.position.set(2.5, -4.4, -7);
        box23.scale.set(0.3, 0.3, 0.3);
        box24.position.set(9, -3.1, -7);
        box24.scale.set(0.1, 0.1, 0.1);
        box25.position.set(6.8, -1.5, -7);
        box25.scale.set(0.3, 0.3, 0.3);
        box26.position.set(0.9, 4.1, -7);
        box26.scale.set(0.2, 0.2, 0.2);
        box27.position.set(2.9, 2.6, -7);
        box27.scale.set(0.3, 0.3, 0.3);
        box28.position.set(4.7, 0.4, -7);
        box28.scale.set(0.1, 0.1, 0.1);
        box29.position.set(7, 1.2, -7);
        box29.scale.set(0.2, 0.2, 0.2);
        box30.position.set(9.5, -0.6, -7);
        box30.scale.set(0.2, 0.2, 0.2);
        box31.position.set(5.6, 4, -7);
        box31.scale.set(0.2, 0.2, 0.2);
        box32.position.set(8.5, 4.1, -7);
        box32.scale.set(0.2, 0.2, 0.2);
        box33.position.set(-7.6, 2.4, -7);
        box33.scale.set(0.3, 0.3, 0.3);
        box34.position.set(-2, 2, -7);
        box34.scale.set(0.1, 0.1, 0.1);
        box35.position.set(-6, 4.7, -7);
        box35.scale.set(0.3, 0.3, 0.3);
        box36.position.set(-1.5, -4, -7);
        box36.scale.set(0.2, 0.2, 0.2);
        box37.position.set(-9, -2, -7);
        box37.scale.set(0.1, 0.1, 0.1);
        box38.position.set(1.6, 1.1, -7);
        box38.scale.set(0.1, 0.1, 0.1);
        box39.position.set(7, 2.9, -7);
        box39.scale.set(0.1, 0.1, 0.1);
        box40.position.set(3.5, 4.6, -7);
        box40.scale.set(0.1, 0.1, 0.1);
    }
}

adjustBoxPositions();
window.addEventListener('resize', adjustBoxPositions);
scene.add(group);
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
canvas.appendChild(renderer.domElement);

const zoomInTimeline = (x, y, z, zoomOutFactor = 0) => {
    let tl = gsap
        .timeline({ defaults: { duration: 2, ease: "expo.out" } })
        .to(controls.target, { x, y, z })
        .to(camera.position, { x, y, z: z + zoomOutFactor }, 0)
        .to(group.rotation, { x: 0, y: 0 }, 0);
};


originalBtn.addEventListener("click", () => {

    if (window.innerWidth <= 600){
        zoomInTimeline(0, 0, 0, 5);
    contentOne.style.display = "none";
    contentOne.style.opacity = "0";
    contentTwo.style.display = "none";
    contentTwo.style.opacity = "0";
    contentThree.style.display = "none";
    contentThree.style.opacity = "0";
    contentFour.style.display = "none";
    contentFour.style.opacity = "0";
    contentFive.style.display = "none";
    contentFive.style.opacity = "0";

    gsap.to(originalBtn, { opacity: 0, display: "none", duration: 0.3 });
    }
    else{
        zoomInTimeline(0, 0, 0, 5);
    contentOne.style.display = "none";
    contentOne.style.opacity = "0";
    contentTwo.style.display = "none";
    contentTwo.style.opacity = "0";
    contentThree.style.display = "none";
    contentThree.style.opacity = "0";
    contentFour.style.display = "none";
    contentFour.style.opacity = "0";
    contentFive.style.display = "none";
    contentFive.style.opacity = "0";

    gsap.to(outOne, { display: "block", opacity: 1, duration: 0.3 });
    gsap.to(outTwo, { display: "block", opacity: 1, duration: 0.3 });
    gsap.to(outThree, { display: "block", opacity: 1, duration: 0.3 });
    gsap.to(outFour, { display: "block", opacity: 1, duration: 0.3 });
    gsap.to(outFive, { display: "block", opacity: 1, duration: 0.3 });
    gsap.to(originalBtn, { opacity: 0, display: "none", duration: 0.3 });
    }
});


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const interactiveObjects = [box, box2, box3, box4, box5];
canvas.addEventListener('mousemove', (event) => {

    const boundingRect = canvas.getBoundingClientRect();
    const offsetX = boundingRect.left;
    const offsetY = boundingRect.top;
    mouse.x = ((event.clientX - offsetX) / canvas.clientWidth) * 2 - 1;
    mouse.y = -((event.clientY - offsetY) / canvas.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects, true);

    if (intersects.length > 0) {

        canvas.style.cursor = 'pointer';
        const x = event.clientX;
        const y = event.clientY;

        let mouseCursor = document.querySelector(".cursor");

        window.addEventListener('DOMContentLoaded', cursor);
        window.addEventListener('mousemove', cursor);
        document.addEventListener('mouseenter', () => mouseCursor.style.display = 'block');
        document.addEventListener('mouseleave', () => mouseCursor.style.display = 'none');
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
              jQuery('.cursor').remove();
            } else {
              mouseCursor.style.display = 'block';
            }
                    function cursor(e){
        
                        mouseCursor.style.top = "calc(" +e.clientY + "px - 18px)";
                        mouseCursor.style.left = "calc(" +e.clientX + "px - 18px)";
                        mouseCursor.classList.add("div-cursor-two");
                    }
    } else {

        canvas.style.cursor = 'default';
        const x = event.clientX;
        const y = event.clientY;

        let mouseCursor = document.querySelector(".cursor");

        window.addEventListener('DOMContentLoaded', cursor);
        window.addEventListener('mousemove', cursor);
        document.addEventListener('mouseenter', () => mouseCursor.style.display = 'block');
        document.addEventListener('mouseleave', () => mouseCursor.style.display = 'none');
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
              jQuery('.cursor').remove();
            } else {
              mouseCursor.style.display = 'block';
            }
                    function cursor(e){
        
                        mouseCursor.style.top = "calc(" +e.clientY + "px - 10px)";
                        mouseCursor.style.left = "calc(" +e.clientX + "px - 10px)";
                        mouseCursor.classList.remove("div-cursor-two");
                    }}
});
canvas.addEventListener('pointerup', (event) => {
    const boundingRect = canvas.getBoundingClientRect();
    const offsetX = boundingRect.left;
    const offsetY = boundingRect.top;
    mouse.x = ((event.clientX - offsetX) / canvas.clientWidth) * 2 - 1;
    mouse.y = -((event.clientY - offsetY) / canvas.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        handleBoxClick(clickedObject);
    }
});



function handleBoxClick(clickedBox) {
    if (![box, box2, box3, box4, box5].includes(clickedBox)) {
        return;
    }
    contentOne.style.display = "none";
    contentOne.style.opacity = "0";
    contentTwo.style.display = "none";
    contentTwo.style.opacity = "0";
    contentThree.style.display = "none";
    contentThree.style.opacity = "0";
    contentFour.style.display = "none";
    contentFour.style.opacity = "0";
    contentFive.style.display = "none";
    contentFive.style.opacity = "0";

    gsap.to(outOne, { display: "none", opacity: 0, duration: 0.3 });
    gsap.to(outTwo, { display: "none", opacity: 0, duration: 0.3 });
    gsap.to(outThree, { display: "none", opacity: 0, duration: 0.3 });
    gsap.to(outFour, { display: "none", opacity: 0, duration: 0.3 });
    gsap.to(outFive, { display: "none", opacity: 0, duration: 0.3 });
    gsap.to(originalBtn, { display: "block", opacity: 1, duration: 0.3 });

    let zoomOutFactor = 2.6;

    if (window.innerWidth <= 576) {
        zoomOutFactor = 3.6;
        box.position.y = -1.8;
        box2.position.y = -1;
        box3.position.y = 1;
        box4.position.y = 1.2;
        box5.position.y = -1;

    } else if (window.innerWidth <= 992) {
        zoomOutFactor = 3.3;

    } else if (window.innerWidth <= 1400) {
        zoomOutFactor = 3.3;
    }

    if (clickedBox === box) {
        zoomInTimeline(box.position.x, box.position.y, box.position.z, zoomOutFactor,);
        gsap.to(contentOne, { display: "block", opacity: 1, duration: 0.3 });
        gsap.to(contentTwo, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentThree, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFour, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFive, { display: "none", opacity: 0, duration: 0.3 });

    } else if (clickedBox === box2) {
        zoomInTimeline(box2.position.x, box2.position.y, box2.position.z, zoomOutFactor);
        gsap.to(contentTwo, { display: "block", opacity: 1, duration: 0.3 });
        gsap.to(contentOne, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentThree, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFour, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFive, { display: "none", opacity: 0, duration: 0.3 });

    } else if (clickedBox === box3) {
        zoomInTimeline(box3.position.x, box3.position.y, box3.position.z, zoomOutFactor);
        gsap.to(contentThree, { display: "block", opacity: 1, duration: 0.3 });
        gsap.to(contentOne, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentTwo, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFour, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFive, { display: "none", opacity: 0, duration: 0.3 });

    } else if (clickedBox === box4) {
        zoomInTimeline(box4.position.x, box4.position.y, box4.position.z, zoomOutFactor);
        gsap.to(contentFour, { display: "block", opacity: 1, duration: 0.3 });
        gsap.to(contentOne, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentTwo, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentThree, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFive, { display: "none", opacity: 0, duration: 0.3 });

    } else if (clickedBox === box5) {
        zoomInTimeline(box5.position.x, box5.position.y, box5.position.z, zoomOutFactor);
        gsap.to(contentFive, { display: "block", opacity: 1, duration: 0.3 });
        gsap.to(contentOne, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentTwo, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentThree, { display: "none", opacity: 0, duration: 0.3 });
        gsap.to(contentFour, { display: "none", opacity: 0, duration: 0.3 });
    }
}

let currentBoxIndex = 0;


const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

if (leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => navigateBoxes(-1));
    rightArrow.addEventListener('click', () => navigateBoxes(1));
}

function navigateBoxes(direction) {
    do {
        currentBoxIndex = (currentBoxIndex + direction) % group.children.length;
        if (currentBoxIndex < 0) {
            currentBoxIndex = group.children.length - 1;
        }
        var nextBox = group.children[currentBoxIndex];
    } while (![box, box2, box3, box4, box5].includes(nextBox));

    handleBoxClick(nextBox);
}


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableRotate = false;
controls.enableZoom = false;
controls.enableRotate = false;
controls.enablePan = false;
const onWindowResize = () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
};


window.addEventListener("resize", onWindowResize, false);
const clock = new THREE.Clock();
const animate = () => {
    const elapsedTime = clock.getElapsedTime();

// Rotation animation
gsap.to(box.rotation, { x: Math.sin(elapsedTime + 38) * -0.2, y: Math.cos(elapsedTime + 38) * -0.2 });
gsap.to(box2.rotation, { x: Math.sin(elapsedTime + 30) * -0.2, y: Math.cos(elapsedTime + 30) * -0.2 });
gsap.to(box3.rotation, { x: Math.sin(elapsedTime + 30) * -0.2, y: Math.cos(elapsedTime + 30) * -0.2 });
gsap.to(box4.rotation, { x: Math.sin(elapsedTime + 30) * -0.2, y: Math.cos(elapsedTime + 30) * -0.2 });
gsap.to(box5.rotation, { x: Math.sin(elapsedTime + 30) * -0.2, y: Math.cos(elapsedTime + 30) * -0.2 });

// Margin animation
gsap.to(box.position, { y: box.position.y + Math.sin(elapsedTime + 38) * 0.01 });
gsap.to(box2.position, { y: box2.position.y + Math.sin(elapsedTime + 30) * 0.01 });
gsap.to(box3.position, { y: box3.position.y + Math.sin(elapsedTime + 30) * 0.01 });
gsap.to(box4.position, { y: box4.position.y + Math.sin(elapsedTime + 30) * 0.01 });
gsap.to(box5.position, { y: box5.position.y + Math.sin(elapsedTime + 30) * 0.01 });

    // elapsedTime += 0.01; // Adjust the speed of the animation
    // Update the position of box5
    const progress11 = (elapsedTime % 90) / 90;
    const progress16 = (elapsedTime % 140) / 140;
    const progress21 = (elapsedTime % 100) / 100;
    const progress26 = (elapsedTime % 120) / 120;
    const progress32 = (elapsedTime % 85) / 85;
    const progress40 = (elapsedTime % 85) / 85;

    // Calculate the target positions
    var targetX11 = Math.sin(progress11 * Math.PI * 2) * 10;
    var targetX16 = Math.sin(progress16 * Math.PI * 2) * -10;
    var targetX21 = Math.sin(progress21 * Math.PI * 2) * 10;
    var targetX26 = Math.sin(progress26 * Math.PI * 2) * -10;
    var targetY32 = Math.cos(progress32 * Math.PI * 2) * 10;
    var targetY40 = Math.cos(progress40 * Math.PI * 2) * 10;

    var targetX32 = Math.sin(progress32 * Math.PI * 2) * 0;
    var targetX40 = Math.sin(progress40 * Math.PI * 2) * 0;

    // Smoothly interpolate the current positions towards the target positions
    box11.position.x = -0.2 + (targetX11 - box11.position.x) * 0.1;
    box12.position.x = -2.8 + (targetX11 - box12.position.x) * 0.1;
    box13.position.x = -2.8 + (targetX11 - box13.position.x) * 0.1;
    box14.position.x = -10.2 + (targetX11 - box14.position.x) * 0.1;
    box15.position.x = -9 + (targetX11 - box15.position.x) * 0.1;

    box16.position.x = -5.8 + (targetX16 - box16.position.x) * 0.1;
    box17.position.x = -6.8 + (targetX16 - box17.position.x) * 0.1;
    box18.position.x = -8.5 + (targetX16 - box18.position.x) * 0.1;
    box19.position.x = -8 + (targetX16 - box19.position.x) * 0.1;
    box20.position.x = -4 + (targetX16 - box20.position.x) * 0.1;

    box21.position.x = 2.6 + (targetX21 - box21.position.x) * 0.1;
    box22.position.x = 4.2 + (targetX21 - box22.position.x) * 0.1;
    box23.position.x = 2.5 + (targetX21 - box23.position.x) * 0.1;
    box24.position.x = 9 + (targetX21 - box24.position.x) * 0.1;
    box25.position.x = 6.8 + (targetX21 - box25.position.x) * 0.1;

    box26.position.x = 0.9 + (targetX26 - box26.position.x) * 0.1;
    box27.position.x = 2.9 + (targetX26 - box27.position.x) * 0.1;
    box28.position.x = 4.7 + (targetX26 - box28.position.x) * 0.1;
    box29.position.x = 7 + (targetX26 - box29.position.x) * 0.1;
    box30.position.x = 9.5 + (targetX26 - box30.position.x) * 0.1;
    box31.position.x = 5.6 + (targetX26 - box31.position.x) * 0.1;
    box32.position.x = 8.5 + (targetX26 - box32.position.x) * 0.1;

    box33.position.x = -7.6 + (targetX32 - box33.position.x) * 0.1;
    box34.position.x = -2 + (targetX40 - box34.position.x) * 0.1;
    box35.position.x = -6 + (targetX32 - box35.position.x) * 0.1;
    box36.position.x = -1.5 + (targetX40 - box36.position.x) * 0.1;
    box37.position.x = -9 + (targetX32 - box37.position.x) * 0.1;
    box38.position.x = 1.6 + (targetX40 - box38.position.x) * 0.1;
    box39.position.x = 7 + (targetX32 - box39.position.x) * 0.1;
    box40.position.x = 3.5 + (targetX40 - box40.position.x) * 0.1;

    box33.position.y = -2.4 + (targetY32 - box33.position.y) * 0.1;
    box34.position.y = 2 + (targetY40 - box34.position.y) * 0.1;
    box35.position.y = 4.7 + (targetY32 - box35.position.y) * 0.1;
    box36.position.y = -4 + (targetY40 - box36.position.y) * 0.1;
    box37.position.y = -2 + (targetY32 - box37.position.y) * 0.1;
    box38.position.y = 1.1 + (targetY40 - box38.position.y) * 0.1;
    box39.position.y = 2.9 + (targetY32 - box39.position.y) * 0.1;
    box40.position.y = 4.6 + (targetY40 - box40.position.y) * 0.1;

    gsap.to(box9.rotation, { x: Math.sin(elapsedTime) * 0, y: Math.cos(elapsedTime) * 0 });
    gsap.to(box10.rotation, { x: Math.sin(elapsedTime) * 0, y: Math.cos(elapsedTime) * 0 });

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};
animate();