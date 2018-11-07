function updateProfileImageSpin() {
  let profile = $('#profile-image'),
      deg = scrollY % 360;

  if (!profile) return;
  profile.style.transform =  'rotate(' + (-deg) + 'deg)';
}

window.addEventListener('DOMContentLoaded', updateProfileImageSpin, false);
window.addEventListener('scroll', updateProfileImageSpin, false);
window.addEventListener('resize', updateProfileImageSpin, false);
setInterval(updateProfileImageSpin, 1000);
