import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from "react";

const Tumbleweed = () =>{
    const [styles, api] = useSpring(() => ({
        x: 150,
        rotateZ: 0,
        config: { tension: 20, friction: 80 }, // Initial physics settings for animation
      }));
    
      const [audioContext, setAudioContext] = useState(null);
      const [meter, setMeter] = useState(null);
    
      // Request microphone access and set up audio processing
      const requestAudioAccess = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const context = new AudioContext();
          const source = context.createMediaStreamSource(stream);
          const analyser = context.createAnalyser();
          analyser.fftSize = 256;
          source.connect(analyser);
    
          setAudioContext(context);
          setMeter(analyser);
    
          // Start audio processing
          const processAudio = () => {
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyser.getByteFrequencyData(dataArray);
    
            const volume = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength / 255;
    
            // Check if blowing threshold is exceeded
            if (volume > 0.25) {
              // Trigger tumbleweed animation with faster speed
              api.start({
                to: async (next) => {
                  await next({ x: 425, rotateZ: 360, config: { tension: 200, friction: 40 } }); // Faster animation config
                  await next({ x: 150, rotateZ: 0, config: { tension: 20, friction: 80 } }); // Return to original position
                },
                reset: true,
              });
            }
    
            requestAnimationFrame(processAudio);
          };
    
          processAudio();
        } catch (error) {
          console.error('Error accessing microphone:', error);
        }
      };
    
      useEffect(() => {
        requestAudioAccess(); // Request microphone access when component mounts
    
        return () => {
          // Clean up audio context when component unmounts
          if (audioContext) {
            audioContext.close().catch((error) => console.error('Error closing AudioContext:', error));
          }
        };
      }, []); // Run effect only once on mount
    

    return(
<animated.div
      className="spring-box1"
      style={{
        ...styles,
        cursor: 'pointer',
        position: 'absolute',
        left: styles.x.interpolate((x) => `${x}px`),
        transform: styles.rotateZ.interpolate((rotateZ) => `rotate(${rotateZ}deg)`),
      }}
    />
    )
}

export default Tumbleweed;