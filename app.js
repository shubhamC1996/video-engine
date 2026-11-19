const mode=document.querySelector('#mode'), photoWrap=document.querySelector('#photoWrap'), photo=document.querySelector('#photo'), preview=document.querySelector('#preview'), promptBox=document.querySelector('#prompt'), status=document.querySelector('#status');
mode.addEventListener('change',()=>{photoWrap.hidden=mode.value!=='image'});
photo.addEventListener('change',()=>{const f=photo.files[0];if(!f)return;preview.src=URL.createObjectURL(f);preview.hidden=false});
document.querySelector('#prepare').addEventListener('click',()=>{
 const p=promptBox.value.trim(); if(!p){status.textContent='पहले वीडियो का विवरण लिखिए।';return}
 if(mode.value==='image'&&!photo.files.length){status.textContent='Photo to Video के लिए पहले फोटो चुनिए।';return}
 const ratio=document.querySelector('#ratio').value, duration=document.querySelector('#duration').value;
 status.textContent=`आपका प्रॉम्प्ट तैयार है: ${p} | ${ratio} | ${duration}। अगला कदम: compatible AI video backend जोड़ना। अभी वीडियो render नहीं हुआ है।`;
});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));