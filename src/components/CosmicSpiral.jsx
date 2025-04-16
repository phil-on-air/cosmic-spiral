import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CosmicSpiral = () => {
  const mountRef = useRef(null);
  
  // Function to handle refresh
  const handleRefresh = () => {
    window.location.reload();
  };
  
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
      
      // Create a separate group for stars with its own rotation
      const starsGroup = new THREE.Group();
      scene.add(starsGroup);
      
      // Create stars with enhanced twinkling effect
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        sizeAttenuation: true
      });
      
      const starsVertices = [];
      const starsData = []; // Store additional data for each star
      
      for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        starsVertices.push(x, y, z);
        
        // Store random data for each star
        starsData.push({
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinklePhase: Math.random() * Math.PI * 2,
          size: 0.03 + Math.random() * 0.04,
          color: new THREE.Color(
            0.8 + Math.random() * 0.2,
            0.8 + Math.random() * 0.2,
            0.8 + Math.random() * 0.2
          )
        });
      }
      
      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
      const stars = new THREE.Points(starsGeometry, starsMaterial);
      starsGroup.add(stars);
      
      // Create a separate group for the pyramid structure
      const pyramidGroup = new THREE.Group();
      scene.add(pyramidGroup);
      
      // Create subgroups for different parts of the pyramid for independent movement
      const mainSpiralGroup = new THREE.Group();
      pyramidGroup.add(mainSpiralGroup);
      
      const secondarySpiralGroup = new THREE.Group();
      pyramidGroup.add(secondarySpiralGroup);
      
      const decorativeLinesGroup = new THREE.Group();
      pyramidGroup.add(decorativeLinesGroup);
      
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
      
      // Convert curves to visible lines with individual animations
      const createVisibleCurve = (spiral, params) => {
        const { color = 0xffffff, linewidth = 1, opacity = 1, points } = params;
        const { curve } = spiral;
        
        // Create a gradient material for the line
        const geometry = new THREE.BufferGeometry().setFromPoints(points || spiral.points);
        
        // Create vertex colors for gradient effect
        const colors = [];
        const positions = geometry.attributes.position.array;
        
        for (let i = 0; i < positions.length / 3; i++) {
          // Calculate a value from 0 to 1 based on position
          // We'll use the y-coordinate to determine the gradient
          const y = positions[i * 3 + 1];
          const minY = -1.5; // Minimum y value in our scene
          const maxY = 1.5;  // Maximum y value in our scene
          const t = (y - minY) / (maxY - minY);
          
          // Create a gradient from bright white to transparent
          const brightness = 0.2 + t * 0.8; // Fade from 20% to 100% brightness
          const alpha = 0.1 + t * 0.9;      // Fade from 10% to 100% opacity
          
          colors.push(brightness, brightness, brightness, alpha);
        }
        
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));
        
        const material = new THREE.LineBasicMaterial({ 
          vertexColors: true,
          transparent: true,
          opacity: 1 // We'll control opacity through vertex colors
        });
        
        const line = new THREE.Line(geometry, material);
        
        // Create animation data for this line
        const lineData = {
          line,
          speed: 0.3 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
          opacityRange: 0.2 + Math.random() * 0.3,
          baseOpacity: opacity,
          originalPoints: (points || spiral.points).slice() // Store original points for morphing
        };
        
        return lineData;
      };
      
      // Create additional decorative lines with individual animations
      const createDecorativeLines = (count = 50) => {
        const group = new THREE.Group();
        const decorativeLinesData = [];
        
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
          
          // Create vertex colors for gradient effect
          const colors = [];
          const positions = geometry.attributes.position.array;
          
          for (let j = 0; j < positions.length / 3; j++) {
            // Calculate a value from 0 to 1 based on position
            const y = positions[j * 3 + 1];
            const minY = -1.5; // Minimum y value in our scene
            const maxY = 1.5;  // Maximum y value in our scene
            const t = (y - minY) / (maxY - minY);
            
            // Create a gradient from bright white to transparent
            const brightness = 0.1 + t * 0.9; // Fade from 10% to 100% brightness
            const alpha = 0.05 + t * 0.95;    // Fade from 5% to 100% opacity
            
            colors.push(brightness, brightness, brightness, alpha);
          }
          
          geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));
          
          const baseOpacity = 0.3 + Math.random() * 0.4;
          const material = new THREE.LineBasicMaterial({ 
            vertexColors: true,
            transparent: true,
            opacity: 1 // We'll control opacity through vertex colors
          });
          
          const line = new THREE.Line(geometry, material);
          group.add(line);
          
          // Store animation data for this decorative line
          decorativeLinesData.push({
            line,
            speed: 0.1 + Math.random() * 0.3,
            phase: Math.random() * Math.PI * 2,
            rotationSpeed: 0.01 + Math.random() * 0.03,
            rotationPhase: Math.random() * Math.PI * 2,
            opacitySpeed: 0.2 + Math.random() * 0.5,
            opacityPhase: Math.random() * Math.PI * 2,
            opacityRange: 0.1 + Math.random() * 0.3,
            baseOpacity,
            points: points.slice(), // Store a copy of the original points
            morphSpeed: 0.05 + Math.random() * 0.15,
            morphPhase: Math.random() * Math.PI * 2
          });
        }
        
        return { group, decorativeLinesData };
      };
      
      // Add all elements to pyramid group
      const mainSpiralLine = createVisibleCurve(mainSpiral, { opacity: 0.8 });
      mainSpiralGroup.add(mainSpiralLine.line);
      
      const secondarySpiralLine = createVisibleCurve(secondarySpiral, { opacity: 0.6 });
      secondarySpiralGroup.add(secondarySpiralLine.line);
      
      const decorativeLines = createDecorativeLines(80);
      decorativeLinesGroup.add(decorativeLines.group);
      
      // Animation
      let frame = 0;
      const animate = () => {
        frame += 0.002;
        
        // Rotate stars group independently with different speed and direction
        starsGroup.rotation.x = Math.sin(frame * 0.2) * 0.15; // Slower and gentler x-axis movement
        starsGroup.rotation.y = -frame * 0.4; // Opposite direction and slower rotation for stars
        starsGroup.rotation.z = Math.cos(frame * 0.15) * 0.08; // Slower and gentler z-axis movement
        
        // Rotate pyramid group independently with different speed and direction
        pyramidGroup.rotation.x = Math.sin(frame * 0.5) * 0.3;
        pyramidGroup.rotation.y = frame * 1.2; // Faster rotation for pyramid
        pyramidGroup.rotation.z = Math.cos(frame * 0.3) * 0.2;
        
        // Add independent movement to main spiral group
        mainSpiralGroup.rotation.x = Math.sin(frame * 0.3) * 0.15;
        mainSpiralGroup.rotation.y = Math.sin(frame * 0.2) * 0.1;
        mainSpiralGroup.position.y = Math.sin(frame * 0.4) * 0.2;
        
        // Add independent movement to secondary spiral group
        secondarySpiralGroup.rotation.x = Math.sin(frame * 0.25) * 0.12;
        secondarySpiralGroup.rotation.y = Math.sin(frame * 0.15) * 0.08;
        secondarySpiralGroup.position.y = Math.sin(frame * 0.35) * 0.15;
        
        // Add independent movement to decorative lines group
        decorativeLinesGroup.rotation.x = Math.sin(frame * 0.2) * 0.1;
        decorativeLinesGroup.rotation.y = Math.sin(frame * 0.1) * 0.05;
        decorativeLinesGroup.position.y = Math.sin(frame * 0.3) * 0.1;
        
        // Animate stars with enhanced twinkling
        starsData.forEach((starData, i) => {
          // Twinkle effect with more variation
          const twinkle = Math.sin(frame * starData.twinkleSpeed + starData.twinklePhase) * 0.5 + 0.5;
          const sizeVariation = 0.5 + twinkle * 0.5;
          starsMaterial.size = starData.size * sizeVariation;
          
          // Color variation for stars
          const colorIntensity = 0.7 + twinkle * 0.3;
          starsMaterial.color = new THREE.Color(
            starData.color.r * colorIntensity,
            starData.color.g * colorIntensity,
            starData.color.b * colorIntensity
          );
        });
        
        // Animate main spiral grid lines individually with morphing
        mainSpiralLine.line.material.opacity = mainSpiralLine.baseOpacity * (0.5 + Math.abs(Math.sin(frame * mainSpiralLine.speed + mainSpiralLine.phase)) * mainSpiralLine.opacityRange);
        
        // Morph the main spiral
        if (mainSpiralLine.originalPoints && mainSpiralLine.originalPoints.length > 0) {
          const positions = mainSpiralLine.line.geometry.attributes.position.array;
          const colors = mainSpiralLine.line.geometry.attributes.color.array;
          
          for (let i = 0; i < mainSpiralLine.originalPoints.length; i++) {
            const point = mainSpiralLine.originalPoints[i];
            const t = i / (mainSpiralLine.originalPoints.length - 1);
            const morphFactor = Math.sin(frame * 0.3 + t * Math.PI * 4) * 0.03;
            
            positions[i * 3] = point.x + Math.sin(frame * 0.2 + i * 0.05) * morphFactor;
            positions[i * 3 + 1] = point.y + Math.cos(frame * 0.3 + i * 0.05) * morphFactor;
            positions[i * 3 + 2] = point.z + Math.sin(frame * 0.1 + i * 0.05) * morphFactor;
            
            // Update color based on new y position
            const y = positions[i * 3 + 1];
            const minY = -1.5;
            const maxY = 1.5;
            const colorT = (y - minY) / (maxY - minY);
            
            const brightness = 0.2 + colorT * 0.8;
            const alpha = 0.1 + colorT * 0.9;
            
            colors[i * 4] = brightness;
            colors[i * 4 + 1] = brightness;
            colors[i * 4 + 2] = brightness;
            colors[i * 4 + 3] = alpha;
          }
          
          mainSpiralLine.line.geometry.attributes.position.needsUpdate = true;
          mainSpiralLine.line.geometry.attributes.color.needsUpdate = true;
        }
        
        // Animate secondary spiral grid lines individually with morphing
        secondarySpiralLine.line.material.opacity = secondarySpiralLine.baseOpacity * (0.5 + Math.abs(Math.sin(frame * secondarySpiralLine.speed + secondarySpiralLine.phase)) * secondarySpiralLine.opacityRange);
        
        // Morph the secondary spiral
        if (secondarySpiralLine.originalPoints && secondarySpiralLine.originalPoints.length > 0) {
          const positions = secondarySpiralLine.line.geometry.attributes.position.array;
          const colors = secondarySpiralLine.line.geometry.attributes.color.array;
          
          for (let i = 0; i < secondarySpiralLine.originalPoints.length; i++) {
            const point = secondarySpiralLine.originalPoints[i];
            const t = i / (secondarySpiralLine.originalPoints.length - 1);
            const morphFactor = Math.sin(frame * 0.4 + t * Math.PI * 3) * 0.04;
            
            positions[i * 3] = point.x + Math.sin(frame * 0.3 + i * 0.06) * morphFactor;
            positions[i * 3 + 1] = point.y + Math.cos(frame * 0.4 + i * 0.06) * morphFactor;
            positions[i * 3 + 2] = point.z + Math.sin(frame * 0.2 + i * 0.06) * morphFactor;
            
            // Update color based on new y position
            const y = positions[i * 3 + 1];
            const minY = -1.5;
            const maxY = 1.5;
            const colorT = (y - minY) / (maxY - minY);
            
            const brightness = 0.2 + colorT * 0.8;
            const alpha = 0.1 + colorT * 0.9;
            
            colors[i * 4] = brightness;
            colors[i * 4 + 1] = brightness;
            colors[i * 4 + 2] = brightness;
            colors[i * 4 + 3] = alpha;
          }
          
          secondarySpiralLine.line.geometry.attributes.position.needsUpdate = true;
          secondarySpiralLine.line.geometry.attributes.color.needsUpdate = true;
        }
        
        // Animate decorative lines individually with enhanced morphing
        decorativeLines.decorativeLinesData.forEach((lineData) => {
          const { line, speed, phase, rotationSpeed, rotationPhase, opacitySpeed, opacityPhase, opacityRange, baseOpacity, points, morphSpeed, morphPhase } = lineData;
          
          // Rotation
          line.rotation.x = Math.sin(frame * rotationSpeed + rotationPhase) * 0.05;
          line.rotation.z = Math.cos(frame * rotationSpeed + rotationPhase) * 0.05;
          
          // We don't need to update opacity here as it's controlled by vertex colors
          
          // Enhanced morphing with more variation
          const positions = line.geometry.attributes.position.array;
          const colors = line.geometry.attributes.color.array;
          
          for (let i = 0; i < points.length; i++) {
            const point = points[i];
            const t = i / (points.length - 1);
            const morphFactor = Math.sin(frame * morphSpeed + morphPhase + t * Math.PI * 2) * 0.15;
            
            // More varied movement
            positions[i * 3] = point.x + Math.sin(frame * 0.5 + i * 0.1) * morphFactor;
            positions[i * 3 + 1] = point.y + Math.cos(frame * 0.7 + i * 0.1) * morphFactor;
            positions[i * 3 + 2] = point.z + Math.sin(frame * 0.3 + i * 0.1) * morphFactor;
            
            // Update color based on new y position
            const y = positions[i * 3 + 1];
            const minY = -1.5;
            const maxY = 1.5;
            const colorT = (y - minY) / (maxY - minY);
            
            const brightness = 0.1 + colorT * 0.9;
            const alpha = 0.05 + colorT * 0.95;
            
            colors[i * 4] = brightness;
            colors[i * 4 + 1] = brightness;
            colors[i * 4 + 2] = brightness;
            colors[i * 4 + 3] = alpha;
          }
          
          line.geometry.attributes.position.needsUpdate = true;
          line.geometry.attributes.color.needsUpdate = true;
        });
        
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
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
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
      
      {/* Refresh Button */}
      <button 
        onClick={handleRefresh}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '18px',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        ↻
      </button>
    </div>
  );
};

export default CosmicSpiral; 