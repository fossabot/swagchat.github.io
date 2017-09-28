(function(){
"use strict";
var mouseX = 0, mouseY = 0,

windowHalfX = window.innerWidth / 2,
windowHalfY = window.innerHeight / 2,

SEPARATION = 300,
AMOUNTX = 1,
AMOUNTY = 1,

camera, scene, renderer;

init();
//animate();



function init() {


    /*
     *   Define variables
     */
    var container, separation = 10, amountX = 10, amountY = 10, color = 0xffffff,
    particles, particle;

    container = document.getElementById("background-effect");


    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 10;

    scene = new THREE.Scene();

    renderer = new THREE.CanvasRenderer({ alpha: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setClearColor( 0x000000, 0 );   // canvas background color
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

   

    var PI2 = Math.PI * 2;
    var material = new THREE.SpriteCanvasMaterial( {

        color: color,
        opacity: 0,
        program: function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 0.5, 0, PI2, true );
            context.fill();

        }

    } );

    var geometry = new THREE.Geometry();

    /*
     *   Number of particles
     */
    for ( var i = 0; i < 90; i ++ ) {

        particle = new THREE.Sprite( material );
        particle.position.x = Math.random() * 2 - 1;
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = Math.random() * 2 - 1;
        particle.position.normalize();
        particle.position.multiplyScalar( Math.random() * 10 + 800 );
        particle.scale.x = particle.scale.y = 600;

        scene.add( particle );

        geometry.vertices.push( particle.position );

    }

    /*
     *   Lines
     */



    var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: color, opacity: 0.3 } ) );
    scene.add( line );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//function render() {

function onDocumentMouseMove(event) {

    mouseX = (event.clientX - windowHalfX) * 0.04;
    mouseY = (event.clientY - windowHalfY) * 0.04;

}

//

function animate() {

    requestAnimationFrame( animate );

    render();

}

function render() {

    camera.position.x += ( mouseX - camera.position.x ) * 0.1;
    camera.position.y += ( - mouseY + 200 - camera.position.y ) * 0.05;

    var timer = Date.now() * 0.0001;
    camera.position.z = Math.sin( timer ) * 130;   

    camera.lookAt( scene.position );
    renderer.render( scene, camera );

}

})();
