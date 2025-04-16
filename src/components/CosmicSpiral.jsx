import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CosmicSpiral = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);
      
      // Create stars
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        sizeAttenuation: true
      });
      
      const starsVertices = [];
      for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        starsVertices.push(x, y, z);
      }
      
      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
      
      // Create spiral curves
      const createSpiral = (params) => {
        const { turns = 5, segments = 1000, radius = 1, height = 2, thickness = 0.01, taper = 0.5 } = params;
        
        const curve = new THREE.CurvePath();
        const points = [];
        
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const angle = turns * Math.PI * 2 * t;
          const r = radius * (1 - t * taper);
          const x = r * Math.cos(angle);
          const y = height * (t - 0.5);
          const z = r * Math.sin(angle);
          
          points.push(new THREE.Vector3(x, y, z));
        }
        
        // Create a curve from the points
        for (let i = 0; i < points.length - 1; i++) {
          const lineCurve = new THREE.LineCurve3(points[i], points[i + 1]);
          curve.add(lineCurve);
        }
        
        return { curve, points };
      };
      
      // Create grid lines along spiral
      const createGridLines = (spiral, params) => {
        const { gridCount = 20, gridColor = 0xffffff, opacity = 0.3 } = params;
        const { points } = spiral;
        const group = new THREE.Group();
        
        // Longitudinal lines
        for (let i = 0; i < gridCount; i++) {
          const angle = (i / gridCount) * Math.PI * 2;
          const gridPoints = [];
          
          for (let j = 0; j < points.length; j += Math.ceil(points.length / 50)) {
            const point = points[j];
            const distance = Math.sqrt(point.x * point.x + point.z * point.z);
            if (distance === 0) continue;
            
            const currentAngle = Math.atan2(point.z, point.x);
            const targetAngle = currentAngle + angle;
            
            const x = distance * Math.cos(targetAngle);
            const z = distance * Math.sin(targetAngle);
            
            gridPoints.push(new THREE.Vector3(x, point.y, z));
          }
          
          const geometry = new THREE.BufferGeometry().setFromPoints(gridPoints);
          const material = new THREE.LineBasicMaterial({ color: gridColor, transparent: true, opacity });
          const line = new THREE.Line(geometry, material);
          group.add(line);
        }
        
        // Latitudinal circles
        for (let i = 0; i < points.length; i += Math.ceil(points.length / 15)) {
          const point = points[i];
          const distance = Math.sqrt(point.x * point.x + point.z * point.z);
          if (distance === 0) continue;
          
          const circlePoints = [];
          for (let j = 0; j <= 50; j++) {
            const angle = (j / 50) * Math.PI * 2;
            const x = distance * Math.cos(angle);
            const z = distance * Math.sin(angle);
            circlePoints.push(new THREE.Vector3(x, point.y, z));
          }
          
          const geometry = new THREE.BufferGeometry().setFromPoints(circlePoints);
          const material = new THREE.LineBasicMaterial({ color: gridColor, transparent: true, opacity });
          const circle = new THREE.Line(geometry, material);
          group.add(circle);
        }
        
        return group;
      };
      
      // Create main spiral
      const mainSpiral = createSpiral({
        turns: 3,
        segments: 1000,
        radius: 2,
        height: 3,
        taper: 0.7
      });
      
      // Create secondary spiral
      const secondarySpiral = createSpiral({
        turns: 2,
        segments: 800,
        radius: 2.5,
        height: 2.5,
        taper: 0.4
      });
      
      // Convert curves to visible lines
      const createVisibleCurve = (spiral, params) => {
        const { color = 0xffffff, linewidth = 1, opacity = 1, points } = params;
        const { curve } = spiral;
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points || spiral.points);
        const material = new THREE.LineBasicMaterial({ 
          color, 
          transparent: true, 
          opacity 
        });
        return new THREE.Line(geometry, material);
      };
      
      // Create additional decorative lines
      const createDecorativeLines = (count = 50) => {
        const group = new THREE.Group();
        
        for (let i = 0; i < count; i++) {
          const startAngle = Math.random() * Math.PI * 2;
          const startRadius = 0.5 + Math.random() * 3;
          const startHeight = -1.5 + Math.random() * 3;
          
          const endAngle = startAngle + (Math.random() * 2 - 1) * Math.PI * 3;
          const endRadius = 0.5 + Math.random() * 3;
          const endHeight = startHeight + (Math.random() - 0.5) * 2;
          
          const start = new THREE.Vector3(
            startRadius * Math.cos(startAngle),
            startHeight,
            startRadius * Math.sin(startAngle)
          );
          
          const end = new THREE.Vector3(
            endRadius * Math.cos(endAngle),
            endHeight,
            endRadius * Math.sin(endAngle)
          );
          
          const points = [];
          const segmentCount = 20 + Math.floor(Math.random() * 30);
          
          for (let j = 0; j <= segmentCount; j++) {
            const t = j / segmentCount;
            const angle = startAngle + (endAngle - startAngle) * t;
            const radius = startRadius + (endRadius - startRadius) * t;
            const height = startHeight + (endHeight - startHeight) * t;
            
            points.push(new THREE.Vector3(
              radius * Math.cos(angle),
              height,
              radius * Math.sin(angle)
            ));
          }
          
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({ 
            color: 0xffffff, 
            transparent: true, 
            opacity: 0.3 + Math.random() * 0.4
          });
          const line = new THREE.Line(geometry, material);
          group.add(line);
        }
        
        return group;
      };
      
      // Add all elements to scene
      const mainSpiralLine = createVisibleCurve(mainSpiral, { opacity: 0.8 });
      scene.add(mainSpiralLine);
      
      const secondarySpiralLine = createVisibleCurve(secondarySpiral, { opacity: 0.6 });
      scene.add(secondarySpiralLine);
      
      const mainGrid = createGridLines(mainSpiral, { gridCount: 30, opacity: 0.4 });
      scene.add(mainGrid);
      
      const secondaryGrid = createGridLines(secondarySpiral, { gridCount: 20, opacity: 0.3 });
      scene.add(secondaryGrid);
      
      const decorativeLines = createDecorativeLines(80);
      scene.add(decorativeLines);
      
      // Animation
      let frame = 0;
      const animate = () => {
        frame += 0.002;
        
        // Overall scene rotation
        scene.rotation.x = Math.sin(frame * 0.5) * 0.3;
        scene.rotation.y = frame;
        scene.rotation.z = Math.cos(frame * 0.3) * 0.2;
        
        // Animate main spiral grid
        mainGrid.children.forEach((line, i) => {
          const offset = i * 0.05;
          line.position.y = Math.sin(frame * 0.8 + offset) * 0.1;
          line.material.opacity = 0.2 + Math.abs(Math.sin(frame * 0.5 + offset)) * 0.4;
          line.rotation.z = Math.sin(frame * 0.3 + offset) * 0.05;
        });
        
        // Animate secondary spiral grid
        secondaryGrid.children.forEach((line, i) => {
          const offset = i * 0.03;
          line.position.y = Math.sin(frame * 0.6 - offset) * 0.08;
          line.material.opacity = 0.15 + Math.abs(Math.sin(frame * 0.7 + offset)) * 0.3;
          line.rotation.z = Math.cos(frame * 0.4 + offset) * 0.03;
        });
        
        // Animate decorative lines
        decorativeLines.children.forEach((line, i) => {
          const offset = i * 0.02;
          line.rotation.x = Math.sin(frame * 0.2 + offset) * 0.03;
          line.rotation.z = Math.cos(frame * 0.15 + offset) * 0.02;
          line.material.opacity = 0.2 + Math.abs(Math.sin(frame * 0.3 + offset)) * 0.4;
        });
        
        // Pulse effect for main spiral line
        mainSpiralLine.material.opacity = 0.5 + Math.abs(Math.sin(frame * 0.7)) * 0.5;
        
        // Pulse effect for secondary spiral line
        secondarySpiralLine.material.opacity = 0.4 + Math.abs(Math.sin(frame * 0.5)) * 0.4;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      
      animate();
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      console.error('Error in CosmicSpiral:', error);
    }
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100vh', 
        background: 'black',
        overflow: 'hidden',
        position: 'relative'
      }}
    />
  );
};

export default CosmicSpiral; 