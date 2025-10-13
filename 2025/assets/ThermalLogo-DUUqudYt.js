import{W as ae,S as $,O as Z,b as z,L as y,d as re,R as se,H as oe,e as J,f as Q,M as ee,P as te,V as I,g as le,h as ne,T as ue,i as ce,j as he,k as g,_ as de,l as me,m as U,w as fe,n as pe,p as Ee,c as b,o as G,a as T,q as ve,u as B,s as W,v as Ie,x as Re,y as Ae}from"./index-DRG-pOFV.js";function Te(){return document.documentElement.classList.contains("touch")||"ontouchstart"in window||navigator.maxTouchPoints>0}function F(){const r=navigator.userAgent;return/Safari\//.test(r)&&!/Chrome\//.test(r)&&!/Chromium\//.test(r)}function Y(r){const e=document.querySelector(r);if(!e)throw new Error(`Required element not found: ${r}`);return e}function S(r,e,n,t){return r.addEventListener(e,n,t),()=>r.removeEventListener(e,n)}class _e{constructor(e){this.scene=null,this.camera=null,this.onUpdate=null,this.lastRenderTime=0,this.minFrameInterval=0,this.container=e,this.rect=e.getBoundingClientRect(),this.renderer=new ae({alpha:!1,antialias:!1,logarithmicDepthBuffer:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=$,this.renderer.setSize(this.rect.width,this.rect.height);const n=window.devicePixelRatio||1,t=F()?Math.min(n,1.5):n;this.renderer.setPixelRatio(t),this.container.appendChild(this.renderer.domElement),this.renderer.domElement.style.pointerEvents="none",this.container.style.pointerEvents="auto",this.minFrameInterval=0,window.addEventListener("resize",()=>this.handleResize()),this.renderer.setAnimationLoop(()=>this.loop())}setScene(e){this.scene=e}setCamera(e){this.camera=e}handleResize(){this.rect=this.container.getBoundingClientRect(),this.renderer.setSize(this.rect.width,this.rect.height);const e=this.scene;e!=null&&e.onResize&&e.onResize(this.rect.width,this.rect.height)}loop(){var i;const e=performance.now(),n=this.lastRenderTime?Math.min(.05,(e-this.lastRenderTime)/1e3):1/60;if(this.lastRenderTime=e,(i=this.onUpdate)==null||i.call(this,n),!this.scene||!this.camera)return;const t=this.scene;t.drawRenderer&&t.drawRenderer.render(this.renderer),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera)}}const j="/2025".replace(/\/$/,"")+"/",D={MASK_URL:`${j}let_swift_heat_alt.png`,VIDEO_URL:`${j}let_swift_mask_alt.mp4`},C={effectIntensity:1,contrastPower:.8,colorSaturation:1.3,heatSensitivity:.5,videoBlendAmount:1,gradientShift:0,heatDecay:.95,interactionRadius:1,reactivity:1},H=["000000","073dff","53d5fd","fefcdd","ffec6a","f9d400","a61904"],v={LOOP_START_TIME:2.95,LOOP_END_TIME:11.95,AUTOPLAY:!1,MUTED:!0,CONTROLS:!1},c={FADE_IN_SPEED:.1,MOUSE_INTERPOLATION_SPEED:.8,SCROLL_INTERPOLATION_SPEED:.2,MOVEMENT_INTERPOLATION_SPEED:.01,POWER_INTERPOLATION_SPEED:.01,VIDEO_BLEND_SPEED:.1,HEAT_MAX_VALUE:1.3,TARGET_FPS:60,POWER_MIN:.8,POWER_MAX:1},p={TEXTURE_SIZE:256,RADIUS_RATIO:1e3,MOBILE_RADIUS:350,DESKTOP_RADIUS:220,UNIFORMS:{RADIUS_VECTOR:[-8,.9,150],SIZE_DAMPING:.8,FADE_DAMPING:.98,DIRECTION_MULTIPLIER:100}},L={BLEND_POINTS:[.4,.7,.81,.91],FADE_RANGES:[1,1,.72,.52],MAX_BLEND:[.8,.87,.5,.27],VERTICAL_GRADIENT_START:.2,VERTICAL_GRADIENT_END:.5,VERTICAL_GRADIENT_MIX:.91,CIRCULAR_FADE_CENTER:[.5,.52],CIRCULAR_FADE_INNER:.5,CIRCULAR_FADE_OUTER:.62},h={LEFT:-.5,RIGHT:.5,TOP:.5,BOTTOM:-.5,NEAR:-1,FAR:1,POSITION_Z:1},O={HEAT_DECAY_MIN:.8,HEAT_DECAY_MAX:.99,HEAT_SENSITIVITY_MIN:.1,HEAT_SENSITIVITY_MAX:2,INTERACTION_RADIUS_MIN:.1,INTERACTION_RADIUS_MAX:3,REACTIVITY_MIN:.1,REACTIVITY_MAX:3,HOLD_MOVE_TARGET:.95,RELEASE_MOVE_TARGET:1,HOLD_POWER_TARGET:1,RELEASE_POWER_TARGET:.8,HEAT_CLEANUP_THRESHOLD:.001},s={IDLE_THRESHOLD:3,EVENT_INTERVAL_MIN:.8,EVENT_INTERVAL_MAX:2.5,EVENT_DURATION_MIN:1.2,EVENT_DURATION_MAX:3,EVENT_INTENSITY_MIN:.4,EVENT_INTENSITY_MAX:1,POSITION_BOUNDS:{MIN_X:-.5,MAX_X:.5,MIN_Y:-.5,MAX_Y:.5},EDGE_BIAS:{EDGE_PROBABILITY:.98,EDGE_THRESHOLD:.4,EDGE_RING_INNER:.42,EDGE_RING_OUTER:.48},CONTINUOUS_MODE:{ENABLED:!0,SPAWN_INTERVAL:4,MAX_CONCURRENT_PATHS:3,ANGULAR_SPEED:.6,RADIUS_OSCILLATION:.01},MOVEMENT_SPEED:.02,MOVEMENT_VARIATION:.05,RADIUS_MULTIPLIER:3.5,MOVEMENT_PATTERNS:{CIRCULAR:.3,SPIRAL_IN:.15,SPIRAL_OUT:.15,FIGURE_EIGHT:.2,ORBITAL:.15,RANDOM_WALK:.05},SPIRAL:{RADIUS_CHANGE_SPEED:.05,MIN_RADIUS:.2,MAX_RADIUS:.48},FIGURE_EIGHT:{WIDTH:.35,HEIGHT:.25,SPEED_MULTIPLIER:1.2},ORBITAL:{CENTER_OFFSET:.15,ORBIT_RADIUS:.2}},k={effectIntensity:{min:0,max:2,step:.1},contrastPower:{min:.1,max:2,step:.1},colorSaturation:{min:.5,max:3,step:.1},heatSensitivity:{min:.1,max:2,step:.1},videoBlendAmount:{min:0,max:1,step:.1},gradientShift:{min:-.5,max:.5,step:.05},heatDecay:{min:.8,max:.99,step:.01},interactionRadius:{min:.1,max:3,step:.1},reactivity:{min:.1,max:3,step:.1}},Se={ALPHA:!1,ANTIALIAS:!1,LOGARITHMIC_DEPTH_BUFFER:!1,CLEAR_COLOR:0},Pe={TYPE:"HalfFloatType",FORMAT:"RGBAFormat",COLOR_SPACE:"LinearSRGBColorSpace",DEPTH_BUFFER:!1,STENCIL_BUFFER:!1,MAG_FILTER:"LinearFilter",MIN_FILTER:"LinearMipmapLinearFilter",GENERATE_MIPMAPS:!0},ge={maskUrl:D.MASK_URL,videoUrl:D.VIDEO_URL,defaultParameters:C,paletteHex:[...H],videoLoop:{startTime:v.LOOP_START_TIME,endTime:v.LOOP_END_TIME},animation:{fadeInSpeed:c.FADE_IN_SPEED,mouseInterpolationSpeed:c.MOUSE_INTERPOLATION_SPEED,scrollInterpolationSpeed:c.SCROLL_INTERPOLATION_SPEED,heatMaxValue:c.HEAT_MAX_VALUE},drawRenderer:{textureSize:p.TEXTURE_SIZE,radiusRatio:p.RADIUS_RATIO,mobileRadius:p.MOBILE_RADIUS,desktopRadius:p.DESKTOP_RADIUS}},Me=Object.freeze(Object.defineProperty({__proto__:null,ANIMATION:c,ASSETS:D,CAMERA_CONFIG:h,DEFAULT_PARAMETERS:C,DRAW_RENDERER:p,GRADIENT_CONFIG:L,IDLE_ANIMATION:s,INTERACTION:O,PARAMETER_RANGES:k,RENDERER_CONFIG:Se,RENDER_TARGET_OPTIONS:Pe,THERMAL_EFFECT_CONFIG:ge,THERMAL_PALETTE:H,VIDEO_CONFIG:v},Symbol.toStringTag,{value:"Module"})),Ne=`/**
 * Thermal Effect Vertex Shader
 * Simple pass-through that prepares UV coordinates for the fragment shader
 */

varying vec2 vUv;
varying vec4 vClipPosition;

void main() {
    vUv = uv;
    vClipPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = vClipPosition;
}`,Oe=`/**
 * Thermal Effect Fragment Shader
 * 
 * This shader creates the Apple Event logo thermal effect by combining:
 * - Video texture for base thermal patterns
 * - Apple logo mask for shaping
 * - Mouse interaction data for heat generation
 * - Multi-color gradient mapping for thermal visualization
 */

// Use WebGL1-compatible precision declarations only

// Input textures
uniform sampler2D drawMap;      // Mouse interaction heat map
uniform sampler2D textureMap;   // Background video texture
uniform sampler2D maskMap;      // Apple logo mask

// Animation parameters
uniform float blendVideo;
uniform float amount;
uniform float opacity;
uniform vec2 scale;
uniform vec2 offset;

// Color palette (7 colors for thermal gradient)
uniform vec3 color1, color2, color3, color4, color5, color6, color7;
uniform vec4 blend, fade, maxBlend;
uniform float power, rnd;
uniform vec4 heat, stretch;

// Effect parameters
uniform float effectIntensity;
uniform float colorSaturation;
uniform float gradientShift;
uniform float interactionSize;

varying vec2 vUv;
varying vec4 vClipPosition;

// Convert RGB to luminance for saturation adjustment
vec3 linearRgbToLuminance(vec3 c) {
    float f = dot(c, vec3(0.2126729, 0.7151522, 0.0721750));
    return vec3(f);
}

// Adjust color saturation
vec3 saturation(vec3 c, float s) {
    return mix(linearRgbToLuminance(c), c, s);
}

// 2D rotation matrix
mat2 rotate2D(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat2(c, -s, s, c);
}

// Simple noise function
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Smooth noise
float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Create thermal color gradient based on temperature value
vec3 gradient(float t) {
    // Apply gradient shift and color cycling
    t = clamp(t + gradientShift, 0.0, 1.0);

    float p1 = blend.x, p2 = blend.y, p3 = blend.z, p4 = blend.w;
    float p5 = maxBlend.x, p6 = maxBlend.y;
    float f1 = fade.x, f2 = fade.y, f3 = fade.z, f4 = fade.w;
    float f5 = maxBlend.z, f6 = maxBlend.w;

    // Smooth transitions between color stops
    float b1 = smoothstep(p1 - f1 * 0.5, p1 + f1 * 0.5, t);
    float b2 = smoothstep(p2 - f2 * 0.5, p2 + f2 * 0.5, t);
    float b3 = smoothstep(p3 - f3 * 0.5, p3 + f3 * 0.5, t);
    float b4 = smoothstep(p4 - f4 * 0.5, p4 + f4 * 0.5, t);
    float b5 = smoothstep(p5 - f5 * 0.5, p5 + f5 * 0.5, t);
    float b6 = smoothstep(p6 - f6 * 0.5, p6 + f6 * 0.5, t);

    // Blend colors based on temperature
    vec3 col = color1;
    col = mix(col, color2, b1);
    col = mix(col, color3, b2);
    col = mix(col, color4, b3);
    col = mix(col, color5, b4);
    col = mix(col, color6, b5);
    col = mix(col, color7, b6);

    return col;
}

void main() {
    // Convert clip space to UV coordinates for draw texture sampling
    vec2 duv = vClipPosition.xy / vClipPosition.w;
    duv = 0.5 + duv * 0.5;

    // Apply scaling to UV coordinates
    vec2 uv = vUv;
    uv -= 0.5;
    uv /= scale;
    uv += 0.5;
    uv += offset;

    // Calculate opacity and amount factors
    float o = clamp(opacity, 0.0, 1.0);
    float a = clamp(amount, 0.0, 1.0);
    float v = o * a;

    // Sample the Apple logo mask (green channel)
    vec4 tex = texture(maskMap, uv + offset);
    float mask = tex.g;

    // Sample mouse interaction data (heat map from DrawRenderer)
    vec3 draw = texture(drawMap, duv).rgb;
    float heatDraw = draw.b;
    heatDraw *= mix(0.1, 1.0, mask);  // Apply mask to heat

    // Apply interaction size scaling
    heatDraw *= interactionSize;

    // Sample background video with slight distortion from heat
    vec2 off = draw.rg * 0.01;
    // Use texture2D for broad WebGL1/WebGL2 compatibility (Safari/iOS safe)
    vec3 video = texture2D(textureMap, uv + off).rgb;

    // Enhance heat effect based on video content
    float h = mix(pow(1.0 - video.r, 1.5), 1.0, 0.2) * 1.25;
    heatDraw *= h;

    // Create base temperature map from video
    float map = video.r;
    map = pow(map, power);

    // Apply vertical gradient mask
    float msk = smoothstep(0.2, 0.5, uv.y);
    map = mix(map * 0.91, map, msk);
    map = mix(0.0, map, v);

    // Apply circular fade from center
    float fade = distance(vUv, vec2(0.5, 0.52));
    fade = smoothstep(0.5, 0.62, 1.0 - fade);

    // Generate final color using gradient function
    vec3 final = gradient(map + heatDraw);
    final = saturation(final, colorSaturation);  // Apply controllable saturation
    final *= fade;                    // Apply circular fade
    final = mix(vec3(0.0), final, a * effectIntensity); // Apply overall amount with intensity multiplier

    gl_FragColor = vec4(final, 1.0);
}
`,De=`/**
 * Draw Renderer Vertex Shader
 * Simple pass-through for mouse interaction texture rendering
 */

precision highp float;
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ye=`/**
 * Draw Renderer Fragment Shader
 * 
 * Creates a mouse interaction heat map by tracking cursor position and movement.
 * Uses ping-pong rendering between two render targets for temporal effects.
 * 
 * Outputs:
 * - R/G channels: Movement direction vectors for distortion effects
 * - B channel: Heat intensity based on interaction
 */

precision highp float;

uniform float uDraw;
uniform vec3 uRadius;
uniform vec3 uResolution;
uniform vec2 uPosition;
uniform vec4 uDirection;
uniform float uSizeDamping;
uniform float uFadeDamping;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    float aspect = uResolution.x / uResolution.y;
    vec2 pos = uPosition;
    pos.y /= aspect;
    vec2 uv = vUv;
    uv.y /= aspect;
    
    float dist = distance(pos, uv) / (uRadius.z / uResolution.x);
    dist = smoothstep(uRadius.x, uRadius.y, dist);
    
    vec3 dir = uDirection.xyz * uDirection.w;
    vec2 offset = vec2((-dir.x) * (1.0 - dist), (dir.y) * (1.0 - dist));
    
    vec4 color = texture(uTexture, vUv + (offset * 0.01));
    color *= uFadeDamping;
    color.r += offset.x;
    color.g += offset.y;
    color.rg = clamp(color.rg, -1.0, 1.0);
    color.b += uDraw * (1.0 - dist);
    
    gl_FragColor = vec4(color.rgb, 1.0);
}`,x={thermal:{vertex:Ne,fragment:Oe},draw:{vertex:De,fragment:ye}};class we{constructor(e=p.TEXTURE_SIZE,n={}){this.options=n,this.camera=new Z(h.LEFT,h.RIGHT,h.TOP,h.BOTTOM,h.NEAR,h.FAR),this.camera.position.z=h.POSITION_Z;const t={type:oe,format:se,colorSpace:re,depthBuffer:!1,stencilBuffer:!1,magFilter:y,minFilter:y,generateMipmaps:!1};this.renderTargetA=new z(e,e,t),this.renderTargetB=new z(e,e,t),this.uniforms=this.createUniforms(),this.material=new J({uniforms:this.uniforms,vertexShader:x.draw.vertex,fragmentShader:x.draw.fragment,depthTest:!1,transparent:!0}),this.scene=new Q,this.mesh=new ee(new te(1,1),this.material),this.scene.add(this.mesh)}createUniforms(){const[e,n,t]=p.UNIFORMS.RADIUS_VECTOR;return{uRadius:{value:new I(e,n,t)},uPosition:{value:new ne(0,0)},uDirection:{value:new le(0,0,0,0)},uResolution:{value:new I(0,0,0)},uTexture:{value:null},uSizeDamping:{value:p.UNIFORMS.SIZE_DAMPING},uFadeDamping:{value:p.UNIFORMS.FADE_DAMPING},uDraw:{value:0}}}updateRadius(e=0){this.uniforms.uRadius.value.z=e}updateDraw(e=0){this.uniforms.uDraw.value=e}updatePosition(e,n=!1){n?this.uniforms.uPosition.value.set(e.x*.5+.5,e.y*.5+.5):this.uniforms.uPosition.value.set(e.x,e.y)}updateDirection(e){this.uniforms.uDirection.value.set(e.x,e.y,0,p.UNIFORMS.DIRECTION_MULTIPLIER)}resize(e,n){const t=n/(this.options.radiusRatio??p.RADIUS_RATIO),a=(this.options.isMobile?p.MOBILE_RADIUS:p.DESKTOP_RADIUS)*t;this.updateRadius(a),this.uniforms.uResolution.value.set(e,n,1)}getTexture(){return this.renderTargetB.texture}render(e){this.uniforms.uTexture.value=this.renderTargetB.texture;const n=e.getRenderTarget();e.setRenderTarget(this.renderTargetA),e.autoClear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n);const t=this.renderTargetA;this.renderTargetA=this.renderTargetB,this.renderTargetB=t}dispose(){this.material.dispose(),this.renderTargetA.dispose(),this.renderTargetB.dispose(),this.mesh.geometry.dispose()}}function N(r,e,n){return r+(e-r)*n}function P(r,e){const n=r*e*60;return n>1?1:n<0?0:n}function Ue(r,e,n){return Math.min(Math.max(r,e),n)}function Le(r){r=r.replace(/^#/,""),r.length===3&&(r=r.split("").map(i=>i+i).join(""));const e=parseInt(r.slice(0,2),16)/255,n=parseInt(r.slice(2,4),16)/255,t=parseInt(r.slice(4,6),16)/255;return[e,n,t]}function Ce(r,e,n){let t=.5,i=.5;n.width>0&&(t=(r-n.left)/n.width),n.height>0&&(i=(e-n.top)/n.height);const a=2*(t-.5),o=2*-(i-.5);return{x:a,y:o}}function xe(r,e,n,t,i){const a=i.width>0?(r-i.left)/i.width:.5,o=i.height>0?(e-i.top)/i.height:.5,d=a-n,E=o-t;return{x:d,y:E}}class Ve{constructor(e){this.lastUserActivityTime=0,this.isIdle=!1,this.nextEventTime=0,this.currentEvent=null,this.currentPosition=new I,this.currentIntensity=0,this.continuousPaths=[],this.nextPathId=0,this.nextPathSpawn=0,this.onPositionUpdate=e.onPositionUpdate,this.onIdleStateChange=e.onIdleStateChange,this.resetUserActivity()}resetUserActivity(){this.lastUserActivityTime=performance.now()/1e3,this.isIdle&&(this.isIdle=!1,this.currentEvent=null,this.currentIntensity=0,this.onIdleStateChange(!1))}update(e){const n=e,t=n-this.lastUserActivityTime;!this.isIdle&&t>=s.IDLE_THRESHOLD&&(this.isIdle=!0,this.scheduleNextPathSpawn(n),this.onIdleStateChange(!0)),this.isIdle&&(s.CONTINUOUS_MODE.ENABLED?this.updateContinuousMode(n):this.updateDiscreteMode(n))}updateContinuousMode(e){e>=this.nextPathSpawn&&this.continuousPaths.length<s.CONTINUOUS_MODE.MAX_CONCURRENT_PATHS&&(this.spawnContinuousPath(e),this.scheduleNextPathSpawn(e)),this.updateContinuousPaths(e),this.calculateCombinedOutput()}updateDiscreteMode(e){this.currentEvent&&this.updateCurrentEvent(e),!this.currentEvent&&e>=this.nextEventTime&&this.startNewEvent(e)}updateCurrentEvent(e){if(!this.currentEvent||this.currentEvent.completed)return;const n=e-this.currentEvent.startTime,t=Math.min(n/this.currentEvent.duration,1);if(t>=1){this.currentEvent.completed=!0,this.currentIntensity=0,this.scheduleNextEvent(e);return}const i=this.easeInOutSine(t);this.currentPosition.lerpVectors(this.currentEvent.startPosition,this.currentEvent.targetPosition,i);const a=s.MOVEMENT_VARIATION;this.currentPosition.x+=(Math.random()-.5)*a,this.currentPosition.y+=(Math.random()-.5)*a;let o=1;t<.2?o=t/.2:t>.8&&(o=(1-t)/.2),this.currentIntensity=this.currentEvent.intensity*o,this.onPositionUpdate(this.currentPosition.clone(),this.currentIntensity)}startNewEvent(e){const n=this.generateRandomPosition(),t=this.generateRandomPosition(),i=.1;for(;n.distanceTo(t)<i;)t.copy(this.generateRandomPosition());this.currentEvent={startPosition:n,targetPosition:t,startTime:e,duration:this.randomBetween(s.EVENT_DURATION_MIN,s.EVENT_DURATION_MAX),intensity:this.randomBetween(s.EVENT_INTENSITY_MIN,s.EVENT_INTENSITY_MAX),completed:!1},this.currentPosition.copy(n)}scheduleNextEvent(e){const n=this.randomBetween(s.EVENT_INTERVAL_MIN,s.EVENT_INTERVAL_MAX);this.nextEventTime=e+n,this.currentEvent=null}generateRandomPosition(){const{EDGE_PROBABILITY:e,EDGE_RING_INNER:n,EDGE_RING_OUTER:t}=s.EDGE_BIAS;return Math.random()<e?this.generateEdgePosition():this.generateCenterPosition()}spawnContinuousPath(e){const{EDGE_RING_INNER:n,EDGE_RING_OUTER:t}=s.EDGE_BIAS,i=this.selectRandomPattern(),a=this.randomBetween(n,t),o={id:this.nextPathId++,pattern:i,startAngle:Math.random()*Math.PI*2,currentAngle:Math.random()*Math.PI*2,baseRadius:a,currentRadius:a,intensity:this.randomBetween(s.EVENT_INTENSITY_MIN,s.EVENT_INTENSITY_MAX),startTime:e,lifespan:this.randomBetween(s.EVENT_DURATION_MIN*2,s.EVENT_DURATION_MAX*2),clockwise:Math.random()>.5};this.initializePatternProperties(o),this.continuousPaths.push(o)}selectRandomPattern(){const e=s.MOVEMENT_PATTERNS,n=Object.values(e).reduce((i,a)=>i+a,0);let t=Math.random()*n;for(const[i,a]of Object.entries(e))if(t-=a,t<=0)return i;return"CIRCULAR"}initializePatternProperties(e){switch(e.pattern){case"ORBITAL":const n=Math.random()*Math.PI*2,t=s.ORBITAL.CENTER_OFFSET;e.centerOffset=new ne(Math.cos(n)*t,Math.sin(n)*t);break;case"FIGURE_EIGHT":e.phaseOffset=Math.random()*Math.PI*2;break;case"RANDOM_WALK":e.lastPosition=this.generateEdgePosition();break;case"SPIRAL_IN":e.currentRadius=s.SPIRAL.MAX_RADIUS;break;case"SPIRAL_OUT":e.currentRadius=s.SPIRAL.MIN_RADIUS;break}}updateContinuousPaths(e){for(let t=this.continuousPaths.length-1;t>=0;t--){const i=this.continuousPaths[t],a=e-i.startTime;if(a>=i.lifespan){this.continuousPaths.splice(t,1);continue}this.updatePathByPattern(i,.016667,a)}}updatePathByPattern(e,n,t){const i=s.CONTINUOUS_MODE.ANGULAR_SPEED*(e.clockwise?1:-1);switch(e.pattern){case"CIRCULAR":e.currentAngle+=i*n;break;case"SPIRAL_IN":e.currentAngle+=i*n,e.currentRadius=Math.max(s.SPIRAL.MIN_RADIUS,e.currentRadius-s.SPIRAL.RADIUS_CHANGE_SPEED*n);break;case"SPIRAL_OUT":e.currentAngle+=i*n,e.currentRadius=Math.min(s.SPIRAL.MAX_RADIUS,e.currentRadius+s.SPIRAL.RADIUS_CHANGE_SPEED*n);break;case"FIGURE_EIGHT":const a=i*s.FIGURE_EIGHT.SPEED_MULTIPLIER;e.currentAngle+=a*n;break;case"ORBITAL":e.currentAngle+=i*n;break;case"RANDOM_WALK":t%.5<n&&this.updateRandomWalkPath(e);break}e.currentAngle=e.currentAngle%(Math.PI*2),e.currentAngle<0&&(e.currentAngle+=Math.PI*2)}updateRandomWalkPath(e){e.lastPosition||(e.lastPosition=this.generateEdgePosition());const n=.15,t=e.lastPosition.clone();t.x+=(Math.random()-.5)*n,t.y+=(Math.random()-.5)*n;const i=t.length();(i<s.EDGE_BIAS.EDGE_RING_INNER||i>s.EDGE_BIAS.EDGE_RING_OUTER)&&t.normalize().multiplyScalar(this.randomBetween(s.EDGE_BIAS.EDGE_RING_INNER,s.EDGE_BIAS.EDGE_RING_OUTER)),e.lastPosition=t,e.currentAngle=Math.atan2(t.y,t.x),e.currentRadius=t.length()}calculateCombinedOutput(){if(this.continuousPaths.length===0){this.currentIntensity=0;return}let e=this.continuousPaths[0],n=0;for(const t of this.continuousPaths){const a=(performance.now()/1e3-t.startTime)/t.lifespan;let o=1;a<.2?o=a/.2:a>.8&&(o=(1-a)/.2);const d=t.intensity*o;d>n&&(n=d,e=t)}this.currentPosition=this.calculatePatternPosition(e),this.currentIntensity=n,this.onPositionUpdate(this.currentPosition.clone(),this.currentIntensity)}scheduleNextPathSpawn(e){this.nextPathSpawn=e+s.CONTINUOUS_MODE.SPAWN_INTERVAL}calculatePatternPosition(e){const{RADIUS_OSCILLATION:n}=s.CONTINUOUS_MODE;let t=new I;switch(e.pattern){case"CIRCULAR":case"SPIRAL_IN":case"SPIRAL_OUT":{const i=Math.sin(performance.now()/1e3*2)*n,a=e.currentRadius+i;t.set(Math.cos(e.currentAngle)*a,Math.sin(e.currentAngle)*a,0)}break;case"FIGURE_EIGHT":{const{WIDTH:i,HEIGHT:a}=s.FIGURE_EIGHT,o=e.currentAngle+(e.phaseOffset||0);if(t.set(i*Math.sin(o),a*Math.sin(o*2),0),t.length()>0){const E=this.randomBetween(s.EDGE_BIAS.EDGE_RING_INNER,s.EDGE_BIAS.EDGE_RING_OUTER);t.normalize().multiplyScalar(E)}}break;case"ORBITAL":if(e.centerOffset){const i=s.ORBITAL.ORBIT_RADIUS,a=Math.cos(e.currentAngle)*i,o=Math.sin(e.currentAngle)*i;t.set(e.centerOffset.x+a,e.centerOffset.y+o,0)}else t.set(Math.cos(e.currentAngle)*e.currentRadius,Math.sin(e.currentAngle)*e.currentRadius,0);break;case"RANDOM_WALK":e.lastPosition?t=e.lastPosition.clone():t.set(Math.cos(e.currentAngle)*e.currentRadius,Math.sin(e.currentAngle)*e.currentRadius,0);break;default:t.set(Math.cos(e.currentAngle)*e.currentRadius,Math.sin(e.currentAngle)*e.currentRadius,0)}return t}generateEdgePosition(){const{EDGE_RING_INNER:e,EDGE_RING_OUTER:n}=s.EDGE_BIAS,t=Math.random()*Math.PI*2,i=this.randomBetween(e,n),a=Math.cos(t)*i,o=Math.sin(t)*i;return new I(a,o,0)}generateCenterPosition(){const{MIN_X:e,MAX_X:n,MIN_Y:t,MAX_Y:i}=s.POSITION_BOUNDS,a=.3;return new I(this.randomBetween(-.3,a),this.randomBetween(-.3,a),0)}randomBetween(e,n){return e+Math.random()*(n-e)}easeInOutSine(e){return-(Math.cos(Math.PI*e)-1)/2}getIsIdle(){return this.isIdle}getCurrentPosition(){return this.currentPosition.clone()}getCurrentIntensity(){return this.currentIntensity}forceIdle(){this.isIdle=!0,this.scheduleNextEvent(performance.now()/1e3),this.onIdleStateChange(!0)}dispose(){this.currentEvent=null,this.isIdle=!1,this.continuousPaths=[]}}class be{constructor(e){this.cleanupFunctions=[],this.queuedEvent=null,this.rafId=null,this.isUsingIdleAnimation=!1,this.handlePointerMove=n=>{const t=n,i=this.hitContainer.getBoundingClientRect();this.queuePointerEvent(t.clientX,t.clientY,i),this.setInteracting(!0),this.idleAnimator.resetUserActivity()},this.handlePointerDown=n=>{const t=n,i=this.hitContainer.getBoundingClientRect();this.queuePointerEvent(t.clientX,t.clientY,i),this.setInteracting(!0),this.idleAnimator.resetUserActivity()},this.handlePointerEnter=n=>{const t=n,i=this.hitContainer.getBoundingClientRect();this.queuePointerEvent(t.clientX,t.clientY,i),this.idleAnimator.resetUserActivity()},this.handlePointerUp=()=>{this.setInteracting(!1),this.idleAnimator.resetUserActivity()},this.handlePointerLeave=()=>{this.setInteracting(!1),this.idleAnimator.resetUserActivity()},this.handleGlobalPointerMove=n=>{const t=n,i=this.container.getBoundingClientRect();this.queuePointerEvent(t.clientX,t.clientY,i),this.setInteracting(!0),this.idleAnimator.resetUserActivity()},this.handleScroll=()=>{},this.container=e.container,this.hitContainer=e.hitContainer||e.container,this.onPositionUpdate=e.onPositionUpdate,this.onInteractionChange=e.onInteractionChange,this.mouseState={position:new I(0,0,0),target:new I(0,0,0)},this.interactionState={hold:!1,heatUp:0,lastNX:.5,lastNY:.5},this.setupEventListeners(),this.setupIdleAnimator()}setupEventListeners(){this.setupLocalEvents(),this.setupGlobalEvents()}setupLocalEvents(){const e=[this.hitContainer];this.container!==this.hitContainer&&e.push(this.container),e.forEach(n=>{this.cleanupFunctions.push(S(n,"pointermove",this.handlePointerMove,{passive:!0}),S(n,"pointerdown",this.handlePointerDown,{passive:!0}),S(n,"pointerenter",this.handlePointerEnter,{passive:!0}),S(n,"pointerup",this.handlePointerUp,{passive:!0}),S(n,"pointerleave",this.handlePointerLeave,{passive:!0}))})}setupGlobalEvents(){this.cleanupFunctions.push(S(window,"pointermove",this.handleGlobalPointerMove,{passive:!0}),S(window,"scroll",this.handleScroll,{passive:!0}))}queuePointerEvent(e,n,t){this.queuedEvent={clientX:e,clientY:n,bounds:t},this.rafId===null&&(this.rafId=requestAnimationFrame(()=>{if(this.queuedEvent){const{clientX:i,clientY:a,bounds:o}=this.queuedEvent;this.processPointerEvent(i,a,o),this.queuedEvent=null}this.rafId=null}))}processPointerEvent(e,n,t){const{x:i,y:a}=Ce(e,n,t),{x:o,y:d}=xe(e,n,this.interactionState.lastNX,this.interactionState.lastNY,t);this.mouseState.target.set(i,a,0),this.onPositionUpdate(this.mouseState.target,{x:o,y:d}),this.interactionState.lastNX=t.width>0?(e-t.left)/t.width:.5,this.interactionState.lastNY=t.height>0?(n-t.top)/t.height:.5}setupIdleAnimator(){this.idleAnimator=new Ve({onPositionUpdate:(e,n)=>{const t=s.RADIUS_MULTIPLIER,i={x:(Math.random()-.5)*n*t*1.5,y:(Math.random()-.5)*n*t*1.5};this.mouseState.target.copy(e),this.onPositionUpdate(e,i),this.isUsingIdleAnimation=!0},onIdleStateChange:e=>{e||(this.isUsingIdleAnimation=!1),this.setInteracting(e)}})}setInteracting(e){this.interactionState.hold!==e&&(this.interactionState.hold=e,this.onInteractionChange(e))}getMouseState(){return this.mouseState}getInteractionState(){return this.interactionState}updateMousePosition(e){this.mouseState.position.lerp(this.mouseState.target,e)}updateIdleAnimation(e){this.idleAnimator.update(e)}isUsingIdle(){return this.isUsingIdleAnimation}dispose(){var e;this.cleanupFunctions.forEach(n=>n()),this.cleanupFunctions=[],(e=this.idleAnimator)==null||e.dispose(),this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}}class Ge{constructor(e={}){this.callbacks=e,this.parameters={...C},e.initialParameters&&Object.assign(this.parameters,e.initialParameters)}setParameter(e,n){var t,i;this.parameters[e]=n,(i=(t=this.callbacks).onParameterChange)==null||i.call(t,e,n)}updateParameters(e){Object.entries(e).forEach(([n,t])=>{t!==void 0&&this.setParameter(n,t)})}getAllParameters(){return{...this.parameters}}getParameter(e){return this.parameters[e]}resetToDefaults(){var e,n;this.parameters={...C},(n=(e=this.callbacks).onReset)==null||n.call(e),Object.entries(this.parameters).forEach(([t,i])=>{var a,o;(o=(a=this.callbacks).onParameterChange)==null||o.call(a,t,i)})}getParameterRanges(){return k}validateParameter(e,n){const t=k[e];return Math.max(t.min,Math.min(t.max,n))}setParameterSafe(e,n){const t=this.validateParameter(e,n);this.setParameter(e,t)}toJSON(){return{...this.parameters}}fromJSON(e){Object.entries(e).forEach(([n,t])=>{t!==void 0&&typeof t=="number"&&this.setParameterSafe(n,t)})}dispose(){this.callbacks={}}}class Be{constructor(e){this.uniforms=this.createUniforms(e),this.material=this.createMaterial()}createUniforms(e){const n=H.map(t=>Le(t));return{blendVideo:{value:0},drawMap:{value:e.drawTexture},textureMap:{value:e.videoTexture},maskMap:{value:e.maskTexture},scale:{value:[1,1]},offset:{value:[0,0]},opacity:{value:1},amount:{value:0},color1:{value:n[0]},color2:{value:n[1]},color3:{value:n[2]},color4:{value:n[3]},color5:{value:n[4]},color6:{value:n[5]},color7:{value:n[6]},blend:{value:[...L.BLEND_POINTS]},fade:{value:[...L.FADE_RANGES]},maxBlend:{value:[...L.MAX_BLEND]},power:{value:.8},rnd:{value:0},heat:{value:[0,0,0,1.02]},stretch:{value:[1,1,0,0]},effectIntensity:{value:1},colorSaturation:{value:1.3},gradientShift:{value:0},interactionSize:{value:1}}}createMaterial(){return new J({uniforms:this.uniforms,vertexShader:x.thermal.vertex,fragmentShader:x.thermal.fragment,depthTest:!1,transparent:!0})}updateUniforms(e){e.opacity!==void 0&&(this.uniforms.opacity.value=e.opacity),e.amount!==void 0&&(this.uniforms.amount.value=e.amount),e.power!==void 0&&(this.uniforms.power.value=e.power),e.blendVideo!==void 0&&(this.uniforms.blendVideo.value=e.blendVideo),e.effectIntensity!==void 0&&(this.uniforms.effectIntensity.value=e.effectIntensity),e.colorSaturation!==void 0&&(this.uniforms.colorSaturation.value=e.colorSaturation),e.gradientShift!==void 0&&(this.uniforms.gradientShift.value=e.gradientShift),e.interactionSize!==void 0&&(this.uniforms.interactionSize.value=e.interactionSize),e.randomValue!==void 0&&(this.uniforms.rnd.value=e.randomValue)}updateTextures(e){e.videoTexture&&(this.uniforms.textureMap.value=e.videoTexture),e.drawTexture&&(this.uniforms.drawMap.value=e.drawTexture),e.maskTexture&&(this.uniforms.maskMap.value=e.maskTexture)}updateTransform(e){e.scale&&(this.uniforms.scale.value=e.scale),e.offset&&(this.uniforms.offset.value=e.offset)}updateFromParameters(e){this.updateUniforms({effectIntensity:e.effectIntensity,colorSaturation:e.colorSaturation,gradientShift:e.gradientShift,interactionSize:e.interactionRadius,power:e.contrastPower,blendVideo:e.videoBlendAmount})}getMaterial(){return this.material}getUniforms(){return this.uniforms}dispose(){this.material.dispose()}}function q(r){return new Promise((e,n)=>{new ue().load(r,t=>{t.wrapS=t.wrapT=ce,e(t)},void 0,t=>n(t))})}function Fe(r,e,n,t={}){const i=document.createElement("video");return i.muted=t.muted??!0,i.playsInline=t.playsInline??!0,i.autoplay=t.autoplay??!1,i.controls=t.controls??!1,i.loop=t.loop??!0,i.width=e,i.height=n,i.src=r,i.preload="metadata",i}function ke(r){const e=new he(r);return e.minFilter=y,e.magFilter=y,e.generateMipmaps=!1,e.colorSpace=$,e.needsUpdate=!0,e}function K(r,e){r.addEventListener("loadeddata",e,{once:!0})}class He extends Q{constructor(e){super(),this.videoReady=!1,this.textureReady=!1,this.heatUp=0,this.animationValues={blendVideo:{value:0,target:0},amount:{value:0,target:0},mouse:{position:new I(0,0,0),target:new I(0,0,0)},move:{value:1,target:1},scrollAnimation:{opacity:{value:1,target:1},scale:{value:1,target:1},power:{value:.8,target:.8}}},this.rendererWrapper=e,this.camera=new Z(h.LEFT,h.RIGHT,h.TOP,h.BOTTOM,h.NEAR,h.FAR),this.camera.position.z=h.POSITION_Z,this.setupDOMReferences(),this.setupPlayPauseButton()}setupDOMReferences(){this.animationWrapper=Y(".canvas-wrapper"),this.playButton=Y("#play-pause-btn")}setupPlayPauseButton(){this.playButton.addEventListener("click",this.handleToggleVideo.bind(this))}async init(e={}){this.rendererWrapper.renderer.setClearColor(0);const n=Te(),t=F()?192:256;this.drawRenderer=new we(t,{radiusRatio:1e3,isMobile:n}),await this.loadAssets(e.videoElement),this.createThermalEffect(),this.setupInteractionManager(),this.setupParameterController(),this.onResize(this.rendererWrapper.rect.width,this.rendererWrapper.rect.height),this.drawRenderer.resize(this.rendererWrapper.rect.width,this.rendererWrapper.rect.height),this.animationWrapper.classList.add("loaded")}async loadAssets(e){const{width:n,height:t}=this.rendererWrapper.rect;if(e)this.video=e,this.video.muted=v.MUTED,this.video.autoplay=v.AUTOPLAY,this.video.controls=v.CONTROLS,this.video.loop=!0,this.video.playsInline=!0,this.video.preload="auto",this.video.setAttribute("fetchpriority","high"),this.video.width=n,this.video.height=t,K(this.video,this.handleVideoReady.bind(this)),this.video.load(),this.maskTexture=await q(D.MASK_URL);else{const[i]=await Promise.all([q(D.MASK_URL),this.createVideoElement(n,t)]);this.maskTexture=i}}async createVideoElement(e,n){this.video=Fe(D.VIDEO_URL,e,n,{muted:v.MUTED,autoplay:v.AUTOPLAY,controls:v.CONTROLS,loop:!0}),K(this.video,this.handleVideoReady.bind(this))}handleVideoReady(){this.videoReady||(this.videoTexture=ke(this.video),this.videoTexture.minFilter=y,this.videoTexture.magFilter=y,this.videoTexture.generateMipmaps=!1,this.videoTexture.needsUpdate=!0,this.thermalMaterial&&this.thermalMaterial.updateTextures({videoTexture:this.videoTexture}),this.animationValues.amount.target=1,this.animationValues.blendVideo.value=1,this.videoReady=!0,this.textureReady=!0,this.video.play().catch(()=>{}),this.updatePlayButtonState())}createThermalEffect(){this.thermalMaterial=new Be({drawTexture:this.drawRenderer.getTexture(),videoTexture:this.videoTexture,maskTexture:this.maskTexture}),this.heatMesh=new ee(new te(1,1),this.thermalMaterial.getMaterial()),this.add(this.heatMesh)}setupInteractionManager(){const e=document.querySelector(".interaction-area");this.interactionManager=new be({container:this.rendererWrapper.container,hitContainer:e,onPositionUpdate:(n,t)=>{this.animationValues.mouse.target.copy(n),this.drawRenderer.updateDirection(t)},onInteractionChange:n=>{this.animationValues.move.target=n?O.HOLD_MOVE_TARGET:O.RELEASE_MOVE_TARGET,this.animationValues.scrollAnimation.power.target=n?O.HOLD_POWER_TARGET:O.RELEASE_POWER_TARGET,n&&this.video&&this.video.paused&&this.video.play().catch(()=>{})}})}setupParameterController(){this.parameterController=new Ge({onParameterChange:(e,n)=>{const t=this.parameterController.getAllParameters();this.thermalMaterial.updateFromParameters(t)},onReset:()=>{const e=this.parameterController.getAllParameters();this.thermalMaterial.updateFromParameters(e),this.heatUp=0}})}handleToggleVideo(){this.video&&(this.video.paused?this.video.play().catch(()=>{}):this.video.pause(),this.updatePlayButtonState())}updatePlayButtonState(){!this.playButton||!this.video||(this.playButton.textContent=this.video.paused?"Play":"Pause")}onResize(e,n){const t=e/n;let i,a;t>=1?(a=1,i=t):(i=1,a=1/t),this.camera.left=-i/2,this.camera.right=i/2,this.camera.top=a/2,this.camera.bottom=-a/2,this.camera.updateProjectionMatrix(),this.drawRenderer&&this.drawRenderer.resize(e,n)}update(e){this.textureReady&&(this.updateAnimationValues(e),this.updateVideoLoop(),this.updateHeatInteraction(e),this.updateThermalMaterial(),this.updateMeshTransform(),this.updateDrawRenderer())}updateAnimationValues(e){this.animationValues.mouse.position.lerp(this.animationValues.mouse.target,P(c.MOUSE_INTERPOLATION_SPEED,e)),this.animationValues.move.value=N(this.animationValues.move.value,this.animationValues.move.target,P(c.MOVEMENT_INTERPOLATION_SPEED,e)),this.animationValues.scrollAnimation.power.value=Ue(N(this.animationValues.scrollAnimation.power.value,this.animationValues.scrollAnimation.power.target,P(c.POWER_INTERPOLATION_SPEED,e)),c.POWER_MIN,c.POWER_MAX),this.animationValues.scrollAnimation.opacity.value=N(this.animationValues.scrollAnimation.opacity.value,this.animationValues.scrollAnimation.opacity.target*this.animationValues.move.value,P(c.SCROLL_INTERPOLATION_SPEED,e)),this.animationValues.scrollAnimation.scale.value=N(this.animationValues.scrollAnimation.scale.value,this.animationValues.scrollAnimation.scale.target,P(c.SCROLL_INTERPOLATION_SPEED,e)),this.animationValues.amount.value<.99999&&(this.animationValues.amount.value=N(this.animationValues.amount.value,this.animationValues.amount.target,c.FADE_IN_SPEED*e*c.TARGET_FPS)),this.videoReady&&(this.animationValues.blendVideo.value=N(this.animationValues.blendVideo.value,this.animationValues.blendVideo.target,P(c.VIDEO_BLEND_SPEED,e)))}updateVideoLoop(){this.videoReady&&this.video.currentTime>=v.LOOP_END_TIME&&(this.video.currentTime=v.LOOP_START_TIME)}updateHeatInteraction(e){if(!this.videoReady)return;const n=this.interactionManager.getInteractionState(),t=this.interactionManager.getMouseState(),i=this.parameterController.getAllParameters();if(this.drawRenderer.updatePosition(t.position,!0),n.hold){let a=i.heatSensitivity;this.interactionManager.isUsingIdle()&&(a*=s.RADIUS_MULTIPLIER),this.heatUp+=a*e*c.TARGET_FPS,this.heatUp=Math.min(this.heatUp,c.HEAT_MAX_VALUE)}this.drawRenderer.updateDraw(this.heatUp),this.heatUp*=i.heatDecay,this.heatUp<O.HEAT_CLEANUP_THRESHOLD&&(this.heatUp=0),this.interactionManager.updateMousePosition(P(c.MOUSE_INTERPOLATION_SPEED,e)),this.interactionManager.updateIdleAnimation(performance.now()/1e3)}updateThermalMaterial(){if(!this.thermalMaterial)return;const e=this.parameterController.getAllParameters();this.thermalMaterial.updateUniforms({opacity:this.animationValues.scrollAnimation.opacity.value,amount:this.animationValues.amount.value,power:e.contrastPower,blendVideo:e.videoBlendAmount,randomValue:Math.random()})}updateMeshTransform(){if(!this.heatMesh)return;const e=F()?1:this.animationValues.scrollAnimation.scale.value;this.heatMesh.scale.set(e,e,e)}updateDrawRenderer(){this.drawRenderer.updateDirection({x:0,y:0})}getParameters(){var e;return((e=this.parameterController)==null?void 0:e.getAllParameters())??{}}setParameter(e,n){this.parameterController&&("setParameter"in this.parameterController?this.parameterController.setParameter(e,n):"setParameterSafe"in this.parameterController&&this.parameterController.setParameterSafe(e,n))}updateParameters(e){this.parameterController&&"updateParameters"in this.parameterController?this.parameterController.updateParameters(e):this.parameterController&&Object.entries(e).forEach(([n,t])=>{t!==void 0&&this.setParameter(n,t)})}resetParameters(){var e;(e=this.parameterController)==null||e.resetToDefaults()}dispose(){var e,n,t,i,a,o;(e=this.drawRenderer)==null||e.dispose(),(n=this.interactionManager)==null||n.dispose(),(t=this.parameterController)==null||t.dispose(),(i=this.thermalMaterial)==null||i.dispose(),this.heatMesh&&(this.heatMesh.geometry.dispose(),this.remove(this.heatMesh)),(a=this.maskTexture)==null||a.dispose(),(o=this.videoTexture)==null||o.dispose(),this.video&&(this.video.pause(),this.video.src="",this.video.load())}}function Xe(r={}){const e=g(!1),n=g(null);let t=null,i=null,a=!1;async function o(l){var m,R;try{n.value=null,a&&M(),t=new _e(l.webglContainer),i=new He(t),t.setScene(i),t.setCamera(i.camera),t.onUpdate=f=>i.update(f),await d(i,l),l.initialParameters&&E(l.initialParameters),a=!0,e.value=!0,(m=r.onReady)==null||m.call(r)}catch(f){const u=f instanceof Error?f:new Error(String(f));n.value=u,(R=r.onError)==null||R.call(r,u),console.error("Failed to initialize thermal effect:",f)}}async function d(l,m){const R=l.init.bind(l),f=await de(()=>Promise.resolve().then(()=>Me),void 0),u={...f.ASSETS};f.ASSETS.VIDEO_URL=m.videoUrl,f.ASSETS.MASK_URL=m.maskUrl;try{await R({videoElement:m.videoElement})}finally{Object.assign(f.ASSETS,u)}if(r.onInteractionChange&&l.interactionManager){const A=l.interactionManager.setInteracting;l.interactionManager.setInteracting=function(X){const ie=A.call(this,X);return r.onInteractionChange(X),ie}}}function E(l){if(!i||!a){console.warn("Thermal effect not initialized");return}try{Object.entries(l).forEach(([m,R])=>{R!==void 0&&i.setParameter(m,R)})}catch(m){console.error("Failed to update parameters:",m)}}function _(){if(!i||!a)return null;try{return i.getParameters()}catch(l){return console.error("Failed to get parameters:",l),null}}function M(){try{i&&(i.dispose(),i=null),t&&(t.onUpdate=null,t=null),a=!1,e.value=!1,n.value=null}catch(l){console.error("Error during disposal:",l)}}function w(){if(!(!i||!a))try{i.resetParameters()}catch(l){console.error("Failed to reset parameters:",l)}}function V(){if(!(!i||!a))try{const l=i.interactionManager;l!=null&&l.idleAnimator&&l.idleAnimator.forceIdle()}catch(l){console.error("Failed to force idle animation:",l)}}return{isLoaded:e,error:n,initialize:o,dispose:M,updateParameters:E,getParameters:_,resetParameters:w,forceIdleAnimation:V}}const ze=["src"],We={key:0,class:"absolute inset-0 flex items-center justify-center"},Ye={class:"text-red-400"},je={key:1,class:"absolute inset-0 flex items-center justify-center"},qe={class:"text-white/60"},Ke=me({__name:"ThermalLogo",props:{videoUrl:{default:`${"/2025".replace(/\/$/,"")+"/"}let_swift_mask_alt.mp4`},maskUrl:{default:`${"/2025".replace(/\/$/,"")+"/"}let_swift_heat_alt.png`},width:{default:"100%"},height:{default:"400px"},parameters:{},containerClasses:{},containerStyle:{},autoPlay:{type:Boolean,default:!0},enableIdleAnimation:{type:Boolean,default:!0},showDebugInfo:{type:Boolean,default:!1}},emits:["ready","error","interaction"],setup(r,{expose:e,emit:n}){const t=r,i=n,a=g(),o=g(),d=g(),E=g(0),_=g(null),{isLoaded:M,error:w,initialize:V,dispose:l,updateParameters:m,getParameters:R}=Xe({onReady:()=>i("ready"),onError:u=>i("error",u),onInteractionChange:u=>i("interaction",u)});U(()=>typeof t.width=="number"?`${t.width}px`:t.width),U(()=>typeof t.height=="number"?`${t.height}px`:t.height),fe(()=>t.parameters,u=>{u&&M.value&&m(u)},{deep:!0});const f=()=>{if(E.value++,_.value&&clearTimeout(_.value),E.value>=5){window.open("https://github.com/samhenrigold/apple-event-shader/?tab=readme-ov-file","_blank"),E.value=0;return}_.value=setTimeout(()=>{E.value=0},2e3)};return pe(async()=>{if(!a.value||!o.value||!d.value){i("error",new Error("Required DOM elements not found"));return}try{await V({container:a.value,webglContainer:o.value,videoElement:d.value,videoUrl:t.videoUrl,maskUrl:t.maskUrl,autoPlay:t.autoPlay,enableIdleAnimation:t.enableIdleAnimation,initialParameters:t.parameters})}catch(u){i("error",u)}}),Ee(()=>{_.value&&clearTimeout(_.value),l()}),e({updateParameters:m,getParameters:R,isLoaded:U(()=>M.value),error:U(()=>w.value)}),(u,A)=>(G(),b("div",{ref_key:"containerRef",ref:a,class:Re(["relative overflow-hidden","bg-black",u.containerClasses]),style:Ie({width:u.width||"100%",height:u.height||"400px",...u.containerStyle})},[T("div",{ref_key:"webglRef",ref:o,class:"canvas-wrapper absolute inset-0 w-full h-full",style:{pointerEvents:"none",cursor:"auto"}},[T("div",{class:"absolute inset-0 w-full h-full interaction-area cursor-default",style:{pointerEvents:"auto",cursor:"default"},onClick:f})],512),A[2]||(A[2]=T("button",{id:"play-pause-btn",class:"absolute top-4 right-4 opacity-0 pointer-events-none",type:"button"}," Play/Pause ",-1)),T("video",{ref_key:"videoRef",ref:d,class:"absolute opacity-0 pointer-events-none",src:u.videoUrl,muted:"",loop:"",preload:"auto",playsinline:"",fetchpriority:"high"},null,8,ze),B(w)?(G(),b("div",We,[T("div",Ye,[W(u.$slots,"error",{error:B(w)},()=>[A[0]||(A[0]=T("div",null,"Failed to load thermal effect",-1))])])])):B(M)?ve("",!0):(G(),b("div",je,[T("div",qe,[W(u.$slots,"loading",{},()=>[A[1]||(A[1]=T("div",{class:"animate-pulse"},"Loading thermal effect...",-1))])])]))],6))}}),Ze=Ae(Ke,[["__scopeId","data-v-e6243e82"]]);export{Ze as default};
