const viewer=document.getElementById('viewer');
const p=document.getElementById('progress');
const loader=document.getElementById('loader');
const dims=document.getElementById('dims');

viewer.addEventListener('progress',e=>{
 p.style.width=(e.detail.totalProgress*100)+'%';
});
viewer.addEventListener('load',()=>{
 loader.style.display='none';
 const s=viewer.getDimensions();
 dims.textContent=`Dimensions : ${s.x.toFixed(2)} × ${s.y.toFixed(2)} × ${s.z.toFixed(2)} m`;
});
document.getElementById('reset').onclick=()=>viewer.cameraOrbit='45deg 75deg auto';
document.getElementById('fullscreen').onclick=()=>{
 if(!document.fullscreenElement) document.documentElement.requestFullscreen();
 else document.exitFullscreen();
};
