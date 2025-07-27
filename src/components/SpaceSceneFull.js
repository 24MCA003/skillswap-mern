import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SpaceSceneFull = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Star field
        const starsGeometry = new THREE.BufferGeometry();
        const starCount = 2000;
        const starPositions = [];

        for (let i = 0; i < starCount; i++) {
            const x = (Math.random() - 0.5) * 500;
            const y = (Math.random() - 0.5) * 500;
            const z = (Math.random() - 0.5) * 500;
            starPositions.push(x, y, z);
        }

        starsGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(starPositions, 3)
        );

        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.7,
            opacity: 0.7,
            transparent: true,
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0008;
            stars.rotation.x += 0.0002;
            renderer.render(scene, camera);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100vw",
                height: "100vh",
            }}
        />
    );
};

export default SpaceSceneFull;
