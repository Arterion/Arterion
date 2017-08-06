
function ScrollControls( camera , params ){

  this.camera     = camera;
  var params      = params || {};

  this.dampening  = params.dampening  || .9;
  this.minPos     = params.minPos     || -1000;
  this.maxPos     = params.maxPos     ||  0;
  this.multiplier = params.multiplier || .01;

  this.speed = 0;
  this.old_scroll_top = 0;


  //window.addEventListener( 'mousewheel', this.onMouseWheel.bind( this ), false );
  document.addEventListener('scroll', this.onScrolling.bind( this ), true);


}

ScrollControls.prototype.update = function(){

  this.camera.position.y += this.speed;

  if( this.camera.position.y < this.minPos ){

    var dif = this.minPos - this.camera.position.y;

    this.camera.position.y = this.minPos;
    this.speed = 0;

    // this.speed += this.

  }else if( this.camera.position.y > this.maxPos ){

    var dif = this.maxPos - this.camera.position.y;

    this.camera.position.y = this.maxPos;
    this.speed = 0;

    // this.speed += this.

  }

  this.speed *= this.dampening;

}


ScrollControls.prototype.onScrolling = function( e ){

//  console.log(e);

    var current_scroll_top = $(document).scrollTop();
    var scroll_delta = current_scroll_top - this.old_scroll_top;
    this.old_scroll_top = current_scroll_top;

  this.speed -= 2 * scroll_delta * this.multiplier;

}
