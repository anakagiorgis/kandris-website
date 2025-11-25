// Configuration: replace these with real video IDs from the teacher's YouTube channel.
// Example: ['dQw4w9WgXcQ','M7lc1UVf-VE']
// If you want, I can populate these for you using the YouTube Data API (requires an API key).
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@djkgr';
// Video IDs added from the links you provided
const VIDEO_IDS = [
  'utj600_A2yk',
  'CQ6DfRCOX8M',
  '74ArP-_ieI8'
];

function createVideoCard(id){
  const container = document.createElement('article');
  container.className = 'video-card';

  const iframe = document.createElement('iframe');
  iframe.className = 'video-frame';
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.title = 'YouTube video player';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;

  const title = document.createElement('div');
  title.className = 'video-title';
  title.textContent = `Video: ${id}`;

  container.appendChild(iframe);
  container.appendChild(title);
  return container;
}

function renderVideos(){
  const grid = document.getElementById('video-grid');
  grid.innerHTML = '';
  if(!VIDEO_IDS || VIDEO_IDS.length === 0){
    const p = document.createElement('p');
    p.className = 'hint';
    p.textContent = 'No videos configured yet. Edit `js/script.js` and add YouTube video IDs to the `VIDEO_IDS` array.';
    grid.appendChild(p);
    return;
  }

  VIDEO_IDS.forEach(id => {
    if(typeof id === 'string' && id.trim()){
      grid.appendChild(createVideoCard(id.trim()));
    }
  });
}

// Set year in footer
document.addEventListener('DOMContentLoaded', ()=>{
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  renderVideos();
  // Profile image handling: prefer a saved image in localStorage, else show `images/profile.jpg`.
  const profileImg = document.getElementById('profile-img');
  const uploadInput = document.getElementById('upload-photo');

  function loadSavedProfile(){
    try{
      const data = localStorage.getItem('profileImage');
      if(data && profileImg){
        profileImg.src = data;
      }
    }catch(e){
      // ignore storage errors
    }
  }

  function handleFileSelect(e){
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    if(!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = function(evt){
      const src = evt.target.result;
      if(profileImg) profileImg.src = src;
      try{ localStorage.setItem('profileImage', src); }catch(err){ /* ignore */ }
    };
    reader.readAsDataURL(file);
  }

  if(uploadInput){
    uploadInput.addEventListener('change', handleFileSelect);
  }

  loadSavedProfile();
});
