var T = THREE;
     var camera, renderer, scene , controls , clock;

     var textParticles;
     var time = { type:"f" , value: 1 }
     var shaders = new ShaderLoader( 'shaders' );
     shaders.shaderSetLoaded = function(){
       init();
       animate();
     }
     shaders.load( 'vs-text' , 'text' , 'vertex'   );
     shaders.load( 'fs-text' , 'text' , 'fragment' );
     function init(){
       var w = window.innerWidth;
       var h = window.innerHeight;
       camera = new THREE.PerspectiveCamera( 65 , w/h , .001 , 4 );
       camera.position.z = 1;
       controls = new ScrollControls( camera );

       clock = new THREE.Clock();

       scene = new THREE.Scene();
       var dpr = window.devicePixelRatio || 1;
       renderer = new THREE.WebGLRenderer();
       renderer.setPixelRatio( dpr );
       renderer.setSize( window.innerWidth, window.innerHeight );
       document.body.prepend( renderer.domElement );
       var font = PTMono( 'static/fonts/PTMono.png' );
       var vs = shaders.vertexShaders.text;
       var fs = shaders.fragmentShaders.text;
       title = new TextParticles( "Arterion Labs" , font , vs , fs , {
        letterWidth: .05,
        lineLength: 15,
        uniforms:{
         time: time,
        }
       });

       title.position.x = -title.totalWidth / 2;
      // title.position.z = -.2;
       title.position.y = 0.4;
       // Passage comes from seperate file
       textParticles = new TextParticles( passage , font , vs , fs , {
        letterWidth: .02,
        lineLength: 250,
        uniforms:{
         time: time,
        }
       });

       textParticles.position.y = -0.3;

       scene.add( textParticles );
      //  scene.add( title );
       //textParticles.material.uniforms.time.value = 1.;
       textParticles.position.x = - textParticles.totalWidth / 2;
       controls.minPos     = -textParticles.totalHeight * 2;
       controls.maxPos     =  0;
       controls.multiplier =  .00001 * textParticles.totalHeight;
       controls.dampening  = 0.96;
       window.addEventListener( 'resize', onWindowResize, false );
     }

     function animate(){
       requestAnimationFrame( animate );
       time.value += clock.getDelta();
       controls.update();
       renderer.render( scene , camera );
     }
     function onWindowResize() {
       camera.aspect = window.innerWidth / window.innerHeight;
       camera.updateProjectionMatrix();
       renderer.setSize( window.innerWidth, window.innerHeight );
     }
